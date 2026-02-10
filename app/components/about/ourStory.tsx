"use client"
import React, { useEffect, useState } from 'react'
import EachStory from './eachStory'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { our_story } from '@/utils/exports'

interface Props {}

function OurStory(props: Props) {
    const {} = props
    
    function feature_animation(){
        const screen_width = window.innerWidth
        const isMobile = screen_width < 768;
        const card_size = 320
        const total_cards = our_story.length+1.2
        const total_screen_required = card_size * total_cards
        const remaining_width_offscreen = total_screen_required - screen_width + 170
        
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".our_story_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                // gsap.to(".our_story_container", {
                gsap.to(".our_story_inner_container", {
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
        <div className='w-full h-auto min-h-screen bg-white text-black flex justify-start items-start our_story_container relative'>
            <div 
                className='w-85 min-w-85 h-screen flex flex-col justify-center items-center px-10 story1 bp10:absolute bp10:z-2 bg-white'
                style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
            >
                <p className='dmd text-center text-[30px]'>Our Story</p>
                <p className='text-[14px] text-center mt-2 opacity-70'>
                    From a single spark of concern to a growing movement, we transform 
                    lives through evidence-based health enlightenment and action.
                </p>
            </div>

            <div 
                className={`rounded-full py-1 px-10 bg-white text-center text-black text-[13px] font-semibold block bp10:hidden absolute bottom-5 left-[50%] translate-x-[-50%] z-10`}
                style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
            >
                <p>Our Story</p>
            </div>

            <div className='flex justify-start items-start our_story_inner_container bp10:absolute bp10:left-85'>
                {
                    our_story.map((item, index)=>{
                        const {title, description, colors, icon_name} = item
                        const {bg, color, iconbg} = colors

                        return (
                            <EachStory key={index} title={title} description={description} iconbg={iconbg} bg={bg} color={color} icon_name={icon_name}/>
                        )
                    })
                }
                {/* <EachStory title='In Years Past' description=''/>
                <EachStory title='The Struggles' description='' bg='white' color='black'/>
                <EachStory title='Milestones' description='' bg='#4f3130' color='white' iconbg='#d8bd8a'/>
                <EachStory title='Our Strength' description='' bg='#999999' color='white' iconbg='#d8bd8a'/>
                <EachStory title='Our Tough Lessons' description='' bg='#777777' color='white' iconbg='white'/>
                <EachStory title='Achievements' description='' bg='#95D5B2' color='white' iconbg='white'/> */}
            </div>
        </div>
    )
}

export default OurStory
