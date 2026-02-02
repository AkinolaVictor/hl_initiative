"use client"
import React, { useEffect, useRef } from 'react'
import EachAboutFoundation from './eachAboutFoundation'
import { overlay_menu_listener } from '@/utils/exports'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
interface Props {}


function AboutFoundation(props: Props) {
    // const kf = "num".repeat(2)
    // console.log(kf);
    // Boolean("value bool")
    const {} = props
    const lst = ["About Our Foundation", "Research First Approach", "Valuing Human Health", "Knowledge Dispensation Approach", "Community Engagement Activities"]
    
    
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha})
    }, [])



    return (
        <div className='w-full h-auto min-h-screen bg-white text-black about_foundation_parent_container'>
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
