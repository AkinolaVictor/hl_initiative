import React from 'react'
import EachAboutFoundation from './eachAboutFoundation'

interface Props {}

function AboutFoundation(props: Props) {
    const {} = props
    const lst = ["About Our Foundation", "Research First Approach", "Valuing Human Health", "Knowledge Dispensation Approach", "Community Engagement Activities"]
    return (
        <div className='w-full h-auto min-h-screen bg-white text-black'>
            {
                lst.map((item, index)=>{
                    return (
                        <EachAboutFoundation 
                            title={item} 
                            key={index} 
                            index={index}
                            reverse={index%2==1}
                        />
                    )
                })
            }
            {/* <EachAboutFoundation title='More On Our Foundation' reverse/> */}
        </div>
    )
}

export default AboutFoundation
