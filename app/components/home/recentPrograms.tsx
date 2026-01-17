import Link from 'next/link'
import React from 'react'
import EachRecent from './eachRecent'

interface Props {}

function RecentPrograms(props: Props) {
    const {} = props

    return (
        // <div className='w-full min-h-screen h-auto bg-white text-black sticky top-0'>
        <div className='w-full min-h-screen bg-white text-black relative flex flex-col py-20 px-5'>
            <p className='dmd text-[22px] text-center'>Our recent Programmes</p>
            <p className='opacity-70 text-center text-[14px]'>The last few programs we carried out</p>
            <EachRecent title='Ikorodu Oga'/>
            <EachRecent title='Ikeja Lane' reverse/>
            <EachRecent title='Maritonous Pech' isLast/>
        </div>
    )
}

export default RecentPrograms
