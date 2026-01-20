"use client"
import React, { useEffect, useState } from 'react'
import EachStory from './eachStory'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

interface Props {}

function OurStory(props: Props) {
    const {} = props
    
    function feature_animation(){
        const screen_width = window.innerWidth
        const isMobile = screen_width < 768;
        const card_size = 320
        const total_cards = 6
        const total_screen_required = card_size * total_cards
        const remaining_width_offscreen = total_screen_required - screen_width + 170
        
        gsap.registerPlugin(ScrollTrigger, SplitText);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        ScrollTrigger.create({
            trigger: ".our_story_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                gsap.to(".our_story_container", {
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

    // const dds = 12332/33
    // console.log({dds: dds.toFixed(2)})


    return (
        <div className='w-full h-auto min-h-screen bg-white text-black flex justify-start items-start our_story_container'>
            <div className='w-85 min-w-85 h-screen flex flex-col justify-center items-center px-10'>
                <p className='dmd text-center text-[30px]'>Our Story</p>
                <p className='text-[14px] text-center mt-2 opacity-70'>We want a world saturated with the right health knowledge</p>
            </div>
            <EachStory title='In Years Past' description=''/>
            <EachStory title='The Struggles' description='' bg='white' color='black'/>
            <EachStory title='Milestones' description='' bg='#4f3130' color='white' iconbg='#d8bd8a'/>
            <EachStory title='Our Strength' description='' bg='#999999' color='white' iconbg='#d8bd8a'/>
            <EachStory title='Our Tough Lessons' description='' bg='#777777' color='white' iconbg='white'/>
        </div>
    )
}

export default OurStory
