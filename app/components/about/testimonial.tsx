"use client"
import React, { useEffect } from 'react'
import EachTestimonial from './eachTestimonial'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

interface Props {}

function Testimonial(props: Props) {
    const {} = props
    const color = false
    const iconbg = false
    const title = "John Doe"

    function feature_animation(){
        const screen_width = window.innerWidth
        const isMobile = screen_width < 768;
        const card_size = 340
        const total_cards = 6
        const total_screen_required = card_size * total_cards
        const remaining_width_offscreen = total_screen_required - screen_width + 170

        gsap.registerPlugin(ScrollTrigger, SplitText);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        ScrollTrigger.create({
            trigger: ".testimonial_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                gsap.to(".testimonial_container", {
                    x: `${-(remaining_width_offscreen)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
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
        <div className='w-full h-auto min-h-screen bg-white text-black flex justify-start items-start testimonial_container'>
            <div className='min-w-85 w-85 max-w-85 h-screen flex flex-col justify-center items-center px-10'>
                <p className='dmd text-center text-[30px]'>What People Say About Us</p>
                <p className='text-[14px] text-justify mt-2 opacity-70'>
                    positivity and guidance as core values, strengthen their.  
                    positivity and guidance as core values, strengthen their. 
                    positivity and guidance as core values, strengthen their. 
                    positivity and guidance as core values, strengthen their. 
                </p>
            </div>

            <EachTestimonial title={"John Doe"}/>
            <EachTestimonial title='Jahn Doe' description='' bg='white' color='black'/>
            <EachTestimonial title='Goel Doe' description='' color='white' iconbg='#d8bd8a' bg='#4f3130'/>
            <EachTestimonial title='Jane Doe' description='' color='white' iconbg='#d8bd8a' bg='#999999'/>
            <EachTestimonial title='Goel Doe' description='' color='white' iconbg='#d8bd8a' bg='#777777'/>

        </div>
    )
}

export default Testimonial
