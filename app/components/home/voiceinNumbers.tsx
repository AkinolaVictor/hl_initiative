"use client"
import { motion } from 'framer-motion'
import React from 'react'

interface Props {}

function VoiceinNumbers(props: Props) {
    const {} = props

    const achievements = [
        {
            number: "2",
            title: "School Health Clubs",
            description: "We have carried out outreaches and school events that are transformative truly enlightening."
        },
        {
            number: "5",
            title: "Webinars",
            description: "We have impacted lives through several webinar sessions, we are unto much more to get done."
        },
        {
            number: "250",
            title: "Attendees",
            description: "We have impacted lives through several webinar sessions and outreaches, we are unto much more to get done"
        },
        {
            number: "13",
            title: "Researches/posts",
            description: "We have successfully completed 13 comprehensive research studies to drive impactful, evidence-based change."
        },
    ]

    return (
        // <div className='w-full h-auto min-h-screen bg-[#4f3130] text-white py-17.5 px-4 flex flex-col items-center justify-center'>
        <div className='w-full h-auto min-h-screen bg-black text-white py-17.5 px-4 flex flex-col items-center justify-center'>
            <motion.div
                className='w-full'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2, delay: 0.5}}
            >
                <p className='dmd text-[25px] text-center'>Our Voice in Numbers</p>
                <p className='opacity-80 text-center text-[14px]'>How far we have come</p>
            </motion.div>

            <div className='w-full flex justify-around flex-wrap items-start mt-10'>
                {
                    [...achievements].map((item, index)=>{
                        const {number, title, description} = item
                        return (
                            <motion.div 
                                key={index} 
                                className='w-auto max-w-65 p-5'
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 1.2, delay: 0.4*(index+1)}}
                            >
                                <p className='dmd text-[33px] text-center'>{number}</p>
                                <p className='text-center font-bold mt-0 mb-5'>{title}</p>
                                <p className='text-center text-[13px] opacity-80'>{description}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VoiceinNumbers
