"use client"
import React, { useEffect, useRef } from 'react'
import BlogController from './BlogController'
import BlogPreview from './BlogPreview'
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { overlay_menu_listener } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
interface Props {}

function BlogBody(props: Props) {
    const {} = props
    
        
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha, threshold: 1})
    }, [])

    return (
        <div className='w-full h-auto min-h-screen bg-white text-black py-17.5 px-4 bp7:px-10 blog_body_parent_section'>
            <BlogController />
            {
                [1,1,1,1,1].map((item, index)=>{
                    return (
                        <BlogPreview key={index} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default BlogBody
