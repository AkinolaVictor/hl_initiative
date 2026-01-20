"use client"
import React from 'react'
import {motion} from "framer-motion"

interface Props {title:string, description:string, bg?:string, color?:string, iconbg?:string}

function EachStory(props: Props) {
    const {title, description, bg, color, iconbg} = props

    return (
        <motion.div 
            style={{backgroundColor: bg||"#d8bd8a", color: color||"black"}}
            className={`w-85 min-w-85 h-[20vh] flex flex-col justify-start items-center px-10`}
            initial={{height: "20vh"}}
            whileInView={{height: "100vh"}}
            viewport={{once: true}}
            transition={{duration: 1}}
        >

            <div 
                style={{backgroundColor: iconbg||"#4f3130"}}
                className={`w-20 h-20 mt-15 rounded-full flex justify-center items-center`}
            >
            </div>

            <p className='font-semibold text-[20px] mt-7 mb-4'>{title}</p>

            <p className='text-[14px] text-justify'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                quis nostrud exerci tation ullamcorper suscipit lobortis 
                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum 
                iriure dolor in hendrerit in vulputate velit esse molestie 
                consequat, vel illum dolore eu feugiat nulla facilisis at 
                vero eros et accumsan et iusto odio dignissim qui blandit 
                praesent luptatum zzril delenit augue
            </p>
        </motion.div>
    )
}

export default EachStory
