import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddPost from './addPost'
import AddGallery from './addGallery'
import AddTeam from './addTeam'

interface Props {}

function AdminModal(props: Props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()
    // const [where, setWhere] = useState("menu")
    const {show_admin_modal, admin_sub_route,  edit_gallery_data,  edit_team_data,  edit_blog_data} = useSelector((state: any)=>state.generalSlice)
    // const onEdit =  edit_gallery_data.data_id || edit_blog_data.data_id || edit_team_data.data_id 
    const where = admin_sub_route
    const setWhere = (name:string) =>{
        setGeneralAlpha("admin_sub_route", name)
    }

    useEffect(()=>{
        return ()=>{setWhere("menu")}
    }, [])
    
    function closeModal(){
        setWhere("menu")
        setGeneralAlpha("show_admin_modal", false)
        setGeneralAlpha("edit_blog_data", {})
        setGeneralAlpha("edit_gallery_data", {})
        setGeneralAlpha("edit_team_data", {})
    }

    function MenuContent() {
        return (
            <>
                <p onClick={()=>{setWhere("post")}} className='w-full text-center py-4 cursor-pointer hover:bg-black hover:text-white'>Add to Posts</p>
                <p onClick={()=>{setWhere("gallery")}} className='w-full text-center py-4 cursor-pointer hover:bg-black hover:text-white'>Add to Gallery</p>
                <p onClick={()=>{setWhere("team")}} className='w-full text-center py-4 cursor-pointer hover:bg-black hover:text-white'>Add to Team</p>
            </>
        )
    }

    if(!show_admin_modal) return null


    return (
        <div onClick={()=>{closeModal()}} className='w-screen fixed z-5 top-0 left-0 h-screen bg-[#000000] flex justify-center items-center'>
            <div onClick={(e)=>{e.stopPropagation()}} className='bg-white text-black py-5 rounded-[20px] w-full max-w-105 flex justify-center items-center flex-col'>
                <div className='w-full px-8 py-4 flex justify-center items-center relative'>
                    <p className='font-semibold'>
                        {
                            edit_blog_data.data_id?
                            "Edit Post":
                            edit_gallery_data.data_id?
                            "Edit Gallery Content":
                            edit_team_data.data_id?
                            "Edit Member Detail":
                            where==="menu"?
                            "Admin Menu":
                            where==="post"?
                            "Create a Post":
                            where==="gallery"?
                            "Add to Gallery":
                            where==="team"?
                            "Add to Team":
                            "Admin Menu"
                        }
                    </p>
                    <X color='black' size={18} onClick={()=>{closeModal()}} className='absolute right-5 top-4 cursor-pointer'/>
                </div>
                
                {
                    where==="menu"?
                    <MenuContent />:
                    where==="post"?
                    <AddPost />:
                    where==="gallery"?
                    <AddGallery />:
                    where==="team"?
                    <AddTeam />:
                    <MenuContent />
                }

            </div>

        </div>
    )
}

export default AdminModal
