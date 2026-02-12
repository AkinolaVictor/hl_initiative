"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

interface Props {}

function TeamIntro(props: Props) {
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
        // ScrollTrigger.create({
        //     trigger: `.${head}`,
        //     start: "top 80%",
        //     invalidateOnRefresh: true,
        //     onEnter: () => tl.restart(),
        //     onEnterBack: () => tl.restart(),
        // })
        
        // // ScrollTrigger only watches visibility
        // ScrollTrigger.create({
        //     trigger: `.${description}`,
        //     start: "top 80%",
        //     invalidateOnRefresh: true,
        //     onEnter: () => tl.restart(),
        //     onEnterBack: () => tl.restart()
        // })

        // animate_home_button()

        // return ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ()=>ScrollTrigger.refresh();;
    }

    useEffect(()=>{
        return animate_home_title({head: "home_title4", description: "home_description4"})
    }, [])

    return (
        <div className='w-full h-125 relative '>

            <div className='absolute z-10 top-0 left-0 w-full'>
                <Header 
                    env='s'
                />
            </div>

            <div className='w-full h-auto text-center relative' >
                <div style={{ backgroundColor: "black"}} className='w-full h-125 absolute top-0 left-0 z-1'>
                    <img
                        // width={innerWidth} 
                        // height={window?.innerHeight??"500px"}
                        // height={500}
                        src={"/gallery/school_club/school_club_9.jpg"}
                        alt='"background image'
                        className='object-cover object-center w-screen h-auto min-h-125 max-h-125 opacity-30'
                    />
                </div>

                <div 
                    className='w-full h-auto text-center p-10 flex flex-col items-center absolute top-0 left-0 z-2' 
                    // style={{ backgroundColor: "green"}}
                >
                    <p className='mt-25 text-[13px] text-white'></p>
                    <p 
                        className='dmd text-white text-[32px] w-auto max-w-350 text-center opacity-90 mt-0 mb-4 home_title4'
                        style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                    >
                        A Mansion Rises From The Union of Many Bricks
                    </p>
                    
                    <p 
                        className='text-white w-auto opacity-100 max-w-99 text-center text-[15px] mt-1 home_description4'
                    >
                        Success is like building a mansion, each brick matters, each effort
                        effort counts, and with patience and consistency
                        small efforts yield great achievements
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TeamIntro
