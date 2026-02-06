"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import Link from 'next/link'
import gsap from 'gsap'
import SplitText from 'gsap/src/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

interface Props {}

function ContactIntro(props: Props) {
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
        return animate_home_title({head: "home_title6", description: "home_description6"})
    }, [])

    return (
        <div className='w-full h-auto relative'>

            <div className={`h-auto w-full flex flex-col justify-center items-center py-10`} style={{background: "green"}}>
                <div className='absolute top-0 left-0 w-full'>
                    <Header />
                </div>

                <div className='my-10 text-white'>
                    <p className='dmd text-[42px] text-center opacity-90 mt-15 px-4 home_title6'>We want to hear from you</p>
                    <p className='overpass text-[13px] text-center mt-0 home_description6'>Contact Us Today For Partnership</p>
                </div>

                <motion.div 
                    className='w-full h-auto flex justify-center items-start flex-wrap opacity-0'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1.5}}
                >
                    <div className={`w-75 h-auto p-5 bg-[rgba(0,0,0,0.4)] rounded-0 text-white m-5 flex flex-col justify-center items-center hover:bg-white hover:text-black`}>
                        <h1 className='font-bold'>Address</h1>
                        <p className='text-[13px] mt-4'>Plot 108 Owode ibeshe Rd, near </p>
                        <p className='text-[13px]'>Lagos, Nigeria</p>
                    </div>
                    
                    <Link href={"tel:+2349031710194"} className={`w-75 h-auto p-5 bg-[rgba(0,0,0,0.4)] rounded-0 text-white m-5 flex flex-col justify-center items-center hover:bg-white hover:text-black`}>
                        <h1 className='font-bold'>Phone</h1>
                        <p className='text-[13px] mt-4'>We are available Mon to Sat</p>
                        <p className='text-[13px]'>08:00 am - 6:00 pm</p>
                        <p className='text-[13px] font-bold hover:underline mt-4'>+234 903 171 0194</p>
                    </Link>

                    <Link href={"mailto:thehealthenlightinitiative@gmail.com"} className={`w-75 h-auto p-5 bg-[rgba(0,0,0,0.4)] rounded-0 text-white m-5 flex flex-col justify-center items-center hover:bg-white hover:text-black`}>
                        <h1 className='font-bold'>E-Mail</h1>
                        <p className='text-[13px] mt-4 font-bold hover:underline'>thehealthenlightinitiative@gmail.com</p>
                    </Link>
                </motion.div>
            </div>

        </div>
    )
}

export default ContactIntro
