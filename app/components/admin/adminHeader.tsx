"use client"
import React, { useState } from 'react'

interface Props {
    which: string,
    setWhich: any
}

function AdminHeader(props: Props) {
    const {which, setWhich} = props
    // const [which, setWhich] = useState("blog")

    return (
        <div className='w-full h-auto bg-white p-10 text-black text-[13px] pt-30'>
            {/* <p className='text-[16px] w-full text-center'>Admin Page</p> */}

            <div className='w-[80%] my-4 mx-auto p-3 pb-1 rounded-[100px] font-semibold text-[13px] bg-[#004D00] text-white flex justify-center items-center gap-10'>
                <div onClick={()=>{setWhich("blog")}} className='cursor-pointer w-auto flex flex-col justify-center items-center'>
                    <p>Blog</p>
                    <div className={`w-full h-1 rounded-full bg-white mt-1 ${which=="blog"?"opacity-100":"opacity-0"}`} />
                </div>
                <div onClick={()=>{setWhich("gallery")}} className='cursor-pointer w-auto flex flex-col justify-center items-center'>
                    <p>Gallery</p>
                    <div className={`w-full h-1 rounded-full bg-white mt-1 ${which=="gallery"?"opacity-100":"opacity-0"}`} />
                </div>
                <div onClick={()=>{setWhich("team")}} className='cursor-pointer w-auto flex flex-col justify-center items-center'>
                    <p>Team</p>
                    <div className={`w-full h-1 rounded-full bg-white mt-1 ${which=="team"?"opacity-100":"opacity-0"}`} />
                </div>
            </div>
        </div>
    )
}

export default AdminHeader
