import React from 'react'

interface Props {bg?:string, iconbg?:string}

function Purpose(props: Props) {
    const {bg, iconbg} = props

    const mission = [
        {
            num: "01",
            mis: `Reducing the burden of infectuous disease through initiative and accessible health education`
        },
        {
            num: "02",
            mis: `Combating health misinformation with clear, evidence-based communication.`
        },
        {
            num: "03",
            mis: `Empowering adolescents and youths through school-based health clubs and educational webinars.`
        },
        {
            num: "04",
            mis: `Advancing public health through advocacy, community engagement, and impactful research.`
        },
    ]

    return (
        // <div className='w-full h-auto sticky top-0'>
        <div className='w-full h-screen relative'>
            {/* <div className='relative'> */}
                <div 
                    className='absolute z-1 w-full h-full' 
                    style={{
                        // backgroundImage: "url(./bg-red.jpg)", 
                        // backgroundImage: "url(./bg-gray.jpg)", 
                        backgroundColor: bg,
                        backgroundImage: bg?"":"url(./bg-white.jpg)", 
                        // backgroundImage: "url(./bg-green.jpg)", 
                        backgroundSize:"cover", backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", height: "100vh", margin:0, padding: 0
                    }}>
                </div>
                
                {!bg&&<div className='w-full h-screen bg-[rgba(0,0,0,0.7)] absolute z-2'></div>}

                <div className='w-full h-screen flex flex-col bp9:flex-row justify-start bp9:justify-center items-center absolute z-3 text-white'>
                    <div className='w-full min-h-screen p-5 flex flex-col items-center justify-center'>
                        <p className='dmd text-[30px] mb-5'>Our Vision</p>
                        <p className='text-[15px] w-full max-w-75 font-semibold text-justify'>
                            To build a healthier and more informed society by equipping individuals 
                            especially young people - with the knowledge and tools to prevent disease
                            and promote well-being.
                        </p>
                    </div>
                    <div className='w-full min-h-screen p-5 hidden bp9:flex flex-col items-center justify-center'>
                        <p className='dmd text-[30px] mb-5'>Our Mission</p>

                        <div className='flex flex-row bp9:flex-col flex-wrap'>
                            {
                                mission.map((item, index)=>{
                                    const {num, mis} = item
                                    return (
                                        <div key={index} className='flex py-5 px-5 w-auto mx-w-62.5'>
                                            {/* fix icon color using styles */}
                                            <div 
                                                style={{backgroundColor:iconbg||"#111111"}}
                                                className={`min-w-11 min-h-11 w-11 h-11 flex justify-center items-center rounded-full`}
                                            >
                                                <p className='font-bold text-white'>{num}</p>
                                            </div>
                                            <p className='text-[15px] w-full max-w-75 ml-4 font-semibold text-justify'>
                                                {mis}
                                            </p>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Purpose
