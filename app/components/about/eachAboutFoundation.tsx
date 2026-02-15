"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react'

interface Props {
    title:string, 
    reverse?:boolean, 
    index?: number, 
    subTitle?: string, 
    text?: {p_1: string, p_2: string}, 
    img?: string
}

function EachAboutFoundation(props: Props) {
    const {reverse, title, index, subTitle, text, img} = props
    const [mobile, setMobile] = useState(false)
    const img_class = `about-image2_${index}`
    const text_class = `description_container2_${index}`


    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        setMobile(isMobile)
        gsap.registerPlugin(ScrollTrigger);

        const tl3 = gsap.to([`.${text_class}`, `.${img_class}`], {
            x: 0,
            duration: 1,
            scrollTrigger:  isMobile?{}:{
                trigger: `.${text_class}`,
                scrub: true,
                invalidateOnRefresh: true,
                start:  isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
                end:  isMobile ? "bottom 40%" : "top 6%",  //when top of element reaches 20% of the screen,
                // markers: true,
            }
        })

        // const tl3 = gsap.to(`.${text_class}`, {
        //     x: 0,
        //     duration: 1,
        //     scrollTrigger:  isMobile?{}:{
        //         trigger: `.${text_class}`,
        //         scrub: true,
        //         invalidateOnRefresh: true,
        //         start:  isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
        //         end:  isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
        //     }
        // })

        // const tl2 = gsap.to(`.${img_class}`, {
        //     x: 0,
        //     duration: 1,
        //     // if its mobile, don't apply scrolltrigger
        //     scrollTrigger: isMobile?{}:{
        //         trigger: `.${img_class}`,
        //         scrub: true,
        //         invalidateOnRefresh: true,
        //         start: isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
        //         end: isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
        //         // markers: true
        //     },
        // })

        if(isMobile) {
            // ScrollTrigger.create({
            //     trigger: `.${img_class}`,
            //     // start: "top 90%",
            //     start: "top bottom",
            //     invalidateOnRefresh: true,
            //     onEnter: () => tl2.restart(),
            //     onEnterBack: () => tl2.restart(),
            //     // scrub: true,
            // })
            
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
        <div className={`w-full h-auto min-h-screen flex flex-col bp8:flex-row ${reverse&&"bp8:flex-row-reverse"} justify-between items-center`}>
            <div 
                className={`w-full px-5 py-10 ${text_class}`}
                // style={{transform: reverse?"translateX(400px)":"translateX(-400px)"}}
                style={{transform: reverse?"translateX(500px)":"translateX(-500px)"}}
            >
                <p className='font-semibold text-[23px] text-center'>{title}</p>
                <p className='text-[13px] text-center opacity-70 text-[rosybrown]'>{subTitle}</p>

                <p className='text-[14px] text-justify opacity-70 mt-10 w-auto max-w-99 ml-auto mr-auto'>
                    {text?.p_1}
                    <br />
                    <br />
                    {text?.p_2}
                </p>
                {/* <div className='w-40 ml-auto mr-auto h-auto rounded-full bg-black py-2 px-7 text_1 cursor-pointer mt-5'>
                    <p className='text-white text-center font-semibold'>Learn More</p>
                </div> */}
            </div>

            <div 
                className={`w-[85%] h-auto max-h-screen ${img_class}`}
                style={{transform: reverse?"translateX(-500px)":"translateX(500px)"}}
            >
                <picture>
                    {/* <source srcSet="check_bp.webp" type="image/webp" /> */}
                    {/* <img src="check_bp_2.jpg" alt="image"/> */}
                    {/* <img src="/gallery/school_club/school_club_10.jpg" alt="image"/> */}
                    <img src={img} alt="image"/>
                </picture>
            </div>
        </div>
    )
}

export default EachAboutFoundation
