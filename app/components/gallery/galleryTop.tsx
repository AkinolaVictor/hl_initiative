"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import axios from 'axios';

interface Props {title?: string, date?: string}

function GalleryTop(props: Props) {
    const {title, date} = props


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

    // async function testApi() {
    //     console.log("testing...")
    //     // await fetch("/api/send_email").then((res:any)=>{
    //     await axios.post("/api/send_email", {something: "something"}).then((res:any)=>{
    //         console.log(res.data)
    //     })
    // }

    useEffect(()=>{
        return animate_home_title({head: "home_title3", description: "home_description3"})
    }, [])

    return (
        <div className='w-full h-auto relative bg-white'>
            {/* <div 
                className='absolute z-1 w-full h-auto' 
                style={{
                    // backgroundImage: `image-set(
                    //     url(./bg-white.webp) type("image/webp"),
                    //     url(./bg-white-2.jpg) type("image/jpeg")
                    // )`,
                    // backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                    // height: "100vh", margin:0, padding: 0,
                    backgroundColor: "green",
                    backgroundImage: "url(./gallery/school_club/school_club_1.jpg)",
                    // backgroundImage: `url(./gallery/amr/amr_4.jpg})`,
                    opacity: 0.5,
                    backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                    height: "360px"
                }}
            >
            </div> */}

            <div className='absolute top-0 left-0 w-full'>
                <Header
                    env='s'
                />
            </div>

            <div className='w-full h-auto text-center p-10 flex flex-col items-center ' style={{ backgroundColor: "green"}}>
                <p className='mt-25 text-[13px] text-white'></p>
                <p 
                    className='dmd text-white text-[38px] w-auto max-w-350 text-center opacity-90 mt-0 mb-4 home_title3'
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    {title||"The Way We Impact"}
                </p>
                
                <p 
                    className='text-white w-auto opacity-75 max-w-99 text-center text-[15px] mt-1 home_description3'
                >
                    {
                        date||`
                            To us, impact is not just about touching live,
                            we stay connected to our beneficiaries lifelong.
                        `
                    }
                </p>
            </div>
        </div>
    )
}

export default GalleryTop
