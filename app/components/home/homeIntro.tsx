"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

interface Props {}

function HomeIntro(props: Props) {
    const {} = props

    function animate_home_title() {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const tl = gsap.timeline({})

        const split = SplitText.create(".home_title", {
            type: "words",
        })

        const split2 = SplitText.create(".home_description", {
            type: "words",
        })
        
        tl.from(split.words, {
            y: 400,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            toggleActions: "restart none none reset"
        }, "starter")
        
        
        tl.from(split2.words, {
            y: 150,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            toggleActions: "restart none none reset"
        }, "-=1.0")

        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".home_title",
            start: "top 80%",
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart()
        })
        
        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".home_description",
            start: "top 80%",
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart()
        })
    }

    function animate_home_button() {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const tl = gsap.from(".home_buttn", {
            y: 150,
            duration: 2,
            // delay: 1.5
        })
        
        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".home_buttn",
            start: "top 80%",
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart()
        })

        
    }

    useEffect(()=>{
        animate_home_title()
        animate_home_button()
    }, [])

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
                    className='dmd text-white text-[42px] w-auto max-w-150 text-center opacity-90 mt-15 p-4 home_title'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    Empowering Lives To Care For Health
                </p>
                
                <p 
                    className='text-white w-auto max-w-150 text-center opacity-70 text-[15px] mt-3 p-4 home_description'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    We inspire and equip individuals with the knowledge, tools, 
                    and confidence they need to take charge of their well-being, 
                    make informed health decisions, and build healthier lives 
                    for themselves and their communities
                </p>
                <Link href={"/volunteer"} className='w-auto h-auto rounded-full bg-white py-2 px-7 text_1 cursor-pointer mt-5 home_buttn'>
                    <p className='text-black font-semibold'>Learn More</p>
                </Link>
            </div>
        </div>
    )
}

export default HomeIntro
