import { seek_path_and_ref, seek_path_and_ref_2 } from '@/utils/exports'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {correctPath?:string, hideName?:boolean}

function Logo(props: Props) {
    const {correctPath, hideName} = props
    const path = usePathname()

    return (
        <Link href={"/"} className='flex justify-center items-center w-auto cursor-pointer headerLogo'>
            {/* <div className={`w-10 h-10 ${dark?"bg-black":"bg-white"} rounded-full flex justify-center items-center`}> */}
            <div className={`w-10 h-10 rounded-full bg-white flex justify-center items-center`}>
                <img 
                    // src={correctPath?"./../hl_logo.jpg":"./hl_logo.jpg"} 
                    src={`${seek_path_and_ref_2({name: "hl_logo.jpg", path})}`} 
                    alt="" 
                    className='rounded-full w-auto h-auto max-h-10'
                />
            </div>
            {/* <div className='ml-2 text_1 hidden bp8:block'> */}
            {
                hideName?
                null:
                <div className='ml-2 text_1 '>
                    <p>The <span className='font-bold'>Health</span></p>
                    <p className=' mt-[-2]'><span className='font-bold'>enLight</span> Initiative</p>
                </div>
            }
        </Link>
    )
}

export default Logo
