"use client"
import React, { useEffect } from 'react'
import CareAbout from './careAbout'
import { cares } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

interface Props {}

function Features(props: Props) {
    const {} = props
    
    
    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        gsap.registerPlugin(ScrollTrigger, SplitText);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

        const tl = gsap.timeline({
            // scrollTrigger: {
            //     // trigger: ".about-image",
            //     trigger: ".description_container",
            //     scrub: true,
            //     start: "top 90%", // when head of element reaches 50% of screen
            //     // start: "top bottom", //when heat of element reaches bottom of screen
            //     // end: "bottom top", //when bottom of element reaches top of screen
            //     end: "top 30%",  //when top of element reaches 20% of the screen,
            //     // markers: true
            // },
            // scrollTrigger: {
            //     trigger: ".description_container",
            //     scrub: true,
            //     start: "top 85%",
            //     end: "bottom 25%",
            //     once: false
            // },
        })

        const split = SplitText.create(".title_description", {
            type: "words",
        })

        
        tl.from(split.words, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.08,
            duration: .5,
            toggleActions: "restart none none reset"
        })
        
        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: ".title_description",
            start: "top 80%",
            onEnter: () => tl.restart(),
            // onLeave: ()=> tl.reverse(),
            onEnterBack: () => tl.restart()
        })

        gsap.from(".description_container", {
            x: -400,
            duration: 2,
            scrollTrigger: {
                trigger: ".description_container",
                scrub: true,
                start: "top 90%", // when head of element reaches 50% of screen
                end: "top 30%",  //when top of element reaches 20% of the screen,
                // markers: true,
            }
        })

        // tl.from(".about-image", {
        gsap.from(".about-image", {
            x: isMobile ? 400 : 700,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-image",
                scrub: true,
                // start: "top 90%", // when head of element reaches 50% of screen
                start: isMobile ? "top 90%" : "top 90%", // when head of element reaches 50% of screen
                end: isMobile ? "bottom bottom" : "top 30%",  //when top of element reaches 20% of the screen,
                // markers: true
            },
        })

    }
    
    useEffect(()=>{
        feature_animation()

    }, [])

    return (
        <div className='w-full h-auto bg-white text-black flex flex-wrap relative'>
        {/* <div className='w-full h-auto bg-white text-black flex flex-wrap sticky top-0'> */}
            <div className='w-full h-screen flex flex-col bp9:flex-row justify-center items-center'>
                <div className='w-full h-auto p-5 bp9:p-15 description_container'>
                    <p className='dmd text-[30px] mb-5 text-center'>What we care about</p>
                    <p className='text-[15px] text-justify title_description'>
                        To be a voice to the less privileged by creating opportunities that 
                        supports their voices and ideas. And with positivity and guidance 
                        as core values, strengthen their mental activities towards a more 
                        productive future. 
                    </p>
                </div>

                <div className='w-full h-auto p-5 bp9:p-15 about-image'>
                    <img 
                        src="./check_bp.jpg" alt="a doctor checking patient heart bp" 
                        className='rounded-[20px] w-auto h-auto max-h-99 bp9:max-h-full ml-auto mr-auto bp9:ml-0 bp9:mr-0'
                    />
                </div>
            </div>

            {
                cares.map((item, index)=>{
                    const {title, description, icon, background} = item
                    return (
                        <CareAbout 
                            key={index}
                            title={title}
                            description={description}
                            background={background}
                        />
                    )
                })
            }

        </div>
    )
}

export default Features
