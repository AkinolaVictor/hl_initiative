import React, { useRef, useState } from 'react'
import imageCompression from 'browser-image-compression';
import { format_by_count, genID, isBlank } from '@/utils/exports';
import { supabase } from '@/utils/supabase';
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions';
import { useSelector } from 'react-redux';
// const imageCompression = require("browser-image-compression")

interface Props {}

function AddGallery(props: Props) {
    const {} = props
    const {edit_gallery_data} = useSelector((state:any)=>state.generalSlice)
    const [title, setTitle] = useState(edit_gallery_data.title || "")
    const [theme, setTheme] = useState(edit_gallery_data.theme || "")
    const [description, setDescription] = useState(edit_gallery_data.description || "")
    const [introduction, setIntroduction] = useState(edit_gallery_data.introduction || "")
    const [objective, setObjective] = useState(edit_gallery_data.objective || "")
    const [impact, setImpact] = useState(edit_gallery_data.impact || "")
    // const [body, setBody] = useState("https://editorjs.io/")
    const inputFile = useRef<any>(null)
    const inputFile2 = useRef<any>(null)
    const inputFile3 = useRef<any>(null)
    const [compressing, setCompressing] = useState(false)
    const [images, setImages] = useState<any>([])
    const [category, setCategory] = useState(edit_gallery_data.category || "Outreach")
    const [color, setColor] = useState(edit_gallery_data.bg_color || "#aaa")
    const [tx_color, setTxColor] = useState(edit_gallery_data.tx_color || "black")
    const [error, setError] = useState("")
    const {setGeneralAlpha} = generalFunctions()
    const [loading, setLoading] = useState(false)
        
    function fileUpload(e:any){
        if(e.target.files.length){
            let reader = new FileReader();

            reader.addEventListener('load', async ()=>{
                // handleFile(reader.result)
                // const maxFileMb = 35.9
                // const fileSize = e.target.files[0].size
                // console.log({currentFile});
                const allFiles = e.target.files

                const build = []

                for(let i=0; i<allFiles.length; i++){
                    let currentFile = allFiles[i]
                    const type = allFiles[i].type.split('/')
                    
                    if(type[0] !== 'image'){
                        alert('invalid file type, you can only upload images')
                        return
                    }

                    
                    if(type[0]==='image'){
                        const result = await customCompressor(currentFile)
                        build.push(result)
                    }

                }

                // console.log({build})

                setImages(build)

                async function customCompressor(thisFile:any){
                    const options = {
                        maxSizeMB: 3,
                        maxWidthOrHeight: 10240,
                        useWebWorker: true,
                    }

                    return await imageCompression(thisFile, options).then((res:any)=>{
                        // console.log({res});
                        console.log("done compressing...");
                        return res
                    }).catch((err:any)=>{
                        console.log(err)
                        return thisFile
                    })
                }
                
                // if(!proceed) {
                //     alert(`Unable to access image, please upload again.`)
                //     return
                // }


            })

            reader.readAsDataURL(e.target.files[0]);
        }

    }
    
    function validator() {
        let pass = true
        let message = ""

        if(isBlank(title)) return {
            pass: false,
            message: "Please ensure to add a title"
        }

        if(isBlank(theme)) return {
            pass: false,
            message: "Please ensure to add a theme"
        }

        if(isBlank(description)) return {
            pass: false,
            message: "Please ensure to add a description"
        }

        if(isBlank(introduction)) return {
            pass: false,
            message: "Please ensure to add an introduction"
        }

        if(isBlank(objective)) return {
            pass: false,
            message: "Please ensure to add an objective"
        }

        if(isBlank(impact)) return {
            pass: false,
            message: "Please ensure to add an impact"
        }

        if(!(images.length || edit_gallery_data?.photourl?.length)) return {
            pass: false,
            message: "Please ensure to select one or more photos"
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

        let photourls = images.length?[]:[...edit_gallery_data.photourl]
        let filepaths = images.length?[]:[...edit_gallery_data.filepath]
        for(let i=0; i<images.length; i++){
            const eachPhoto = images[i]
            const {photourl, filePath} = await uploadFile(eachPhoto)
            
            if(!photourl) continue

            photourls.push(photourl)
            filepaths.push(filePath)
        }

        // console.log({photourls, filepaths})
        if(!photourls.length) return
        
        const payload = {
            title, theme, description, category, introduction, objective, impact, tx_color,
            photourl: [...photourls],
            filepath: [...filepaths],
            bg_color: color,
            data_id: edit_gallery_data.data_id || genID(),
        }

        if(edit_gallery_data.data_id){
            await updataData(payload)
        } else {
            const {error, data} = await supabase.from("gallery").insert({...payload}).single()
            // to add multiple data, set them as array of objects
            // await supabase.from("team").insert([payload, payload, {something: ""}]) 
    
            if(error) {
                console.log("error encountered")
                console.log(error)
                setLoading(false)
                setError("Insert Error")
                return
            } else {
                console.log("completed 1")
                console.log(data)
            }
        }


        setGeneralAlpha("updated_database", (prev:number)=>prev+1)
        setGeneralAlpha("edit_gallery_data", {})
        setGeneralAlpha("show_admin_modal", false)
        setGeneralAlpha("admin_sub_route", "menu")
        setLoading(false)

    }
    
    async function uploadFile(image: File) {
        if(!image) return {}
        // const projectdir = title.split(" ").join("_")
        const projectdir = format_by_count(title, 5, true).split(" ").join("_")
        const filePath = `gallery/${projectdir}/${new Date().toISOString()}-${image.name}`
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
    
    async function updataData(payload: any){
        const {error} = await supabase
        .from("gallery")
        .update({...payload})
        .eq("data_id", edit_gallery_data.data_id)
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
                    <p>Title:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{100-title.length}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    placeholder='Add a title'
                    value={title}
                    onChange={(e)=>{e.target.value.length<=100 && setTitle(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p>Theme:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{100-theme.length}</p>
                </div>
                
                <input 
                    type="text"
                    name='theme'
                    placeholder='Add a title'
                    value={theme}
                    onChange={(e)=>{e.target.value.length<=100 && setTheme(e.target.value); setError("")}}
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
                    <p onClick={()=>{setCategory("Outreach")}} className={`w-full h-auto cursor-pointer ${category==="Outreach"?"bg-white text-black":"bg-black text-white"} rounded-full text-center p-2`}>Outreach</p>
                    <p onClick={()=>{setCategory("Webinar")}} className={`w-full h-auto cursor-pointer ${category==="Webinar"?"bg-white text-black":"bg-black text-white"} rounded-full text-center p-2`}>Webinar</p>
                </div>
            </div>

            <div className='w-full h-auto mt-5'>
                <div className='w-full flex justify-between items-center'>
                    <p>Description:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{250-description.length}</p>
                </div>

                <textarea
                    // type="text"
                    name='title'
                    value={description}
                    onChange={(e)=>{e.target.value.length<=250 && setDescription(e.target.value); setError("")}}
                    className='w-full h-17 mt-1 px-3 py-2 rounded-[5px]'
                    style={{border: "1px solid black"}}
                    placeholder='Add a description of project'
                />
            </div>

            <div className='w-full h-auto mt-5'>
                <div className='w-full flex justify-between items-center'>
                    <p>Introduction:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{1000-introduction.length}</p>
                </div>

                <textarea
                    // type="text"
                    name='title'
                    value={introduction}
                    onChange={(e)=>{e.target.value.length<=1000 && setIntroduction(e.target.value); setError("")}}
                    className='w-full h-30 mt-1 px-3 py-2 rounded-[5px]'
                    style={{border: "1px solid black"}}
                    placeholder='Add an Introduction of project'
                />
            </div>

            <div className='w-full h-auto mt-5'>
                <div className='w-full flex justify-between items-center'>
                    <p>Objective:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{1000-objective.length}</p>
                </div>

                <textarea
                    // type="text"
                    name='title'
                    value={objective}
                    onChange={(e)=>{e.target.value.length<=1000 && setObjective(e.target.value); setError("")}}
                    className='w-full h-30 mt-1 px-3 py-2 rounded-[5px]'
                    style={{border: "1px solid black"}}
                    placeholder='Add objectives of project'
                />
            </div>

            <div className='w-full h-auto mt-5'>
                <div className='w-full flex justify-between items-center'>
                    <p>Impact:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{1000-impact.length}</p>
                </div>

                <textarea
                    // type="text"
                    name='title'
                    value={impact}
                    onChange={(e)=>{e.target.value.length<=1000 && setImpact(e.target.value); setError("")}}
                    className='w-full h-30 mt-1 px-3 py-2 rounded-[5px]'
                    style={{border: "1px solid black"}}
                    placeholder='Describe the impact of the project'
                />
            </div>

            {/* <input type="file" multiple name="fileselector" className='hidden' ref={inputFile}/> */}
            <input type="file" className='hidden' ref={inputFile} accept='image/*' multiple onChange={fileUpload} />
            <div onClick={()=>{inputFile?.current?.click()}} className='createpost py-3 bg-amber-200 text-black mt-5 rounded-[40px] cursor-pointer w-full text-center '>
                {images.length?<p>{images.length} {images.length>1?"Photos":"Photo"} Added</p>:null}
                <p>Click to {images.length?"change":"select"} photo</p>
            </div>

            <div className='w-full h-auto mt-6'>
                <div className='w-full flex justify-between items-center'>
                    <p className='w-full'>Background Color:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'></p>
                </div>

                <input type="color" className='hidden' ref={inputFile2} value={color}  multiple={false} onChange={(e)=>setColor(e.target.value)} />
                <div onClick={()=>{inputFile2?.current?.click()}} style={{backgroundColor: color}} className={`createpost py-3 flex justify-center items-center mt-1 text-white rounded-[15px] h-30 cursor-pointer w-full text-center`}>
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
                <p>Create</p>
            </div>

            
        </div>
    )
}

export default AddGallery
