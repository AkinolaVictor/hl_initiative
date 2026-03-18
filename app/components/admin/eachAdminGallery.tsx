import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { format_by_count } from '@/utils/exports'
import { supabase } from '@/utils/supabase'
import { Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
    data?: any,
    setShowConfirm: any,
    setAction: any,
}

function EachAdminGallery(props: Props) {
    const {data, setShowConfirm, setAction} = props
    const {title, photourl, data_id, tx_color, bg_color, category, filepath, description, theme} = data || {}
    const this_id = theme.split(" ").join("_")
    const router = useRouter()
    const {setGeneralAlpha} = generalFunctions()
    const [loading, setLoading] = useState(false)

    function editFunc(){
        // console.log(data)
        // return

        setGeneralAlpha("show_admin_modal", true)
        setGeneralAlpha("edit_gallery_data", data)
        setGeneralAlpha("admin_sub_route", "gallery")
    }
    
    async function deleteData(){
        setShowConfirm(true)
        setAction(()=>()=>{
            deleteData_real()
        })
    }
    
    async function deleteData_real(){
        if(loading) return
        setShowConfirm(false)
        setLoading(true)
        
        if(filepath) {
            const {error} = await supabase.storage.from("hl_uploads").remove([...filepath])
            if(error){
                console.log("remove error")
                console.log(error)
                return
            } else {
                console.log("deleted file")
            }
            // for(let i=0; i<filepath.length; i++){
            // }
        }


        const {error} = await supabase
        .from("gallery")
        .delete()
        .eq("data_id", data_id)
        // .eq("data_id", id)

        if(error){
            console.log("not deleted")
            return
        } else {
            console.log("deleted")
        }

        setGeneralAlpha("updated_database", (prev:number)=>prev+1)
        setGeneralAlpha("edit_gallery_data", {})
        setLoading(false)
    }

    return (
        <div 
            className={`w-full max-w-91 h-auto p-3 rounded-[20px] text-white`}
            style={{background: bg_color, color: tx_color}}
        >
            <div onClick={()=>{}} className='w-full h-50 bg-black rounded-2xl relative'>
                <img src={photourl[0]||"/check_bp_2.jpg"} alt="" className='w-full max-w-91 rounded-2xl h-50 object-cover object-center'/>
                <div onClick={(e)=>{e.stopPropagation(); deleteData()}} className='w-10 h-10 rounded-full absolute top-3 right-3 flex justify-center items-center bg-[#C00707] cursor-pointer'>
                    <Trash2 className='' size={17} color='white'/>
                </div>
                <div onClick={(e)=>{e.stopPropagation(); editFunc()}} className='w-10 h-10 rounded-full absolute top-15   right-3 flex justify-center items-center bg-[#C00707] cursor-pointer'>
                    <Pencil className='' size={17} color='white'/>
                </div>
            </div>
            <h1 className='font-semibold text-center mt-3 mb-1 text-[14px]'>{title}</h1>
            <h1 className=' text-center mb-1 text-[13px]'>({category})</h1>
            {/* <h1 className=' text-center mb-3 text-[12px]'>{category}</h1> */}
            <h1 className=' text-center mb-3 text-[12px]'>{format_by_count(description, 15)}</h1>

            <div onClick={()=>{router.push(`/gallery/${this_id}`)}} className='w-full h-10 rounded-full text-[13px] cursor-pointer bg-[black] text-white flex justify-center items-center'>
                <p>Explore</p>
            </div>
        </div>
    )
}

export default EachAdminGallery
