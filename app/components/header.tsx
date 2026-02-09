"use client"

import { allLinks, decideblog } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Draggable from 'gsap/src/Draggable'
// import { Draggable } from 'gsap/Draggable'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import Logo from './Logo'

interface Props {dark?:boolean, env?: string}

function Header(props: Props) {
    const {dark, env} = props
    const path = usePathname()
    const correctPath = env
    const {setGeneralAlpha} = generalFunctions()


    function showOverlayMenu(){
        setGeneralAlpha("show_overlay_menu", true)
    }

    function headerGsapAnimation_from_to(){
        const hold = gsap.to(".headerLogo", {
            scrollTrigger: ".headerLogo",
            x: 300,
            duration: 2,
            ease: "back",
            runBackwards: true,
            delay: 2,
            
            // repeat: -1,
            // onComplete: (e)=>{
            //     console.log(e)
            // }
        })

        // const hold = gsap.fromTo(".headerLogo", {
        //     // opacity: 0,
        //     x: 1000,
        //     delay: 2,
        //     duration: 2
        // }, {
        //     // opacity: 1,
        //     x: 0,
        //     delay: 3,
        //     duration: 2
        // })
        
        // hold.pause()
    }

    function headerGsapAnimation_timeline(){
        // const tl = gsap.timeline()
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            delay: 0,
            // repeat: -1,
            // reversed,
            // repeat,
            onStart: ()=> {
                // console.log("started")
            },
            onComplete: ()=> {
                // console.log("completed")
            },
        })

        // tl.from(".headerLogo", {x:-200, duration: 0.8})
        // tl.from(".linkContainer", {y: -200, duration: 0.8})
        // tl.from(".leftIcon", {x: 200, duration: 0.8})

        tl.to(".headerContainer", {opacity: 1}, "-=1")
        // tl.from(".headerLogo", {x:-200, duration: 0.8}, "begin")
        // tl.from(".linkContainer", {y: -200, duration: 1.2}, "-=0.5")
        // tl.from(".leftIcon", {x: 200, duration: 0.8}, "begin")


        tl.fromTo(".headerLogo", {x:-200, duration: 0.8}, {x:0}, "begin")
        tl.fromTo(".linkContainer", {y: -200, duration: 1.2}, {y:0}, "-=0.5")
        tl.fromTo(".leftIcon", {x: 200, duration: 0.8}, {x:0}, "begin")


        // tl.from(".leftIcon", {x: 200, duration: 0.8}, "begin-=25%")
        // tl.from(".leftIcon", {x: 200, duration: 0.8}, "begin-=0.4")
        
        // Draggable.create('.headerLogo', {
        //     type: "x",
        //     bounds: ".headerContainer"
        // })
        const items = [".headerContainer", ".headerLogo", ".linkContainer", ".leftIcon"]
        for(let i=0; i<items.length; i++){
            let each = items[i]

            ScrollTrigger.create({
                trigger: each,
                start: "top 90%",
                onEnter: () => tl.restart(),
                onEnterBack: () => tl.restart(),
                invalidateOnRefresh: true,
                // scrub: true,
            })
        }
        return ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // return ()=> ScrollTrigger.refresh();
    }

    function checkGsapFeatures(){
        gsap.from(".home-parent", {
            // x:300,
            // y: 450,
            // scale: 1.5,
            
            // rotationY: -10,
            // rotationX: 2,

            // transformOrigin: "0% 0%",
            // rotation: 180,

            y: 350,
            rotate: 10,

            delay: 0.3,
            duration: 1.25,
            // ease: "power4.inOut",
            // ease: "bounce",
        })
    }

    useEffect(()=>{
        return headerGsapAnimation_timeline()
    }, [])
    // useEffect(()=>ScrollTrigger.refresh(), [path])

    return (
        <div className={`flex justify-between items-center px-6 py-8 w-full ${dark?"text-black":"text-white"} headerContainer opacity-0`}>
            {/* logo */}
            {/* <Link href={"/"} className='flex justify-center items-center w-auto cursor-pointer headerLogo'>
                <div className={`w-10 h-10 rounded-full bg-white flex justify-center items-center`}>
                    <img 
                        src={correctPath?"./../hl_logo.jpg":"./hl_logo.jpg"} 
                        alt="" 
                        className='rounded-full w-auto h-auto max-h-10'
                    />
                </div>
                <div className='ml-2 text_1 '>
                    <p>The <span className='font-bold'>Health</span></p>
                    <p className=' mt-[-2]'><span className='font-bold'>enLight</span> Initiative</p>
                </div>
            </Link> */}
            <Logo correctPath={correctPath}/>

            {/* menu */}
            <div className='hidden bp8:flex text_1 linkContainer'>

                {
                    allLinks.map((item, index)=>{
                        return (
                            <Link key={index} href={item.href} className='w-auto p-3 cursor-pointer font-semibold'>
                                <p>{item.title}</p>
                                <div className={`w-full ${dark?"bg-black":"bg-white"} ${decideblog(item, path)?"opacity-100":"opacity-0"} h-1 rounded-full`} />
                            </Link>
                        )
                    })
                }
            </div>

            {/* volunteer */}
            <div className='flex leftIcon'>
                <div 
                    onClick={showOverlayMenu}
                    className='w-10 h-10 flex justify-center items-center bg-white rounded-full bp8:hidden cursor-pointer'
                >
                    <img src="/menu1.svg" alt="menu" className='w-6 h-6' />
                </div>
                <Link href={"/volunteer"} className={`hidden bp8:block w-auto h-auto rounded-full ${dark?"bg-black":"bg-white"} py-2 px-7 text_1 cursor-pointer`}>
                    <p className={`${dark?"text-white":"text-black"} font-semibold`}>Volunteer</p>
                </Link>
                {/* <div onClick={showOverlayMenu} className={`hidden bp8:block w-auto h-auto rounded-full ${dark?"bg-black":"bg-white"} py-2 px-7 text_1 cursor-pointer`}>
                    <p className={`${dark?"text-white":"text-black"} font-semibold`}>Volunteer</p>
                </div> */}
            </div>
        </div>
    )
}

export default Header
