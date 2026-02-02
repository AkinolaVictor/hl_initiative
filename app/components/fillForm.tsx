"use client"
import React, { useEffect, useRef } from 'react'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { overlay_menu_listener } from '@/utils/exports'
interface Props {title?:string, bg?: string, color?: string, description?: string}

function FillForm(props: Props) {
    const {title, bg, color, description} = props
    const width_controller = "min-w-62.5 w-full max-w-125"
            
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha, threshold: 1})
    }, [])

    return (
        <div 
            style={{backgroundColor: bg||"white", color: color||"black"}}
            className={`w-full h-auto flex flex-col bp8:flex-row justify-between items-center py-12 fill_form_parent_section`}
        >
            <div className='w-full px-5 py-10 flex flex-col items-center text-[13px] '>
                {title && <p className={`dmd text-[25px] text-left ${width_controller} `}>{title}</p>}
                {description && <p className={`text-left opacity-70 ${width_controller} `}>{description}</p>}
                

                <form action="" className='w-full flex flex-col items-center mt-5'>
                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>Name</p>
                        <input 
                            type="text" 
                            placeholder='Enter Name'
                            className='w-full h-10 px-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>

                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>E-Mail</p>
                        <input 
                            type="email" 
                            placeholder='Enter E-Mail Address'
                            className='w-full h-10 px-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>

                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>Subject</p>
                        <input 
                            type="email" 
                            placeholder='Enter Subject of Message'
                            className='w-full h-10 px-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>

                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>Message</p>
                        <textarea 
                            name="message" 
                            placeholder='Enter Message'
                            className='w-full h-25 p-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>
                </form>
                <div className='w-40 ml-auto mr-auto h-auto rounded-full bg-green-700 py-2 px-7 text_1 cursor-pointer mt-5'>
                    <p className='text-white text-center font-semibold'>Send</p>
                </div>
            </div>

            {/* <div className='w-full h-auto max-h-screen'>
                <picture>
                    <source srcSet="check_bp.webp" type="image/webp" />
                    <img src="check_bp_2.jpg" alt="image"/>
                </picture>
            </div> */}
        </div>
    )
}

export default FillForm
