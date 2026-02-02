"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Footer from '../footer'
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { overlay_menu_listener } from '@/utils/exports'

interface Props {
    img?:string, 
    title2?: string, 
    description2?: string,
    date?: string
}

function GalleryContent(props: Props) {
    const {} = props
    const [mobile, setMobile] = useState(false)
    const imgs = ["check_bp", "bg-white", "bg-red", "bg-white", "check_bp", "bg-red", "bg-white"]
    
    function feature_animation(){
        // if(prevAnim) return
        const screen_width = window.innerWidth
        const screen_height = window.innerHeight
        const isMobile = screen_width <= 800;
        setMobile(isMobile)
        
        if(isMobile) return


        // const card_size = 340
        const total_cards = 6 - 1
        // const total_screen_required = card_size * total_cards
        // const remaining_width_offscreen = total_screen_required - screen_width + 170

        gsap.registerPlugin(ScrollTrigger, SplitText);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        ScrollTrigger.create({
            trigger: ".gallery_preview_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            
            onUpdate: (self)=>{
                // gsap.to(".gallery_preview_container", {
                gsap.to(".gallery_left_preview", {
                    y: `${-(screen_height * total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })

                gsap.to(".gallery_right_preview", {
                    y: `${(screen_height * total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
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
    const working2 = useRef(false)
    const timeout2 = useRef(false)
    const called = useRef(false)
    useEffect(()=>{
        const ht = window.innerHeight
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({
            ScrollTrigger, 
            working, 
            timeout, 
            called,
            // threshold: ht,
            threshold: 330,
            setGeneralAlpha
        })
    }, [])
    
    useEffect(feature_animation, [])
    
    function EachGalleryComp(props2: Props){
        const {img, title2, description2, date} = props2

        return (
            <div className='w-full h-auto relative'>
                <div className='w-full h-auto flex justify-center items-center'>
                    <div
                        className='w-full h-auto' 
                        style={{
                            backgroundImage: `image-set(
                                url(./${img||"bg-red"}.webp) type("image/webp"),
                                url(./${img||"bg-red"}-2.jpg) type("image/jpeg")
                            )`,
                            backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                            height: "100vh", margin:0, padding: 0,
                            

                        }}
                    >

                    </div>
                </div>

                <div 
                    className='w-full h-auto max-h-70 bg-[rgba(0,0,0,0.6)] absolute z-2 bottom-0 left-0 p-5 text-white'
                    style={{
                        background:`linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 100%)`,
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                    }}
                >
                    <p className='dmd text-[22px] opacity-90'>{title2 || "Medical Outreach Erin-Ijesha"}</p>
                    <p className='text-[12px] opacity-70'>Carried out on {date||"12th September, 2025"}</p>
                    <p className='text-[13px] mt-3 opacity-70'>
                        {
                            description2||`
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                                nibh euismod tincidunt ut.
                            `
                        }
                    </p>
                    <Link
                        href={"/gallery/open-12233"}
                        className='w-35 h-8.5 text-black font-semibold rounded-full text-[13px] flex justify-center items-center bg-[rgba(255,255,255,0.9)] cursor-pointer mt-4'
                    >
                        Explore
                    </Link>
                </div>
            </div>
        )
    }

    return (
        // <div className='w-full min-h-screen h-auto bg-white text-black'>
        <div className='w-full h-auto bg-white text-black gallery_content_parent_container'>
            <div className='w-full'>
                <p className='text-center px-7 pt-7 font-semibold text-[17px]'>Our Programmes So Far</p>
                <p className='text-center px-7 pb-7 text-[13px] text-[#414141]'>Explore some of the programmes we did</p>
            </div>
            {
                mobile?
                // <div className=' h-screen overflow-y-auto relative'>
                <div>
                    {
                        imgs.map((item, index)=>{
                            return (
                                <div key={index} className='w-full h-screen flex justify-center items-center sticky top-0' >
                                    <EachGalleryComp img={item} />
                                </div>
                            )
                        })
                    }
                </div>:
                <div className='w-full h-screen bg-white flex flex-col bp8:flex-row justify-start mt-7 overflow-hidden gallery_preview_container '>
                    
                    <div className='w-full h-auto flex flex-col justify-start items-center bg-amber-950 relative gallery_left_preview'>
                        <EachGalleryComp img='bg-red' />
                        <EachGalleryComp img='check_bp'/>
                        <EachGalleryComp img='bg-white' />
                        <EachGalleryComp img='bg-red' />
                        <EachGalleryComp img='bg-white' />
                        <EachGalleryComp img='check_bp'/>
                    </div>

                    <div className='w-full h-auto flex flex-col justify-end items-center bg-amber-400 relative gallery_right_preview'>
                        <EachGalleryComp img='check_bp'/>
                        <EachGalleryComp/>
                        <EachGalleryComp img='bg-white' />
                        <EachGalleryComp/>
                        <EachGalleryComp img='bg-white' />
                        <EachGalleryComp img='check_bp'/>
                    </div>

                </div>
            }
        </div>
    )
}

export default GalleryContent
