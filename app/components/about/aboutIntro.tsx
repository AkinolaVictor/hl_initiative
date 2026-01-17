import React from 'react'
import Header from '../header'
import Link from 'next/link'

interface Props {}

function AboutIntro(props: Props) {
    const {} = props

    return (
        <div className='w-full h-screen relative bg-white'>
        {/* <div className='w-full h-screen sticky top-0'> */}
            <div 
                className='absolute z-1 w-full h-full' 
                style={{
                    // backgroundImage: "url(./bg-red.jpg)", 
                    backgroundImage: "url(./bg-white.jpg)", 
                    // backgroundImage: "url(./bg-green.jpg)", 
                    backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                    height: "100vh", margin:0, padding: 0
                }}>
            </div>

            <div className='h-full w-full absolute z-2 flex flex-col justify-center items-center'>
                <div className='absolute top-0 left-0 w-full'>
                    <Header dark/>
                </div>
                <p 
                    className='dmd text-black text-[42px] w-auto max-w-150 text-center opacity-90 mt-15 p-4'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                    >
                    Let’s Change The World Together
                </p>
                
                <p 
                    className='text-black w-auto max-w-150 text-center text-[15px] mt-3 p-4'
                    // style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    Together, we can improve lives by promoting better health, 
                    raising awareness, and supporting communities in need. 
                    Join us to make a lasting impact, share your time and skills, 
                    and help build a healthier, stronger future for everyone.
                </p>
                <Link href={"/volunteer"} className='w-auto h-auto rounded-full bg-black py-2 px-7 text_1 cursor-pointer mt-10'>
                    <p className='text-white font-semibold'>Join Us Today</p>
                </Link>
            </div>
        </div>
    )
}


export default AboutIntro
