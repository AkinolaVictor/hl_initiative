"use client"
import React, { useEffect, useState } from 'react'
import CareAbout from './careAbout'
import { cares } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import IsMobile from '@/utils/isMobile'

interface Props {}

function Features(props: Props) {
    const {} = props
    const {ifMobile} = IsMobile({})
    const [mobile, setMobile] = useState(false)
    
    
    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        setMobile(isMobile)
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


        // text should only stagger on big screen
        // if(!isMobile){
        //     const split = SplitText.create(".title_description", {
        //         type: "words",
        //     })
    
            
        //     tl.from(split.words, {
        //         y: 100,
        //         autoAlpha: 0,
        //         stagger: 0.08,
        //         duration: .5,
        //         toggleActions: "restart none none reset"
        //     })
            
        //     // ScrollTrigger only watches visibility
        //     ScrollTrigger.create({
        //         trigger: ".title_description",
        //         start: "top 80%",
        //         invalidateOnRefresh: true,
        //         onEnter: () => tl.restart(),
        //         onEnterBack: () => tl.restart()
        //     })
        // }

        const anim1 = isMobile?{
            scale: 1
        }:{
            // x: -400,
            x: 0,
        }

        const tl3 = gsap.to(".description_container", {
            // ...anim1,
            x: 0,
            duration: 1,
            scrollTrigger:  isMobile?{}:{
                trigger: ".description_container",
                scrub: true,
                invalidateOnRefresh: true,
                start:  isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
                end:  isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
                // markers: true,
            }
        })

        const anim2 = isMobile?{
            scale: 1
        }:{
            // x: isMobile ? 400 : 700,
            x: 0,
        }
        const tl2 = gsap.to(".about-image", {
            // ...anim2,
            x: 0,
            duration: 1,
            // if its mobile, don't apply scrolltrigger
            scrollTrigger: isMobile?{}:{
                trigger: ".about-image",
                scrub: true,
                invalidateOnRefresh: true,
                start: isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
                end: isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
                // markers: true
            },
        })

        if(isMobile) {
            ScrollTrigger.create({
                trigger: ".about-image",
                start: "top 90%",
                invalidateOnRefresh: true,
                onEnter: () => tl2.restart(),
                onEnterBack: () => tl2.restart(),
                // scrub: true,
            })
            
            ScrollTrigger.create({
                trigger: ".description_container",
                start: "top 90%",
                invalidateOnRefresh: true,
                onEnter: () => tl3.restart(),
                onEnterBack: () => tl3.restart(),
                // scrub: true
            })
        }

        ScrollTrigger.create({
            trigger: ".feature_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                // console.log("dir", self.direction);
                // console.log("prog", self.progress);
                gsap.to(".feature_container", {
                    x: `${-(352*5)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })
            }
        })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }
    
    useEffect(feature_animation, [])

    return (
        // <div className='w-full h-[600vh]'>
            <div className='min-w-screen w-auto h-auto bg-white text-black flex justify-start items-start relative feature_container'>
            {/* <div className='w-full h-auto bg-white text-black flex flex-wrap sticky top-0'> */}
                <div 
                    className='min-w-full h-screen flex flex-col bp9:flex-row justify-center items-center'
                >
                    <div 
                        className={`w-full h-auto p-5 bp9:p-15 description_container ${mobile?"scale-0.5":""}`}
                        style={{transform: "translateX(-400px)"}}
                    >
                        <p className='dmd text-[30px] mb-5 text-center'>What we care about</p>
                        <p className='text-[15px] text-justify title_description'>
                            To be a voice to the less privileged by creating opportunities that 
                            supports their voices and ideas. And with positivity and guidance 
                            as core values, strengthen their mental activities towards a more 
                            productive future. 
                        </p>
                    </div>

                    <div 
                        className={`w-full h-auto p-5 bp9:p-15 about-image ${mobile?"scale-0.5":""}`}
                        style={{transform: "translateX(500px)"}}
                    >
                        {/* <img 
                            src="./check_bp.jpg" alt="a doctor checking patient heart bp" 
                            className={`rounded-[20px] w-auto h-auto max-h-99 bp9:max-h-full ml-auto mr-auto bp9:ml-0 bp9:mr-0`}
                        /> */}
                        <picture>
                            <source srcSet="check_bp.webp" type="image/webp" className={`rounded-[20px] w-auto h-auto max-h-99 bp9:max-h-full ml-auto mr-auto bp9:ml-0 bp9:mr-0`}/>
                            <img src="check_bp_2.jpg" alt="image" className={`rounded-[20px] w-auto h-auto max-h-99 bp9:max-h-full ml-auto mr-auto bp9:ml-0 bp9:mr-0`}/>
                        </picture>
                    </div>
                </div>

                {
                    cares.map((item, index)=>{
                        const {title, description, icon, background} = item
                        return (
                            <CareAbout 
                                key={index}
                                index={index}
                                title={title}
                                description={description}
                                background={background}
                            />
                        )
                    })
                }

            </div>
        // </div>
    )
}

export default Features
