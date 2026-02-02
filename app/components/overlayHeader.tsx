"use client"
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { call_once_avoid_the_rest } from '@/utils/exports'
import { usePathname } from 'next/navigation'


interface Props {env?:string, hideLogoName?:string}

function OverlayHeader(props: Props) {
    const {env, hideLogoName} = props
    const {setGeneralAlpha} = generalFunctions()
    const {menu_overlay_listener, show_overlay_menu} = useSelector((state: any)=>state.generalSlice)
    // const path = usePathname()
    // const working = useRef(false)
    // const timeout = useRef(false)
    const working2 = useRef(false)
    const timeout2 = useRef(false)
    const called = useRef(false)

    function showOverlayMenu(){
        setGeneralAlpha("show_overlay_menu", !show_overlay_menu)
    }
    
    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        gsap.registerPlugin(ScrollTrigger);


        ScrollTrigger.create({
            trigger: document.scrollingElement,
            start: "top 80%",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                call_once_avoid_the_rest({
                    working: working2,
                    timeout: timeout2,
                    called,
                    time: 400,
                    func: ()=>{
                        setGeneralAlpha("menu_overlay_listener", false)
                    },
                    func2:()=>{
                        const pageHeight = document.scrollingElement?.getBoundingClientRect()?.height ?? 0
                        const scrollLength =  pageHeight * self.progress
                        if((scrollLength+200)>(window.innerHeight)){
                            setGeneralAlpha("menu_overlay_listener", true)
                        }
                    },
                })
            }
        })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }
    // console.log({path});
    
    // useEffect(()=>{
    //     // if(watcher) return
    //     // if(menu_overlay_listener) setWatcher(true)
    //     setWatcher(true)
    // }, [menu_overlay_listener, watcher, path])
    
    // useEffect(feature_animation, [watcher, path])

    if(!menu_overlay_listener) {
        return null
    }
    
    return (
        <div className='w-full h-auto fixed z-5 top-0 left-0'>
            <div className='w-full h-auto px-6 py-8 relative flex justify-between items-center text-white'>
                <motion.div
                    initial={{x: "-300px"}}
                    animate={{x:0}}
                    transition={{duration: hideLogoName?1.2:0.7, delay: hideLogoName?0.6:0}}
                >
                    <Logo hideName={hideLogoName==="hide"?false:true}/>
                </motion.div>
                
                <motion.div 
                    initial={{x: "300px"}}
                    animate={{x:0}}
                    transition={{duration: 0.7}}

                    onClick={showOverlayMenu}
                    className={env=="menu"?"cursor-pointer":'w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer'}
                >
                    {
                        env === "menu"?
                        <motion.p 
                            className='text-[white]'
                            initial={{x: "300px"}}
                            animate={{x:0}}
                            transition={{duration: 1, delay: hideLogoName?0.6:0}}
                        >
                            Close
                        </motion.p>:
                        <img src="/menu1.svg" alt="menu" className='w-6 h-6' />
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default OverlayHeader
