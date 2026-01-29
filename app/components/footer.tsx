import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <div className='w-full h-30 bg-black text-white flex flex-col p-5 justify-center items-center'>
            <p className='font-bold text-[14px]'>The Health Enlight Initiative</p>
            <p className='font-bold text-[14px]'>&copy; 2026</p>
        </div>
    )
}

export default Footer
