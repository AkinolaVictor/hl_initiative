"use client"
import React from 'react'
import {motion} from "framer-motion"
import { seek_path_and_ref } from '@/utils/exports'
import { usePathname } from 'next/navigation'

interface Props {
    title:string, 
    description:string, 
    bg?:string | null, 
    color?:string | null, 
    iconbg?:string | null,
    icon_name?: string | null
}

function EachStory(props: Props) {
    const {title, description, bg, color, iconbg, icon_name} = props
    const path = usePathname()
    const name = icon_name || ""

    return (
        <motion.div 
            style={{backgroundColor: bg||"#d8bd8a", color: color||"black"}}
            className={`w-85 min-w-85 h-[20vh] flex flex-col justify-center items-center`}
            initial={{height: "20vh"}}
            whileInView={{height: "100vh"}}
            viewport={{once: true}}
            transition={{duration: 1}}
        >


            <div 
                style={{
                    // backgroundColor: iconbg||"#4f3130",
                    backgroundColor: "white",
                    // beginning.png
                }}
                className={`w-25 h-25 mt-5 rounded-full flex justify-center items-center`}
            >
                <img 
                    src={`${seek_path_and_ref({path, name})}`} 
                    alt="" 
                    className='w-12 h-12'
                />
            </div>

            <p className='font-semibold text-[18px] mt-7 mb-4 text-center px-10'>{title}</p>

            <p className='text-[14px] text-justify px-10'>
                {description}
            </p>

            {/* <div 
                style={{
                    backgroundColor: iconbg||"#4f3130",
                    backgroundImage: `image-set(
                        url(./check_bp.webp) type("image/webp"),
                        url(./check_bp-2.jpg) type("image/jpeg")
                    )`,
                    backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                }}
                className={`w-full h-full max-h-50 mt-15 flex justify-center items-center`}
            >
            </div> */}
        </motion.div>
    )
}

export default EachStory
