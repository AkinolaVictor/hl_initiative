import React from 'react'
import EachStory from './eachStory'

interface Props {}

function OurStory(props: Props) {
    const {} = props

    return (
        <div className='w-full h-auto min-h-screen bg-white text-black flex flex-wrap justify-start items-start'>
            <div className='w-full max-w-85 h-screen flex flex-col justify-center items-center px-10'>
                <p className='dmd text-center text-[30px]'>Our Story</p>
                <p className='text-[14px] text-center mt-2 opacity-70'>We want a world saturated with the right health knowledge</p>
            </div>
            <EachStory title='In Years Past' description=''/>
            <EachStory title='In Years Past' description='' bg='white' color='black'/>
            <EachStory title='In Years Past' description='' bg='#4f3130' color='white' iconbg='#d8bd8a'/>
        </div>
    )
}

export default OurStory
