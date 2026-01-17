import React from 'react'
import EachAboutFoundation from './eachAboutFoundation'

interface Props {}

function AboutFoundation(props: Props) {
    const {} = props

    return (
        <div className='w-full h-auto min-h-screen bg-white text-black'>
            <EachAboutFoundation title='About Our Foundation'/>
            <EachAboutFoundation title='More On Our Foundation' reverse/>
        </div>
    )
}

export default AboutFoundation
