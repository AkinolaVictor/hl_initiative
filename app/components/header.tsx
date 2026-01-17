"use client"

import { allLinks } from '@/utils/exports'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {dark?:boolean}

function Header(props: Props) {
    const {dark} = props
    const path = usePathname()

    function decideblog(item:{title:string, href:string}){
        if (item.title==="Blog"){
            return path.includes("blog")
        } else {
            return path===item.href
        }
    }
    // console.log({path})

    return (
        <div className={`flex justify-between items-center px-6 py-8 w-full ${dark?"text-black":"text-white"}`}>
            {/* logo */}
            <Link href={"/"} className='flex justify-center items-center w-auto cursor-pointer'>
                {/* <div className={`w-10 h-10 ${dark?"bg-black":"bg-white"} rounded-full flex justify-center items-center`}> */}
                <div className={`w-10 h-10 rounded-full bg-white flex justify-center items-center`}>
                    <img 
                        src="./hl_logo.jpg" 
                        alt="" 
                        className='rounded-full w-auto h-auto max-h-10'
                    />
                </div>
                {/* <div className='ml-2 text_1 hidden bp8:block'> */}
                <div className='ml-2 text_1 '>
                    <p>The <span className='font-bold'>Health</span></p>
                    <p className=' mt-[-2]'><span className='font-bold'>enLight</span> Initiative</p>
                </div>
            </Link>

            {/* menu */}
            <div className='hidden bp8:flex text_1 '>

                {
                    allLinks.map((item, index)=>{
                        return (
                            <Link key={index} href={item.href} className='w-auto p-3 cursor-pointer font-semibold'>
                                <p>{item.title}</p>
                                <div className={`w-full ${dark?"bg-black":"bg-white"} ${decideblog(item)?"opacity-100":"opacity-0"} h-1 rounded-full`} />
                            </Link>
                        )
                    })
                }
            </div>

            {/* volunteer */}
            <div className='flex'>
                <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full bp8:hidden'>
                    <img src="/menu1.svg" alt="menu" className='w-6 h-6' />
                </div>
                <Link href={"/volunteer"} className={`hidden bp8:block w-auto h-auto rounded-full ${dark?"bg-black":"bg-white"} py-2 px-7 text_1 cursor-pointer`}>
                    <p className={`${dark?"text-white":"text-black"} font-semibold`}>Volunteer</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
