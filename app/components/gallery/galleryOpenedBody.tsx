"use client"
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions';
import { overlay_menu_listener } from '@/utils/exports';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'

interface Props {}

function GalleryOpenedBody(props: Props) {
    const {} = props
    
    
    function feature_animation(){
        const screen_width = window.innerWidth
        const screen_height = window.innerHeight
        const isMobile = screen_width < 768;
        const card_size = 320
        const total_cards = 4
        const total_screen_required = card_size * total_cards
        const remaining_width_offscreen = total_screen_required - screen_width + 170
        
        gsap.registerPlugin(ScrollTrigger);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        ScrollTrigger.create({
            trigger: ".programme_body",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                // gsap.to(".our_story_container", {
                gsap.to(".programme_body_inner", {
                    x: `${-(screen_height*total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })
            }
        })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha, threshold: 500})
    }, [])
    
    useEffect(feature_animation, [])

    return (
        <div className='w-full h-screen bg-white text-black text-[13px] flex programme_body relative'>

            <div className='h-screen min-w-90 flex flex-col justify-center items-center bg-amber-400d px-6 py-10 bp10:absolute bp10:z-2 bg-white'>
                <p className='font-semibold text-[16px]'>{"Medical Outreach Erin-Ijesha"}</p>
                <p className='mt-5'>{"Date: 12th September, 2025"}</p>
                <p>{"Location: Erin-Ijesha, Ogun State Nigeria"}</p>
            </div>

            <div 
                className={`rounded-full py-1.5 px-4 bg-white text-black text-[13px] font-semibold block bp10:hidden absolute bottom-5 left-[50%] translate-x-[-50%] z-10`}
                style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
            >
                <p>{"Medical Outreach"}</p>
            </div>

            <div className='w-auto h-screen flex programme_body_inner bp10:absolute  bp10:left-90'>

                <div className='h-screen w-90 flex flex-col justify-center items-center bg-[#cbd5c0] px-6 py-10'>
                    <p className='font-semibold text-[16px]'>Introduction</p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                </div>

                <div className='h-screen w-90 flex flex-col justify-center items-center bg-[#C2C5AA] px-6 py-10'>
                    <p className='font-semibold text-[16px]'>Objective and Experience</p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                </div>

                <div className='h-screen w-90 flex flex-col justify-center items-center bg-[#A3AC85] px-6 py-10'>
                    <p className='font-semibold text-[16px]'>Our Impact</p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                    <p className='mt-5 text-justify'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                        nibh euismod tincidunt ut.
                    </p>
                </div>

                <div className='w-screen max-w-200 h-screen flex justify-center items-center bg-black'>
                    <img src="./../bg-red-2.jpg" alt="" className='w-full h-auto' />
                </div>

                <div className='w-screen max-w-200 h-screen flex justify-center items-center bg-black'>
                    <img src="./../check_bp_2.jpg" alt="" className='w-full h-auto' />
                </div>

                <div className='w-screen max-w-200 h-screen flex justify-center items-center bg-black'>
                    <img src="./../bg-white-2.jpg" alt="" className='w-full h-auto' />
                </div>
            </div>

        </div>
    )
}

export default GalleryOpenedBody
