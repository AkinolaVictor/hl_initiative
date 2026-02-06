"use client"
import React from 'react'
import {motion} from "framer-motion"
import Media from '../media'

interface Props {
    title:string, 
    iconbg?:string | null, 
    color?:string | null, 
    description?:string, 
    bg?:string | null,
    message: string,
    env?: string,
    social?:any,
    image?:string,
}


function EachTestimonial(props: Props) {
    const {iconbg, title, color, description, bg, message, env, social, image} = props
    const {x, instagram, linkedIn} = social || {}

    return (
        <motion.div 
            style={{color: color||"black", backgroundColor: bg||"#d8bd8a"}}
            className={`min-w-85 w-85 max-w-85 h-[20vh] flex flex-col justify-center items-center ${env==="about"?"px-10":"px-0"}`}
            initial={{height: "20vh"}}
            whileInView={{height: "100vh"}}
            viewport={{once: true}}
            transition={{duration: 1}}
        >
            {
                env==="about"?
                <>
                    <div 
                        className={`w-45 h-45 mt-15 rounded-full flex justify-center items-center`}
                        style={{backgroundColor: iconbg||"#4f3130"}}
                    >
                    </div>

                    <p className='font-semibold text-[20px] mt-7 text-center'>{title}</p>
                    <p className='mb-4 text-[13px] text-center'>{description}</p>

                    <p className='text-[14px] text-justify'>
                        <i>
                            {`"${message}`}
                        </i>
                    </p>
                </>:
                <>
                    <div 
                        // className={`w-full bp9:w-[80%] h-auto bp7:rounded-[25px] mt-12.5`} 
                        className={`mt-10 w-80.5 h-auto max-h-99`} 
                        style={{
                            // backgroundImage: `image-set(
                            //     url(./check_bp.webp) type("image/webp"),
                            //     url(./check_bp-2.jpg) type("image/jpeg")
                            // )`,
                            backgroundImage: `url(./../team/${image||"team_4.jpg"})`,
                            backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                            width: "100%", minHeight: "360px", height: "auto", maxHeight: "400px"
                        }}
                    >
                    </div>

                    <p className='font-semibold text-[17px] mt-7 text-center'>{title}</p>
                    <p className='mb-4 text-[13px] text-center'>{description}</p>

                    <Media 
                        x={x}
                        linkedIn={linkedIn}
                        instagram={instagram}
                    />

                    {/* <div className='flex m-2 cursor-pointer mb-10'>
                        <div className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full'>
                            <img src="./../x.png" alt="image" className='h-auto w-5'/>
                        </div>
                        <div className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full'>
                            <img src="./../ln.png" alt="image" className='h-auto w-4'/>
                        </div>
                        <div className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full'>
                            <img src="./../ig.png" alt="image" className='h-auto w-4'/>
                        </div>
                    </div> */}
                </>
            }

        </motion.div>
    )
}

export default EachTestimonial
