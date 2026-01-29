"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
// import FillForm from '../fillForm'

interface Props {}

function VolunteerMain(props: Props) {
    const {} = props

    function animate_home_title(elem: {head:string, description: string}) {
        const {head, description} = elem
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const tl = gsap.timeline({})

        const split = SplitText.create(`.${head}`, {
            type: "words",
        })
        
        tl.from(split.words, {
            y: 400,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            toggleActions: "restart none none reset"
        }, "starter")

        gsap.set(`.${description}`, {opacity: 0.7})
        const split2 = SplitText.create(`.${description}`, {
            type: "words",
        })
        
        
        
        tl.from(split2.words, {
        // tl.to(".home_description", {
            // y: 150,
            opacity: 0,
            autoAlpha: 0,
            stagger: 0.065,
            // scale: 1,
            duration: 1,
            toggleActions: "restart none none reset"
        }, "-=1.0")

        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: `.${head}`,
            start: "top 80%",
            invalidateOnRefresh: true,
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart(),
        })
        
        // ScrollTrigger only watches visibility
        ScrollTrigger.create({
            trigger: `.${description}`,
            start: "top 80%",
            invalidateOnRefresh: true,
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart()
        })

        // animate_home_button()

        // return ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ()=>ScrollTrigger.refresh();;
    }

    useEffect(()=>{
        return animate_home_title({head: "home_title7", description: "home_description7"})
    }, [])

    return (
        <div className='w-full h-auto relative'>
            <div className={`h-auto w-full flex flex-col justify-center items-center `} style={{background: "green"}}>
                <div className='absolute top-0 left-0 w-full'>
                    <Header />
                </div>

                <div className='my-10 text-white'>
                    <p className='dmd text-[42px] text-center opacity-90 mt-15 px-4 home_title7'>Become a Volunteer</p>
                    <p className='overpass text-[13px] text-center mt-0 home_description7'>Be a part of our story today</p>
                </div>

            </div>
            
        </div>
    )
}

export default VolunteerMain
