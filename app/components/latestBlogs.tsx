"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface Props {}

function LatestBlogs(props: Props) {
    const {} = props

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
            <p className='dmd text-[25px] text-center'>Latest updates from our Blog</p>
            <p className='opacity-80 text-center text-[14px]'>Check up exercpts from our research</p>

            <div className='w-full flex justify-around flex-wrap items-start mt-10'>
                {
                    [...blogs].map((item, index)=>{
                        const {number, title, description} = item
                        return (
                            <Link href={"/blog/open-12233"} key={index} className='w-auto max-w-65 p-5 flex flex-col justify-center items-center cursor-pointer'>
                                <div className='w-62.5 h-40  bg-green-700'>

                                </div>
                                <p className='dmd mt-6 text-[15px] text-center'>Natural way to stay strong way to stay strong</p>
                                <p className='text-[13px] opacity-70 text-center mt-2'>Check up some excerpt from our research Check up some excerpt from our research</p>
                            </Link>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default LatestBlogs
