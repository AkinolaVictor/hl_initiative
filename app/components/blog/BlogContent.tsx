"use client"
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { overlay_menu_listener, seek_path_and_ref } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useRef } from 'react'
interface Props {data?: any}

function BlogContent(props: Props) {
    const {data} = props
    const {image, Content, body, photourl} = data || {}

    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    // const path = usePathname()
    const get_img_path = photourl
    // const get_img_path = image?seek_path_and_ref({path, name: image}):"./../bg-red_2.jpg"
    // const ds = "ssldsS"
    // let ds2 = ds.split("")
    // ds2.splice(0, 2)
    // ds2 = ds2.join("")
    // console.log({ds2, ds})
    function FormatContent(){
        const content = body.split("\n\n")

        return (
            <div>
                {/* <p>What is all these</p> */}
                {
                    content.map((item:string, index: number)=>{
                        const content = item.split("\n")
                        const enbold = item[0]==="#" && item[1]==="#"
                        // console.log({enbold})
                        if(content.length > 1){
                            return (
                                <div key={index}>
                                    {
                                        content.map((item2: string, index2: number)=>{
                                            const enbold = item2[0]==="#" && item2[1]==="#"
                                            // console.log({enb: enbold})
                                            let txt = item2
                                            if(enbold) {
                                                const txt2 = txt.split("")
                                                txt2.splice(0, 2)
                                                txt = txt2.join("")
                                            }
                                            return <p 
                                                key={index2} 
                                                className={` ${enbold && "font-semibold"} ${index2+1==content.length?"mb-3":"mb-0"}`}
                                            >
                                                {txt}
                                            </p>
                                        })
                                    }
                                </div>
                            )
                        } else {
                            let txt = item
                            if(enbold) {
                                const txt2 = txt.split("")
                                txt2.splice(0, 2)
                                txt = txt2.join("")
                            }
                            return (
                                <p 
                                    key={index}
                                    className={`mb-3 ${enbold&&"font-semibold"}`}
                                >
                                    {txt}
                                </p>
                            )
                        }

                    })
                }
            </div>
        )
    }

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha})
    }, [])

    return (
        <div className={`w-full h-auto min-h-screen bg-white text-black py-17.5 px-4 bp7:px-10 flex flex-col items-center blog_content_parent_section`}>
            <div 
                className='min-h-125 h-auto min-w-80 w-full max-w-250 max-h-180 rounded-xl' 
                style={{
                    // backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat",
                    // backgroundImage: `image-set(
                    //     url(./../bg-red.webp) type("image/webp"),
                    //     url(./../bg-red_2.jpg) type("image/jpeg")
                    // )`,
                    // backgroundImage: `url(${get_img_path})`,
                }}
            >
                <img src={get_img_path} alt="" className='min-w-75 w-full max-w-121 h-auto mx-auto'/>
                {/* <picture>
                    <source srcSet="./../bg-red.webp" type="image/webp" className='rounded-[20px] max-h-70'/>
                    <img src="./../bg-red_2.jpg" alt="image" className='rounded-[20px] max-h-70'/>
                </picture> */}
            </div>
            

            {/* <div className='min-w-80 w-full max-w-250 h-70 rounded-xl bg-gray-500'>

            </div> */}
            
            <div className='min-w-80 w-full max-w-250 mt-10 text-[14px] flex justify-center items-center'>
                {/* <p>{body}</p> */}
                <FormatContent />
            </div>

        </div>
    )
}

export default BlogContent
