"use client"
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions';
import { overlay_menu_listener, seek_path_and_ref } from '@/utils/exports';
import { gallery_activities } from '@/utils/gallery_data/gallery_activites';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

interface Props {}

function GalleryOpenedBody(props: Props) {
    const {} = props
    const path = usePathname()
    const [data, setData] = useState<any>({})
    const [isMobile, setIsMobile] = useState(false)
    
    function get_gallery_data(){
        const path_split = path?.split("/").reverse() ?? []
        const id = path_split[0]
        for(let i=0; i<gallery_activities.length; i++){
            const each = gallery_activities[i]
            if(id === each.id){
                return each
            }
        }

        return {}
    }
    
    function feature_animation(){
        if(!data.assets) return

        const screen_width = window.innerWidth
        const screen_height = window.innerHeight
        const card_size = 320
        // const final_len = data.assets.length<=4?2:data.assets.length
        // const total_cards = (3 + final_len) || 10
        const total_cards = (3 + data.assets.length) || 10
        // const total_cards = 14
        // console.log({total_cards})
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
    
    useEffect(feature_animation, [data])
    useEffect(()=>{
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile)

        const datum = get_gallery_data()
        setData(datum)
    }, [])
    // console.log({isMobile})
    return (
        <div className='w-full h-auto'>
            {
                isMobile?
                <div className='w-full h-auto flex flex-col justify-center items-start bg-white text-black text-[13px]'>
                    <div className='min-h-101 h-auto w-auto max-w-190  flex flex-col justify-center items-start bg-[#cbd5c0] px-6 py-10'>
                        <p className='font-semibold text-[16px] text-center w-full'>Introduction</p>

                        {
                            (data.introduction||[]).map((item:string, index:number)=>{
                                return (
                                    <p key={index} className='mt-5 text-justify'>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>

                    <div className='min-h-101 h-auto w-auto max-w-190  flex flex-col justify-center items-start bg-[#C2C5AA] px-6 py-10'>
                        <p className='font-semibold text-[16px] text-center w-full'>Objective</p>

                        {
                            (data.objective||[]).map((item:string, index:number)=>{
                                return (
                                    <p key={index} className='mt-5 text-justify'>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>

                    <div className='min-h-101 h-auto w-auto max-w-190  flex flex-col justify-center items-start bg-[#A3AC85] px-6 py-10'>
                        <p className='font-semibold text-[16px] text-center w-full'>Our Impact</p>
                        {
                            (data.impact||[]).map((item:string, index:number)=>{
                                return (
                                    <p key={index} className='mt-5 text-justify'>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                    {/* <div className='w-full h-99'/> */}
                </div>:
                <div />
            }

            <div className='w-full h-screen bg-white text-black text-[13px] flex programme_body relative'>

                <div className='h-screen min-w-90 flex flex-col justify-center text-center items-center bg-amber-400d px-6 py-10 bp10:absolute bp10:z-2 bg-white'>
                    <p className='font-semibold text-[16px]'>{data.title}</p>
                    <p className='mt-5'>{data.theme}</p>
                    {/* <p className='mt-0'>{"Date: 12th September, 2025"}</p> */}
                    <p>{`Venue: ${data.venue}`}</p>
                </div>

                <div 
                    className={`rounded-full py-1.5 px-4 bg-white text-black text-[13px] font-semibold block bp10:hidden absolute bottom-5 left-[50%] translate-x-[-50%] z-10`}
                    style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
                >
                    <p>{data.title}</p>
                </div>

                <div className='w-auto h-screen flex programme_body_inner bp10:absolute  bp10:left-90'>

                    {
                        isMobile?
                        <div />:
                        <>
                            <div className='h-screen w-90 flex flex-col justify-center items-center bg-[#cbd5c0] px-6 py-10'>
                                <p className='font-semibold text-[16px]'>Introduction</p>

                                {
                                    (data.introduction||[]).map((item:string, index:number)=>{
                                        return (
                                            <p key={index} className='mt-5 text-justify'>
                                                {item}
                                            </p>
                                        )
                                    })
                                }
                            </div>

                            <div className='h-screen w-90 flex flex-col justify-center items-center bg-[#C2C5AA] px-6 py-10'>
                                <p className='font-semibold text-[16px]'>Objective</p>

                                {
                                    (data.objective||[]).map((item:string, index:number)=>{
                                        return (
                                            <p key={index} className='mt-5 text-justify'>
                                                {item}
                                            </p>
                                        )
                                    })
                                }
                            </div>

                            <div className='h-screen w-90 flex flex-col justify-center items-center bg-[#A3AC85] px-6 py-10'>
                                <p className='font-semibold text-[16px]'>Our Impact</p>
                                {
                                    (data.impact||[]).map((item:string, index:number)=>{
                                        return (
                                            <p key={index} className='mt-5 text-justify'>
                                                {item}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                    
                    {
                        (data.assets||[]).map((item:any, index:number)=>{
                            const {name} = item
                            const image_ref = `gallery/${data.path}/${name}`
                            const img = seek_path_and_ref({path: path, name: image_ref})
                            return (
                                <div key={index} className='w-screen max-w-200 h-auto max-h-full flex justify-center items-center bg-black'>
                                    <img src={img} alt="" className='w-auto max-w-[90%] h-auto max-h-[90%] rounded-[15px]' />
                                </div>
                            )
                        })
                    }

                    {/* <div className='w-screen max-w-200 h-screen flex justify-center items-center bg-black'>
                        <img src="./../bg-red-2.jpg" alt="" className='w-full h-auto' />
                    </div>

                    <div className='w-screen max-w-200 h-screen flex justify-center items-center bg-black'>
                        <img src="./../check_bp_2.jpg" alt="" className='w-full h-auto' />
                    </div>

                    <div className='w-screen max-w-200 h-screen flex justify-center items-center bg-black'>
                        <img src="./../bg-white-2.jpg" alt="" className='w-full h-auto' />
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default GalleryOpenedBody
