"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

interface Props {
    // startTrial: () => string,
    // startTrial?: () => string,
    // startTrial3(): string,
    // startTrial2?(): string,
    // startTrial4(p1: string, p2: number): string,
    // startTrial4s?(p1: string, p2: number): string,
}

function AboutIntro(props: Props) {
    const {} = props

    function animate_home_title() {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const tl = gsap.timeline({})

        const split = SplitText.create(".home_title2", {
            type: "words",
        })
        
        tl.from(split.words, {
            y: 400,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            toggleActions: "restart none none reset"
        }, "starter")

        gsap.set(".home_description2", {opacity: 0.7})
        const split2 = SplitText.create(".home_description2", {
            type: "words",
        })
        
        
        
        tl.from(split2.words, {
        // tl.to(".home_description", {
            // y: 150,
            opacity: 0,
            autoAlpha: 0,
            stagger: 0.065,
            // scale: 1,
            duration: 1,
            toggleActions: "restart none none reset"
        }, "-=1.0")

        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".home_title2",
            start: "top 80%",
            invalidateOnRefresh: true,
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart(),
        })
        
        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".home_description2",
            start: "top 80%",
            invalidateOnRefresh: true,
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart()
        })

        animate_home_button()

        // return ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ()=>ScrollTrigger.refresh();;
    }

    function animate_home_button() {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const tl = gsap.to(".home_buttn2", {
            y: 0,
            duration: 2,
            
            // delay: 1.5
        })
        
        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".home_buttn2",
            start: "top 80%",
            invalidateOnRefresh: true,
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart()
        })

        return ()=>ScrollTrigger.refresh();;
    }

    useEffect(()=>{
        return animate_home_title()
    }, [])

    return (
        <div className='w-full h-screen relative bg-white the_about_intro'>
        {/* <div className='w-full h-screen sticky top-0'> */}
            <div 
                className='absolute z-1 w-full h-full' 
                style={{
                    backgroundImage: `image-set(
                        url(./bg-white.webp) type("image/webp"),
                        url(./bg-white-2.jpg) type("image/jpeg")
                    )`,
                    backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                    height: "100vh", margin:0, padding: 0
                }}>
            </div>

            <div className='h-full w-full absolute z-2 flex flex-col justify-center items-center'>
                <div className='absolute top-0 left-0 w-full'>
                    <Header dark/>
                </div>
                <p 
                    className='dmd text-black text-[42px] w-auto max-w-150 text-center opacity-90 mt-15 p-4 home_title2'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                    >
                    Let’s Change The World Together
                </p>
                
                <p 
                    className='text-black w-auto max-w-150 text-center text-[15px] mt-3 p-4 home_description2'
                    // style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    Together, we can improve lives by promoting better health, 
                    raising awareness, and supporting communities in need. 
                    Join us to make a lasting impact, share your time and skills, 
                    and help build a healthier, stronger future for everyone.
                </p>
                <Link href={"/volunteer"} className='w-auto h-auto rounded-full bg-black py-2 px-7 text_1 cursor-pointer mt-10 home_buttn2 translate-y-37.5'>
                    <p className='text-white font-semibold'>Join Us Today</p>
                </Link>
            </div>
        </div>
    )
}


export default AboutIntro
