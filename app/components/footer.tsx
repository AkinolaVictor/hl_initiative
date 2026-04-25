import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props
    const thisYear = new Date().getFullYear()
    // console.log(dr)
    return (
        <div className='w-full h-30 bg-black text-white flex flex-col p-5 justify-center items-center'>
            <p className='font-bold text-[14px]'>The Health enLight Initiative</p>
            <p className='font-bold text-[14px]'>&copy; {thisYear}</p>
        </div>
    )
}

export default Footer
