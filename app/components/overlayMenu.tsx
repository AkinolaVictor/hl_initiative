"use client"
import { allLinks, decideblog } from '@/utils/exports'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import { AnimatePresence, motion } from 'framer-motion'
import OverlayHeader from './overlayHeader'

interface Props {}

function OverlayMenu(props: Props) {
    const {} = props
    const path = usePathname()
    const {show_overlay_menu} = useSelector((state:any)=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()

    function hideOverlayMenu(){
        setGeneralAlpha("show_overlay_menu", false)
    }

    if (!show_overlay_menu){
        return null
    }

    return (
        
        <AnimatePresence mode='wait'>
            <div className='w-screen h-screen fixed top-0 left-0 z-10 hidde'>
                <div className='w-full h-full relative'>
                    {/* background underlay */}
                    <div className='w-full h-full flex absolute top-0 left-0 z-1'>
                        <motion.div 
                            className='w-full h-screen bg-black'
                            initial={{x: "-100vw"}}
                            animate={{x:0}}
                            transition={{duration: 1}}
                            exit={{x: "-100vw"}}
                        />
                        <motion.div 
                            className='w-full h-screen bg-black'
                            initial={{x: "100vw"}}
                            animate={{x:0}}
                            transition={{duration: 1}}
                            exit={{x: "100vw"}}
                        />
                    </div>

                    {/* <motion.div 
                        onClick={hideOverlayMenu}
                        initial={{x: "100px"}}
                        animate={{x: 0}}
                        transition={{duration: 1, delay: 1}}
                        className='absolute z-3 right-8 top-8 cursor-pointer'
                    >
                        <p className='text-white '>Close</p>
                    </motion.div> */}

                    <motion.div
                        initial={{y: -300}}
                        animate={{y: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                    </motion.div>
                        <OverlayHeader env='menu' hideLogoName={"hide"}/>

                    <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 z-2 text-white'>
                        <div className='w-auto h-auto flex flex-col'>
                            {
                                allLinks.map((item, index)=>{
                                    const delayCount = 0.2+(0.2*index)
                                    return (
                                        <motion.div 
                                            key={index} 
                                            className='w-auto h-auto mx-auto my-3'
                                            initial={{x: "100vw"}}
                                            transition={{duration: 1, delay: delayCount }}
                                            animate={{x: 0}}
                                        >
                                            <Link key={index} onClick={hideOverlayMenu} href={item.href} className='w-auto text-center cursor-pointer font-semibold'>
                                                {item.title}
                                                <div className={`w-full ${false?"bg-black":"bg-white"} ${decideblog(item, path)?"opacity-100":"opacity-0"} h-1 rounded-full`} />
                                            </Link>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default OverlayMenu
