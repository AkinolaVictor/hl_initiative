import React, { useEffect, useRef, useState } from 'react'
import imageCompression from 'browser-image-compression';
import { format_by_count, genID, isBlank } from '@/utils/exports';
import { supabase } from '@/utils/supabase';
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
// const imageCompression = require("browser-image-compression")

interface Props {}

interface Task {
    name?: string,
    title?: string
}

function AddTeam(props: Props) {
    const {} = props
    const {} = props
    const {edit_team_data} = useSelector((state:any)=>state.generalSlice)
    const [name, setName] = useState(edit_team_data.name || "")
    const [title, setTitle] = useState(edit_team_data.title || "")
    const [linkedIn, setLinkedIn] = useState(edit_team_data.linkedin || "")
    const [instagram, setInstagram] = useState(edit_team_data.instagram || "")
    const [x, setX] = useState(edit_team_data.x || "")
    const inputFile = useRef<any>(null)
    const inputFile2 = useRef<any>(null)
    const inputFile3 = useRef<any>(null)
    const [compressing, setCompressing] = useState(false)
    const [image, setImage] = useState<any>(null)
    const [category, setCategory] = useState(edit_team_data.category || "Core Member")
    const [color, setColor] = useState(edit_team_data.bg_color || "#bbb")
    const [tx_color, setTxColor] = useState(edit_team_data.tx_color || "black")
    const [error, setError] = useState("")
    const {setGeneralAlpha} = generalFunctions()
    const [loading, setLoading] = useState(false)
    // const {updated_database} = useSelector((state:any)=>state.generalSlice)
        
    function fileUpload(e:any){
        if(e.target.files.length){
            let reader = new FileReader();

            reader.addEventListener('load', async ()=>{
                // handleFile(reader.result)
                // const maxFileMb = 35.9
                // const fileSize = e.target.files[0].size
                // console.log({currentFile});

                let currentFile = e.target.files[0]
                const type = e.target.files[0].type.split('/')

                // if(type[0] !== 'image' || type[0] !== 'video'){
                if(type[0] !== 'image'){
                    alert('invalid file type, you can only upload an image file')
                    return
                }

                let proceed = false
                if(type[0]==='image'){
                    setCompressing(true)
                    const options = {
                        maxSizeMB: 2,
                        maxWidthOrHeight: 10240,
                        useWebWorker: true,
                    }

                    await imageCompression(currentFile, options).then((res:any)=>{
                        currentFile = res
                        // console.log({res});
                        setCompressing(false)
                        proceed= true
                    }).catch((err:any)=>{
                        console.log(err)
                        setCompressing(false)
                        proceed= false
                    })
                }
                
                if(!proceed) {
                    alert(`Unable to access image, please upload again.`)
                    return
                }

                setImage(currentFile)


            })

            reader.readAsDataURL(e.target.files[0]);
        }

    }

    function validator() {
        let pass = true
        let message = ""
        
        if(isBlank(name)) return {
            pass: false,
            message: "Please ensure to add a name"
        }
        
        if(isBlank(title)) return {
            pass: false,
            message: "Please ensure to add a title"
        }
        
        if(!(edit_team_data.photourl || image)) return {
            pass: false,
            message: "Please ensure to select a photo"
        }

        return {pass, message}
    }

    async function creator() {
        if(loading) return

        setError("")
        const {pass, message} = validator()
        if(!pass){
            setError(message)
            return
        }

        setLoading(true)

        const {photourl, filePath} = await uploadFile()
        // console.log({photourl})

        const payload = {
            name, title, category, x, instagram, filePath,
            bg_color: color,
            tx_color,
            linkedin: linkedIn,
            data_id: edit_team_data.data_id || genID(),
            photourl: photourl || edit_team_data.photourl,
        }

        // console.log(payload)
        // return
        if(edit_team_data.data_id){
            await updataData(payload)
        } else {
            const {error} = await supabase.from("team").insert({...payload}).single()
            // to add multiple data, set them as array of objects
            // await supabase.from("team").insert([payload, payload, {something: ""}]) 
            if(error) {
                console.log("error encountered")
                console.log(error)
                setLoading(false)
                setError("Insert Error")
                return
            } else {
                // console.log("completed 1")
                // console.log(data)
            }
        }

        
        setGeneralAlpha("updated_database", (prev:number)=>prev+1)
        setGeneralAlpha("edit_team_data", {})
        setGeneralAlpha("show_admin_modal", false)
        setGeneralAlpha("admin_sub_route", "menu")
        setLoading(false)
    }

    async function uploadFile() {
        if(!image) return {}

        const projectdir = format_by_count(name, 3, true).split(" ").join("_")
        const filePath = `team/${projectdir}/${new Date().toISOString()}-${image.name}`
        const {error} = await supabase.storage.from("hl_uploads").upload(filePath, image)

        if(error){
            console.log("Upload error")
            return {}
        }

        const {data} = await supabase.storage.from("hl_uploads").getPublicUrl(filePath)
        // console.log({url: data})
        return {
            photourl: data.publicUrl,
            filePath
        }
    }

    async function deleteFile(filePath: string) {

        const { error } = await supabase.storage.from("hl_uploads").remove([filePath])

        if(error){
            console.log("Upload error")
            return null
        }

        // return data.publicUrl
    }

    const [newData, setNewData] = useState<Task[]>([])
    async function fetchData() {
        return
        // const {error, data} = await supabase.from("team").select("*")
        const {error, data} = await supabase
        .from("team")
        .select("*")
        .order("created_at", {ascending: true})

        if(error) {
            console.log("error encountered")
            console.log(error)
            return
        } else {
            console.log("completed 1")
            console.log(data)
            // setNewData(data)
        }
    }
    // console.log(newData)

    async function deleteData(id: any){
        const {error} = await supabase
        .from("team")
        .delete()
        .eq("id", id)
        // .eq("data_id", id)

        if(error){
            console.log("not deleted")
            return
        }
    }

    async function updataData(payload: any){
        const {error} = await supabase
        .from("team")
        .update({...payload})
        .eq("data_id", edit_team_data.data_id)
        // .eq("data_id", id)

        if(error){
            console.log("not updated")
            return
        }
    }

    if (loading){
        return (
            <div className='w-full p-10 flex justify-center items-center'>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className='w-full h-auto max-h-120 px-8 text-[14px] relative overflow-y-auto'>

            <div className='w-full h-auto'>
                <div className='w-full flex justify-between items-center'>
                    <p>Name:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{50-name.length}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    placeholder='Name of Team Member'
                    value={name}
                    onChange={(e)=>{e.target.value.length<=50 && setName(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            
            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p>Title:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{50-title.length}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    placeholder='Title of Member'
                    value={title}
                    onChange={(e)=>{e.target.value.length<=50 && setTitle(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            <div className='w-full mt-6 h-auto'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>Category:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{category}</p>
                </div>

                <div className='w-full bg-black p-2 mt-1 rounded-full flex justify-center items-center'>
                    <p onClick={()=>{setCategory("Core Member")}} className={`w-full h-auto cursor-pointer ${category==="Core Member"?"bg-white text-black":"bg-black text-white"} rounded-full text-center p-2`}>Core Member</p>
                    <p onClick={()=>{setCategory("Volunteer")}} className={`w-full h-auto cursor-pointer ${category==="Volunteer"?"bg-white text-black":"bg-black text-white"} rounded-full text-center p-2`}>Volunteer</p>
                </div>
            </div>

            
            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>LinkedIn Url:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    placeholder='Add a linkedin url'
                    value={linkedIn}
                    onChange={(e)=>{setLinkedIn(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            
            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>X (Twitter) Url:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    placeholder='Add a X url'
                    value={x}
                    onChange={(e)=>{setX(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            
            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>Instagram Url:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    placeholder='Add an instagram url'
                    value={instagram}
                    onChange={(e)=>{setInstagram(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            <input type="file" className='hidden' ref={inputFile} accept='image/*' multiple={false} onChange={fileUpload} />
            <div onClick={()=>{inputFile?.current?.click()}} className='createpost py-3 bg-amber-200 text-black mt-5 rounded-[40px] cursor-pointer w-full text-center '>
                {image?<p >Photo Added</p>:null}
                <p>Click to {image?"change":"select"} photo</p>
            </div>

            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>Background Color:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'></p>
                </div>

                <input type="color" className='hidden' ref={inputFile2} value={color} onChange={(e)=>setColor(e.target.value)} />
                <div onClick={()=>{inputFile2?.current?.click()}} style={{backgroundColor: color,}} className={`createpost py-3 flex justify-center items-center mt-1 rounded-[15px] h-30 cursor-pointer w-full text-center`}>
                    <p style={{color: tx_color}}>Tap to select</p>
                </div>
            </div>

            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>Text Color:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'></p>
                </div>

                <input type="color" className='hidden' ref={inputFile3} value={tx_color} onChange={(e)=>setTxColor(e.target.value)} />
                <div onClick={()=>{inputFile3?.current?.click()}} style={{backgroundColor: tx_color,}} className={`createpost py-3 flex justify-center items-center mt-1 rounded-[15px] h-10 cursor-pointer w-full text-center`}>
                    <p style={{color: "rosybrown"}}>Tap to select</p>
                </div>
            </div>

            <p className='text-center mt-5 text-[13px] text-red-500'>{error}</p>

            <div onClick={creator} className='createpost py-3 bg-amber-900 text-white mt-3 rounded-[40px] cursor-pointer w-full text-center '>
                <p>Save</p>
            </div>
        </div>
    )
}

export default AddTeam
