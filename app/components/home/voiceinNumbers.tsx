import React from 'react'

interface Props {}

function VoiceinNumbers(props: Props) {
    const {} = props

    const achievements = [
        {
            number: "33",
            title: "Outreaches",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
        {
            number: "103",
            title: "Webinars",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
        {
            number: "10,023",
            title: "Students",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
        {
            number: "26",
            title: "Researches",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done"
        },
    ]

    return (
        // <div className='w-full h-auto min-h-screen bg-[#4f3130] text-white py-17.5 px-4 flex flex-col items-center justify-center'>
        <div className='w-full h-auto min-h-screen bg-black text-white py-17.5 px-4 flex flex-col items-center justify-center'>
            <p className='dmd text-[25px] text-center'>Our Voice in Numbers</p>
            <p className='opacity-80 text-center text-[14px]'>How far we have come</p>

            <div className='w-full flex justify-around flex-wrap items-start mt-10'>
                {
                    [...achievements].map((item, index)=>{
                        const {number, title, description} = item
                        return (
                            <div key={index} className='w-auto max-w-65 p-5'>
                                <p className='dmd text-[33px] text-center'>{number}</p>
                                <p className='text-center font-bold mt-0 mb-5'>{title}</p>
                                <p className='text-center text-[13px] opacity-80'>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VoiceinNumbers
