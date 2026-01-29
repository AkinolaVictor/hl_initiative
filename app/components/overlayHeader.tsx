"use client"
import React, { useEffect } from 'react'
import Logo from './Logo'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


interface Props {}

function OverlayHeader(props: Props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()

    function showOverlayMenu(){
        setGeneralAlpha("show_overlay_menu", true)
    }
    
    function feature_animation(){
        const isMobile = window.innerWidth < 768;
        gsap.registerPlugin(ScrollTrigger);

        // const tl3 = gsap.to(".description_container", {
        //     x: 0,
        //     duration: 1,
        //     scrollTrigger:  {
        //         trigger: ".description_container",
        //         scrub: true,
        //         invalidateOnRefresh: true,
        //         start:  isMobile ? "top 10%" : "top 90%", // when head of element reaches 50% of screen
        //         end:  isMobile ? "bottom 40%" : "top 30%",  //when top of element reaches 20% of the screen,
        //         // markers: true,
        //     }
        // })

        ScrollTrigger.create({
            // trigger: ".the_about_intro",
            trigger: ".feature_container",
            start: "top 80%",
            // end: "+=1600vh",
            scrub: 1,
            // pin: true,
            invalidateOnRefresh: true,
            // onEnter: () => tl3.restart(),
            // onEnterBack: () => tl3.restart(),
            onUpdate: (self)=>{
                console.log("dir", self.direction);
                // console.log("prog", self.progress);
                // gsap.to(".feature_container", {
                //     x: `${-(352*5)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                //     duration: 0.5,
                //     ease: "power3.out"
                // })
            }
        })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }
    
    useEffect(feature_animation, [])

    return (
        <div className='w-full h-auto fixed z-5 top-0 left-0 -translate-y-30 bg-amber-500'>
            <div className='w-full h-auto px-6 py-8 relative flex justify-between text-white'>
                <Logo />
                
                <div 
                    onClick={showOverlayMenu}
                    className='w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer'
                >
                    <img src="/menu1.svg" alt="menu" className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}

export default OverlayHeader
