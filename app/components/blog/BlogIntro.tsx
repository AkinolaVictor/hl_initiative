"use client"
import React, { useEffect } from 'react'
import Header from '../header'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { format_by_count, seek_path_and_ref_2 } from '@/utils/exports'
import { usePathname } from 'next/navigation'

interface Props {title: string, description: string, env?: string, image?: string}

function BlogIntro(props: Props) {
    const {title, description, env, image} = props
    const path = usePathname()
    

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
        return animate_home_title({head: "home_title5", description: "home_description5"})
    }, [])

    return (
        <div className='w-full min-h-90 h-auto  relative bg-black'>
        {/* <div className='w-full h-screen  relative'> */}
            <div 
                className='absolute z-1 w-full h-full' 
                style={{
                    // backgroundColor: "green",
                    opacity: 0.5,
                    // backgroundImage: "url(./gallery/school_club/school_club_1.jpg)",
                    // backgroundImage: `url(${image??"./gallery/amr/amr_2.jpg"})`,
                    backgroundImage: `url(${seek_path_and_ref_2({path, name: "gallery/amr/amr_2.jpg"})})`,
                    backgroundSize:"cover", backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", margin:0, padding: 0,
                }}>
            </div>

            <div className={`h-full w-full absolute z-2 flex flex-col justify-center items-center `}>
                <div className='absolute top-0 left-0 w-full'>
                    <Header env={env}/>
                </div>
                <p 
                    className={`dmd text-white ${env?"text-[28px]":"text-[42px]"} w-auto max-w-150 text-center opacity-90 mt-15 p-4 home_title5`}
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    {title}
                </p>
                
                <p 
                    className={`text-white w-auto max-w-150 text-center opacity-90 text-[15px] ${env?"mt-0 p-1":"mt-3 p-4"} home_description5`}
                    style={{textShadow:"2px 2px 8px rgba(0,0,0,0.5)"}}
                >
                    {/* {description} */}
                    {format_by_count(description, 30)}
                </p>
                
                {
                    env && <div className='flex m-2 cursor-pointer'>
                        <div className='w-8 h-8 flex m-2 justify-center items-center bg-blue-500 rounded-full'>
                            <p className='text-white dmd text-[15px]'>f</p>
                        </div>
                        <div className='w-8 h-8 flex m-2 justify-center items-center bg-[#cbd5c0] rounded-full'>
                            
                        </div>
                        <div className='w-8 h-8 flex m-2 justify-center items-center bg-[#cbd5c0] rounded-full'>
                            
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogIntro
