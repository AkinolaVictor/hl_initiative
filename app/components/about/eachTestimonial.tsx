"use client"
import React from 'react'
import {motion} from "framer-motion"

interface Props {
    title:string, 
    iconbg?:string | null, 
    color?:string | null, 
    description?:string, 
    bg?:string | null,
    message: string
}

function EachTestimonial(props: Props) {
    const {iconbg, title, color, description, bg, message} = props

    return (
        <motion.div 
            style={{color: color||"black", backgroundColor: bg||"#d8bd8a"}}
            className={`min-w-85 w-85 max-w-85 h-[20vh] flex flex-col justify-start items-center px-10`}
            initial={{height: "20vh"}}
            whileInView={{height: "100vh"}}
            viewport={{once: true}}
            transition={{duration: 1}}
        >

            <div 
                className={`w-45 h-45 mt-15 rounded-full flex justify-center items-center`}
                style={{backgroundColor: iconbg||"#4f3130"}}
            >
            </div>

            <p className='font-semibold text-[20px] mt-7'>{title}</p>
            <p className='mb-4 text-[13px]'>{description}</p>

            <p className='text-[14px] text-justify'>
                <i>
                    {`"${message}`}
                </i>
            </p>
        </motion.div>
    )
}

export default EachTestimonial
