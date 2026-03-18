"use client"
import React, { useState } from 'react'
import AdminAuth from './AdminAuth'
import { useSelector } from 'react-redux'
import AdminHeader from './adminHeader'
import EachAdminBlog from './eachAdminBlog'
import { Plus } from 'lucide-react'
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import AdminTeamWrapper from './adminTeamWrapper'
import AdminGalleryWrapper from './adminGalleryWrapper'
import AdminBlogWrapper from './adminBlogWrapper'

interface Props {}

function AdminWrapper(props: Props) {
    const {} = props
    const {adminAuth} = useSelector((state:any)=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()
    const [which, setWhich] = useState("blog")

    function openMenu(){
        setGeneralAlpha("edit_gallery_data", {})
        setGeneralAlpha("edit_team_data", {})
        setGeneralAlpha("edit_blog_data", {})
        setGeneralAlpha("show_admin_modal", true)
        setGeneralAlpha("admin_sub_route", "menu")
    }
    
    return (
        <div className='py-0 h-auto w-full bg-white p-10 relative'>

            {
                adminAuth?
                <>
                    <AdminHeader which={which} setWhich={setWhich}/>
                    {
                        which==="team"?
                        <AdminTeamWrapper />:
                        which==="gallery"?
                        <AdminGalleryWrapper />:
                        <AdminBlogWrapper />
                        // <EachAdminBlog />
                    }
                    <div onClick={()=>{openMenu()}} className='w-12 h-12 rounded-full bg-[#004D00] text-[13px] text-white fixed bottom-5 right-5 flex justify-center items-center my-10 cursor-pointer '>
                        <Plus />
                    </div>
                </>:
                <AdminAuth />
            }
        </div>
    )
}

export default AdminWrapper
