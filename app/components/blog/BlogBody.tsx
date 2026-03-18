"use client"
import React, { useEffect, useRef } from 'react'
import BlogController from './BlogController'
import BlogPreview from './BlogPreview'
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { overlay_menu_listener } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { blog_list } from '@/utils/blog_data/blog_list'
import { useSelector } from 'react-redux'
interface Props {}

function BlogBody(props: Props) {
    const {} = props
    const {blog} = useSelector((state:any)=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    const blog_list = blog

    useEffect(()=>{
        if(!blog_list.length) return
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha, threshold: 1})
    }, [blog_list])

    if(!blog.length){
        return (
            <div className='w-full h-auto p-10 flex justify-center items-center'>
                <p>Data Not ready yet</p>
            </div>
        )
    }

    return (
        <div className='w-full h-auto min-h-screen bg-white text-black py-17.5 px-4 bp7:px-10 blog_body_parent_section'>
            {/* <BlogController /> */}
            {
                blog_list.map((item:any, index: number)=>{
                    const {title, description, data_id, image, date, photourl} = item
                    // const id = title.split(" ").join("_")
                    const id = data_id
                    return (
                        <BlogPreview 
                            key={index}
                            index={index}
                            title={title}
                            description={description}
                            id={id}
                            image={photourl}
                            date={date}
                        />
                    )
                }).reverse()
            }
        </div>
    )
}

export default BlogBody
