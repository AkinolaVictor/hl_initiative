"use client"
import { blog_list } from '@/utils/blog_data/blog_list'
import { format_by_count, seek_path_and_ref_2 } from '@/utils/exports'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {}

function LatestBlogs(props: Props) {
    const {} = props
    const path = usePathname()

    const blogs = [
        {
            number: "33",
            title: "Outreaches",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
        {
            number: "103",
            title: "Webinars",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
        {
            number: "10,023",
            title: "Students",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
        {
            number: "26",
            title: "Researches",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
    ]
    
    return (
        <motion.div 
            className='w-full h-auto min-h-screen bg-white text-black py-17.5 px-4 flex flex-col items-center justify-center'
            initial={{x: -200, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 1.2, delay: 0.5}}
        >
            <p className='font-semibold text-[25px] text-center'>Latest updates from our Blog</p>
            <p className='opacity-80 text-center text-[14px]'>Check up exercpts from our research</p>

            <div className='w-full flex justify-around flex-wrap items-start mt-10'>
                {
                    [...blog_list].map((item, index)=>{
                        // if(index>3) return null
                        if(index>3) return null
                        const {title, description, image, id} = item
                        const get_img_path = image?seek_path_and_ref_2({path, name: image}):"./check_bp_2.jpg"
                        return (
                            <Link href={`/blog/${id}`} key={index} className='w-auto max-w-65 p-5 flex flex-col justify-center items-center cursor-pointer'>
                                <div className='w-62.5 h-40'>
                                    <picture>
                                        {/* <source srcSet="./bg-red.webp" type="image/webp" className='rounded-[20px]'/> */}
                                        <img 
                                            src={get_img_path} 
                                            alt="image" 
                                            className='rounded-xl' 
                                        />
                                    </picture>
                                </div>
                                <p className='font-semibold mt-6 text-[14px] text-center'>{title}</p>
                                <p className='text-[13px] opacity-70 text-center mt-2'>{format_by_count(description, 20)}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default LatestBlogs
