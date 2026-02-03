"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Props {reverse?: boolean, title: string, isLast?:boolean, index?:number}

function EachRecent(props: Props) {
    const {reverse, title, isLast, index} = props
    const [mobile, setMobile] = useState(false)
    const img_class = `about-image2_${index}`
    const text_class = `description_container2_${index}`

    
    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        setMobile(isMobile)
        gsap.registerPlugin(ScrollTrigger);

        const tl3 = gsap.to(`.${text_class}`, {
            x: 0,
            duration: 1,
            scrollTrigger:  isMobile?{}:{
            // scrollTrigger:  {
                trigger: `.${text_class}`,
                scrub: true,
                invalidateOnRefresh: true,
                start:  isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
                end:  isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
                // markers: true,
            }
        })
        
        const tl2 = gsap.to(`.${img_class}`, {
            x: 0,
            duration: 1,
            // if its mobile, don't apply scrolltrigger
            scrollTrigger: isMobile?{}:{
            // scrollTrigger: {
                trigger: `.${img_class}`,
                scrub: true,
                invalidateOnRefresh: true,
                start: isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
                end: isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
                // markers: true
            },
        })

        if(isMobile) {
            ScrollTrigger.create({
                trigger: `.${img_class}`,
                // start: "top 90%",
                start: "top bottom",
                invalidateOnRefresh: true,
                onEnter: () => tl2.restart(),
                onEnterBack: () => tl2.restart(),
                // scrub: true,
            })
            
            ScrollTrigger.create({
                trigger: `.${text_class}`,
                // start: "top 90%",
                start: "top bottom",
                invalidateOnRefresh: true,
                onEnter: () => tl3.restart(),
                onEnterBack: () => tl3.restart(),
                // scrub: true
            })
        }

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }

    useEffect(()=>{
        return feature_animation()
    }, [])

    return (
        <div className={`w-full flex flex-col bp8:flex-row ${reverse&&"bp8:flex-row-reverse"} justify-around items-center p-3 mt-0`}>
            <div 
                className={`w-auto bp8:max-w-125 h-auto p-1 ${text_class} `}
                style={{transform: reverse?"translateX(400px)":"translateX(-400px)"}}
            >
                <p className='dmd text-[22px]'>{title}</p>
                <p className='text-[12px] opacity-70'>Date: 24th November, 2025</p>
                <br />
                <p className='text-[14px] text-justify mb-5'>
                    An epitome of momentous impact 
                    <br />
                    <br />

                    Ikorodu food distribution was a huge success, being our base, 
                    Every box distributed gave us fulfillment. Because we are relentless, 
                    after a long day with the kids on 23rd December 2021, 
                    we commenced distribution to our people in Ikorodu.
                    <br />
                    <br />

                    We distributed over 1,000 love box’s which contains , 
                    Rice , Beans, Garri , Spaghetti , Noodles, Salt, 
                    Vegetable oil  & of course our Season’s greetings card.
                </p>
                <Link href={"/gallery/open-12233"} className='text-white font-semibold w-auto max-w-25 h-auto rounded-full bg-[#111111] py-2 px-7 text_1 cursor-pointer mt-0'>
                    Explore
                </Link >
            </div>

            <div 
                className={`w-full max-w-125 h-auto p-0 bp8:p-5 my-5 bp8:my-0 mt-8 bp8:mt-0 ${img_class} `}
                style={{transform: reverse?"translateX(-500px)":"translateX(500px)"}}
            >
                {/* <img 
                    src="./check_bp_2.jpg" alt="a doctor checking patient heart bp" 
                    className='rounded-[20px]'
                /> */}
                <picture>
                    <source srcSet="check_bp.webp" type="image/webp" className='rounded-[15px]'/>
                    <img src="check_bp_2.jpg" alt="image" className='rounded-[15px]'/>
                </picture>
            </div>
            {/* {isLast?null:<div className='w-full h-px bg-black bp8:hidden mt-5 opacity-50'/>} */}
            
        </div>
    )
}

export default EachRecent
