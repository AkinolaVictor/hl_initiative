"use client"
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { overlay_menu_listener } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { Fragment, useEffect, useRef } from 'react'
interface Props {}

function BlogContent(props: Props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha})
    }, [])

    return (
        <div className={`w-full h-auto min-h-screen bg-white text-black py-17.5 px-4 bp7:px-10 flex flex-col items-center blog_content_parent_section`}>
            <div 
                className='h-90 min-w-80 w-full max-w-250 rounded-xl' 
                style={{
                    backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
                    backgroundImage: `image-set(
                        url(./../bg-red.webp) type("image/webp"),
                        url(./../bg-red_2.jpg) type("image/jpeg")
                    )`,
                }}
            >
                {/* <picture>
                    <source srcSet="./../bg-red.webp" type="image/webp" className='rounded-[20px] max-h-70'/>
                    <img src="./../bg-red_2.jpg" alt="image" className='rounded-[20px] max-h-70'/>
                </picture> */}
            </div>

            {/* <div className='min-w-80 w-full max-w-250 h-70 rounded-xl bg-gray-500'>

            </div> */}
            
            <div className='min-w-80 w-full max-w-250 mt-10 text-[14px]'>
                {
                    [1,1,1,1,1,1].map((item, index)=>{
                        return (
                            <Fragment key={index}>
                                <p className='text-justify'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                    quis nostrud exerci tation ullamcorper suscipit lobortis 
                                    nisl ut aliquip ex ea commodo consequat. Duis autem vel 
                                    eum iriure dolor in hendrerit in vulputate velit esse 
                                    molestie consequat, vel illum dolore eu feugiat nulla fa
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                    quis nostrud exerci tation ullamcorper suscipit lobortis 
                                    nisl ut aliquip ex ea commodo consequat. Duis autem vel 
                                    eum iriure dolor in hendrerit in vulputate velit esse 
                                    molestie consequat, vel illum dolore eu feugiat nulla fa
                                </p>
                                <br />
                            </Fragment>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default BlogContent
