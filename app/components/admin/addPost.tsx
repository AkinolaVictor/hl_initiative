import React, { useRef, useState } from 'react'
import CustomEditor from './customEditor'
import imageCompression from 'browser-image-compression';
import { format_by_count, genID, isBlank } from '@/utils/exports';
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions';
import { supabase } from '@/utils/supabase';
import { useSelector } from 'react-redux';
// const imageCompression = require("browser-image-compression")

interface Props {}

function AddPost(props: Props) {
    const {} = props
    const {edit_blog_data} = useSelector((state:any)=>state.generalSlice)
    const [title, setTitle] = useState(edit_blog_data.title || "")
    const [description, setDescription] = useState(edit_blog_data.description || "")
    const [body, setBody] = useState(edit_blog_data.body || "")
    const inputFile = useRef<any>(null)
    const [compressing, setCompressing] = useState(false)
    const [image, setImage] = useState<any>(null)
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
                        maxSizeMB: 3,
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

        if(isBlank(title)) return{
            pass: false,
            message: "Please ensure to add a title"
        }

        if(isBlank(description)) return{
            pass: false,
            message: "Please ensure to add a description"
        }

        if(isBlank(body)) return{
            pass: false,
            message: "Please ensure to add a body"
        }

        if(!(edit_blog_data.photourl || image)) return {
            pass: false,
            message: "Please ensure to add a photo"
        }

        return {pass, message}
    }

    async function creator() {
        setError("")
        const {pass, message} = validator()

        if(!pass){
            setError(message)
            return
        }

        setLoading(true)

        const {photourl, filePath} = await uploadFile()
        
        const payload = {
            title, description, body, filePath,
            data_id: edit_blog_data.data_id || genID(),
            photourl: photourl || edit_blog_data.photourl,
        }


        if(edit_blog_data.data_id){
            await updataData(payload)
        } else {
            const {error} = await supabase.from("blog").insert({...payload}).single()
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
        setGeneralAlpha("edit_blog_data", {})
        setGeneralAlpha("show_admin_modal", false)
        setGeneralAlpha("admin_sub_route", "menu")
        setLoading(false)
    }
    
    async function uploadFile() {
        if(!image) return {}

        const projectdir = format_by_count(title, 5, true).split(" ").join("_")
        const filePath = `blog/${projectdir}/${new Date().toISOString()}-${image.name}`
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
        .from("blog")
        .update({...payload})
        .eq("data_id", edit_blog_data.data_id)

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
                    <p className='w-full text-right text-[13px] text-[rosybrown]'>{70-title.length}</p>
                </div>
                
                <input 
                    type="text"
                    name='title'
                    value={title}
                    placeholder='Add post title'
                    onChange={(e)=>{e.target.value.length<=70 && setTitle(e.target.value); setError("")}}
                    className='w-full h-10 mt-1 px-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
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
                    placeholder='Add post description'
                    onChange={(e)=>{e.target.value.length<=250 && setDescription(e.target.value); setError("")}}
                    className='w-full h-17 mt-1 px-3 py-2 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />
            </div>

            <div className='w-full h-auto mt-5'>
                <div className='w-full flex justify-between items-center'>
                    <p>Body:</p>
                    <p className='w-full text-right text-[13px] text-[rosybrown]'></p>
                </div>

                <textarea
                    // type="text"
                    name='title'
                    value={body}
                    placeholder='Add post content'
                    onChange={(e)=>{setBody(e.target.value); setError("")}}
                    className='w-full h-40 mt-1 p-3 rounded-[5px]'
                    style={{border: "1px solid black"}}
                />

                {/* <CustomEditor /> */}
            </div>

            {/* <input type="file" multiple={false} name="fileselector" className='hidden' ref={inputFile}/> */}
            <input type="file" className='hidden' ref={inputFile} accept='.jpg, .png, .jpeg, .gif' multiple={false} onChange={fileUpload} />
            <div onClick={()=>{inputFile?.current?.click()}} className='createpost py-3 bg-amber-200 text-black mt-5 rounded-[40px] cursor-pointer w-full text-center '>
                {image?<p >Photo Added</p>:null}
                <p>Click to {image?"change":"select"} photo</p>
            </div>
            <p className='text-center mt-5 text-[13px] text-red-500'>{error}</p>
            <div onClick={creator} className='createpost py-3 bg-amber-900 text-white mt-3 rounded-[40px] cursor-pointer w-full text-center '>
                <p>Create</p>
            </div>
        </div>
    )
}

export default AddPost
