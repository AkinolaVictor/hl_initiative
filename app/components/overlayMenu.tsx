"use client"
import { allLinks, decideblog } from '@/utils/exports'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'

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
        <div className='w-screen h-screen fixed top-0 left-0 z-10 hidde'>
            <div className='w-full h-full relative'>
                {/* background underlay */}
                <div className='w-full h-full flex absolute top-0 left-0 z-1'>
                    <div className='w-full h-full bg-black'/>
                    <div className='w-full h-full bg-black'/>
                </div>

                <div 
                    onClick={hideOverlayMenu}
                    className='absolute z-3 right-8 top-8 cursor-pointer'
                >
                    <p className='text-white '>Close</p>
                </div>

                <div className='w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 z-2 text-white'>
                    <div className='w-auto h-auto flex flex-col'>
                        {
                            allLinks.map((item, index)=>{
                                return (
                                    <Link key={index} onClick={hideOverlayMenu} href={item.href} className='w-auto my-3 text-center cursor-pointer font-semibold'>
                                        {item.title}
                                        <div className={`w-full ${false?"bg-black":"bg-white"} ${decideblog(item, path)?"opacity-100":"opacity-0"} h-1 rounded-full`} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverlayMenu
