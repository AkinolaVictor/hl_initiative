import React from 'react'
import Header from '../header'
import Link from 'next/link'

interface Props {}

function HomeIntro(props: Props) {
    const {} = props

    return (
        <div className='w-full h-screen relative'>
        {/* <div className='w-full h-screen sticky top-0'> */}
            <div 
                className='absolute z-1 w-full h-full' 
                style={{
                    backgroundImage: "url(./bg-red.jpg)", 
                    // backgroundImage: "url(./bg-gray.jpg)", 
                    // backgroundImage: "url(./bg-white.jpg)", 
                    // backgroundImage: "url(./bg-green.jpg)", 
                    backgroundSize:"cover", backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", height: "100vh", margin:0, padding: 0
                }}>
            </div>

            <div className='h-full w-full absolute z-2 flex flex-col justify-center items-center'>
                <div className='absolute top-0 left-0 w-full'>
                    <Header />
                </div>
                {/* <p className=''>The <span>Health</span> enLight <span>Initiative</span></p> */}
                <p 
                    className='dmd text-white text-[42px] w-auto max-w-150 text-center opacity-90 mt-15 p-4'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                    >
                    Empowering Lives To Care For Health
                </p>
                
                <p 
                    className='text-white w-auto max-w-150 text-center opacity-70 text-[15px] mt-3 p-4'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    We inspire and equip individuals with the knowledge, tools, 
                    and confidence they need to take charge of their well-being, 
                    make informed health decisions, and build healthier lives 
                    for themselves and their communities
                </p>
                <Link href={"/volunteer"} className='w-auto h-auto rounded-full bg-white py-2 px-7 text_1 cursor-pointer mt-5'>
                    <p className='text-black font-semibold'>Learn More</p>
                </Link>
            </div>
        </div>
    )
}

export default HomeIntro
