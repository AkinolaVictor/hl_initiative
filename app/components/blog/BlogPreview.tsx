"use client"
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {index?:number}

function BlogPreview(props: Props) {
    const {index} = props
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
                start: "top bottom",
                invalidateOnRefresh: true,
                onEnter: () => tl2.restart(),
                onEnterBack: () => tl2.restart(),
                // scrub: true,
            })
            
            ScrollTrigger.create({
                trigger: `.${text_class}`,
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
        <div 
            className={`
                min-w-75 w-full max-w-350 mx-auto min-h-50 h-auto mt-15 rounded-[10px] flex flex-wrap bp8:flex-nowrap justify-center items-center bg-[#819171] text-white
            `}
        >
            <div 
                className={`text-[13px] w-full p-6 bp7:p-10 ${text_class} ${mobile?"scale-0.5":""}`}
                style={{transform: "translateX(-400px)"}}
            >
                <p className='font-semibold text-[15px]'>How to Strengthen Your Immune System Naturally</p>
                <p className='opacity-80 text-[12px]'>posted on June 2, 2025</p>
                <p className='text-justify mt-3'>
                    Your immune system is your body’s first line of defense against 
                    infections and diseases. While genetics play a role, your daily 
                    habits significantly imwpact how well your immune system functions.  
                    How the Immune System Works The immune system is a complex network 
                    of cells, tissues, and organs that work together to fight harmful 
                    pathogens
                </p>
                <Link
                    href={"/blog/open-12233"}
                    className='w-40 h-10 text-black font-semibold rounded-full flex justify-center items-center bg-white cursor-pointer mt-8'
                >
                    Read More
                </Link>
            </div>

            <div 
                className={`w-full h-auto p-6 bp9:p-10 flex bp9:justify-end ${img_class} ${mobile?"scale-0.5":""}`}
                style={{transform: "translateX(500px)"}}
            >
                <div 
                    className='min-w-60 w-full h-auto rounded-xl ' 
                >
                    <picture>
                        <source srcSet="./bg-red.webp" type="image/webp" className='rounded-[20px]'/>
                        <img src="./bg-red_2.jpg" alt="image" className='rounded-[20px]'/>
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default BlogPreview
