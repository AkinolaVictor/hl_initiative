"use client"
import React, { useEffect, useRef } from 'react'
import EachTestimonial from './eachTestimonial'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { delayer, testimonal_messgaes } from '@/utils/exports'

interface Props {prevAnim?:boolean, title?: string, baseText?:string, id?:string, dataSet: any, description?: string}

function Testimonial(props: Props) {
    const {prevAnim, title, baseText, id, dataSet, description} = props
    // const color = false
    // const iconbg = false
    const container_class = `testimonial_container_${id}`
    const inner_container_class = `our_story_inner_containerz_${id}`
    // const timeout = useRef(false)
    // const working = useRef(false)
    // const title = "John Doe"

    function feature_animation(){
        if(prevAnim) return
        const screen_width = window.innerWidth
        // const isMobile = screen_width < 768;
        const card_size = 340
        const total_cards = dataSet.length + 0.7
        const total_screen_required = card_size * total_cards
        const remaining_width_offscreen = total_screen_required - screen_width + 170

        gsap.registerPlugin(ScrollTrigger, SplitText);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        const scroll_controller = ScrollTrigger.create({
            trigger: `.${container_class}`,
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                // gsap.to(".testimonial_container", {
                gsap.to(`.${inner_container_class}`, {
                    x: `${-(remaining_width_offscreen)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })

                // delayer({
                //     working, 
                //     timeout, 
                //     time: 700, 
                //     func: ()=>{
                //         self.refresh()
                //         console.log({self: "called"})
                //     }
                // })

                // self.refresh() // Use delayer
            }
        })


        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }
    
    useEffect(feature_animation, [prevAnim])

    return (
        <div className={`w-full h-screen min-h-screen bg-white text-black flex justify-start items-start ${container_class} relative`}>
            <div 
                className='min-w-85 w-85 max-w-85 h-screen flex flex-col justify-center items-center px-10 story1 bp10:absolute bp10:z-2 bg-white'
                style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
            >
                <p className=' font-semibold text-center text-[25px]'>{title || "What People Say About Us"}</p>
                <p className='text-[14px] text-center mt-2 opacity-70'>
                    {description}
                </p>
            </div>

            <div 
                className={`rounded-full py-1 px-10 bg-white text-black text-[13px] font-semibold block bp10:hidden absolute bottom-5 left-[50%] translate-x-[-50%] z-10`}
                style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
            >
                <p>{baseText || "Testimonials"}</p>
            </div>

            <div className={`flex justify-start items-start ${inner_container_class} bp10:absolute bp10:left-85`}>
                {
                    dataSet.map((item:any, index:any)=>{
                        const {title, description, colors, icon_name, message, social, image, name, role} = item
                        const {color, iconbg, bg} = colors

                        return (
                            <EachTestimonial 
                                key={index}
                                title={title || name}
                                description={description || role}
                                bg={bg}
                                env={id}
                                message={message}
                                iconbg={iconbg}
                                color={color}
                                social={social}
                                image={image}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Testimonial
