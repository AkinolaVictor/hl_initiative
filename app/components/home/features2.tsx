"use client"
import React, { useEffect } from 'react'
import CareAbout from './careAbout'
import { cares } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import IsMobile from '@/utils/isMobile'

interface Props {}

function Features2(props: Props) {
    const {} = props
    const {ifMobile} = IsMobile({})
    
    
    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        gsap.registerPlugin(ScrollTrigger, SplitText);
        ScrollTrigger.config({
            ignoreMobileResize: true,
            // autoRefreshEvents: "resize,load,visibilitychange,DOMContentLoaded"
            autoRefreshEvents: "visibilitychange,DOMContentLoaded"
        })

        ScrollTrigger.defaults({
            anticipatePin: 1,
            invalidateOnRefresh: true
        })

        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        // const ctx = gsap.context(()=>{
            const tl = gsap.timeline({
            })
    
            const anim1 = isMobile?{
                scale: 0
            }:{
                x: -400,
            }
    
            const tl3 = gsap.from(".description_container", {
                ...anim1,
                // x: -400,
                duration: 2,
                scrollTrigger:  {
                    trigger: ".description_container",
                    scrub: true,
                    invalidateOnRefresh: true,
                    start: "top 90%", // when head of element reaches 50% of screen
                    end: "top 30%",  //when top of element reaches 20% of the screen,
                    // markers: true,
                }
            })
    
            const anim2 = isMobile?{
                scale: 0
            }:{
                x: isMobile ? 400 : 700,
            }
            const tl2 = gsap.from(".about-image", {
                ...anim2,
                // x: 500,
                duration: 2,
                // if its mobile, don't apply scrolltrigger
                // scrollTrigger: isMobile?{}:{
                scrollTrigger: {
                    trigger: ".about-image",
                    scrub: true,
                    invalidateOnRefresh: true,
                    start: isMobile ? "top 90%" : "top 90%", // when head of element reaches 50% of screen
                    end: isMobile ? "bottom 90%" : "top 30%",  //when top of element reaches 20% of the screen,
                    // markers: true
                }
            })
    
            if(isMobile) {
                ScrollTrigger.create({
                    trigger: ".about-image",
                    start: "top 90%",
                    invalidateOnRefresh: true,
                    toggleActions: "play none none reverse",
                    onEnter: () => tl2.restart(),
                    onEnterBack: () => tl2.restart(),
                    // scrub: true,
                })
                
                ScrollTrigger.create({
                    trigger: ".description_container",
                    start: "top 90%",
                    // invalidateOnRefresh: true,
                    toggleActions: "play none none reverse",
                    onEnter: () => tl3.restart(),
                    onEnterBack: () => tl3.restart(),
                    // scrub: true
                })
            }
    
            // ScrollTrigger.config({ ignoreMobileResize: true });
            ScrollTrigger.create({
                trigger: ".feature_container",
                start: "top top",
                end: "+=100%",
                // end: "+=1600vh",
                scrub: 1,
                pin: true,
                // pin: ".feature_container",
                invalidateOnRefresh: true,
                pinType: "transform",
                anticipatePin: 1,
                toggleActions: "play none none reverse",
                onUpdate: (self)=>{
                    // console.log("dir", self.direction);
                    // console.log("prog", self.progress);
                    gsap.to(".feature_container", {
                        x: `${-1610*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                        duration: 0.5,
                        ease: "power3.out"
                    })
                }
            })
        // })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        setTimeout(()=>{
            ScrollTrigger.refresh(true)
        }, 500)
        return ()=>ScrollTrigger.refresh();;
        // return ctx.revert
    }
    
    useEffect(()=>{
        return feature_animation()
    }, [])

    return (
        // <div className='w-full h-[600vh]'>
            <div className='min-w-screen w-auto h-screen bg-white text-black flex justify-start items-start relative feature_container'>
            {/* <div className='w-full h-auto bg-white text-black flex flex-wrap sticky top-0'> */}
                <div 
                    className='min-w-full h-screen flex flex-col bp9:flex-row justify-center items-center relative'
                >
                    <div 
                        className={`w-full h-auto p-5 bp9:p-15 description_container ${ifMobile?"scale-0":""}`}
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
                        className={`w-full h-auto p-5 bp9:p-15 about-image ${ifMobile?"scale-0":""}`}
                        // style={{
                        //     transform: "translateX(500px)"
                        // }}
                    >
                        <img 
                            src="./check_bp.jpg" alt="a doctor checking patient heart bp" 
                            className={`rounded-[20px] w-auto h-auto max-h-99 bp9:max-h-full ml-auto mr-auto bp9:ml-0 bp9:mr-0`}
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
        // </div>
    )
}

export default Features2
