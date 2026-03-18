"use client"
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { cares, overlay_menu_listener, team_members, testimonal_messgaes, volunteer_members, volunteers_list } from '@/utils/exports'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Testimonial from '../about/testimonial'
import { useSelector } from 'react-redux'
import Media from '../media'

// interface Props {}
interface Props {right?: boolean, bg?:string, color?:string, env?:string, item?: any}

function TeamBody(props: Props) {
    const {env} = props
    const [mobile, setMobile] = useState(false)
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)
    const {team} = useSelector((state:any)=>state.generalSlice)
    const nums = [1,2,2,2,2,2,2,2]

    function Part_A(props2: Props){
        const {item} = props2
        const {name, role, colors, social, image} = item
        const {bg, color} = colors
        const {x, instagram, linkedIn} = social

        return (
            <div 
                // className='w-full min-h-screen p-10 flex flex-col justify-center items-center bg-white text-white' style={{backgroundColor: "green"}}
                className='w-full bp7:min-h-screen h-auto p-4 bp9:p-10 flex flex-col justify-center items-center bg-white  bp7:text-white bp7:bg-[rgb(0,128,0)]'
                style={{backgroundColor: bg, color }}
                onClick={()=>console.log(image)}
            >
                <div 
                    // className={`w-full bp9:w-[80%] h-auto bp7:rounded-[25px] mt-12.5`} 
                    className={`rounded-[30px] mt-10 w-80.5 h-auto max-h-99`} 
                    style={{
                        // backgroundImage: `image-set(
                        //     url(./check_bp.webp) type("image/webp"),
                        //     url(./check_bp-2.jpg) type("image/jpeg")
                        // )`,
                        // backgroundImage: `url(${env=="volunteer"?"./../":"./"}team/${image})`,
                        backgroundImage: `url(${image})`,
                        backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                        width: "300px", minHeight: "360px", height: "auto", maxHeight: "400px"
                    }}
                >
                    {/* <img src="./team/team_9.jpg" alt="image" className='h-auto max-w-99 w-auto rounded-[15px]'/> */}
                    {/* <img 
                        src={image} 
                        alt="image" 
                        className='rounded-[30px] object-cover object-center'
                        style={{
                            width: "300px", minHeight: "360px", height: "auto", maxHeight: "400px",
                            // backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                        }}
                    /> */}
                </div>

                <p className='text-[22px] font-semibold mt-10 w-full text-center'>{name}</p>
                <p className='text-[13px] text-center w-full'>{role}</p>

                {/* <div className='flex m-2 cursor-pointer mb-10'>
                    <div className='w-8 h-8 flex m-2 justify-center items-center bg-blue-500 rounded-full'>
                        <p className='text-white dmd text-[15px]'>f</p>
                    </div>
                    <div className='w-8 h-8 flex m-2 justify-center items-center bg-[#cbd5c0] rounded-full'>
                        
                    </div>
                    <div className='w-8 h-8 flex m-2 justify-center items-center bg-[#cbd5c0] rounded-full'>
                        
                    </div>
                </div> */}
                <Media 
                    x={x}
                    instagram={instagram}
                    linkedIn={linkedIn}
                />
            </div>
        )
    }

    function Part_B(props2: Props){
        const {item} = props2
        const {name, role} = item

        return (
            <div 
                // className='w-full min-h-screen p-10 flex flex-col justify-center items-center text-black' style={{backgroundColor: "white"}}
                className='w-full bp7:min-h-screen h-auto px-7 p-4 bp7:p-10 flex flex-col justify-center items-center text-black' style={{backgroundColor: "white"}}
            >
                <p className='text-[22px] mb-5 font-semibold text-center hidden bp7:block'>About {name.split(" ")[0]}</p>
                {
                    [2,2,2].map((item, index)=>{
                        return (
                            // PROTOTYPE SHOULD BE 1000 CHARACTERS AND 300 WORDS
                            <p key={index} className='text-[13px] text-justify mb-5'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci tation ullamcorper suscipit lobortis 
                                nisl ut aliquip ex ea commodo consequat. Duis autem vel 
                                eum iriure dolor in hendrerit in vulputate velit esse 
                                molestie consequat, vel illum dolore eu feugiat nulla fa
                            </p>
                        )
                    })
                }
            </div>
        )
    }

    function feature_animation(){
        if(!team.length) return

        const screen_width = window.innerWidth
        const screen_height = window.innerHeight
        const isMobile = screen_width <= 700;
        setMobile(isMobile)
        
        // if(isMobile || env==="volunteer") return
        if(isMobile) return

        function getCardCount(){
            const card_len = decideData().length
            if(card_len%2 == 1) return Math.floor(card_len/2)
            return Math.floor(card_len/2) - 1
        }

        // const total_cards = Math.floor(decideData().length/2)
        const total_cards = getCardCount()
        

        gsap.registerPlugin(ScrollTrigger, SplitText);
        ScrollTrigger.create({
            trigger: ".team_preview_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                // gsap.to(".team_preview_container", {
                gsap.to(".team_left_preview", {
                    y: `${-(screen_height * total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })

                gsap.to(".team_right_preview", {
                    y: `${(screen_height * total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })
            }
        })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }

    function decideData(){
        const vol = []
        const mem = []

        for(let i=0; i<team.length; i++){
            const data = {...team[i]}
            data.image = data.photourl
            data.role = data.title
            data.social = {
                x: data.x,
                linkedIn: data.linkedin,
                instagram: data.instagram
            }

            data.colors = {
                bg: data.bg_color,
                color: data.tx_color
            }

            if(data.category == "Volunteer"){
                vol.push(data)
            } else {
                mem.push(data)
            }
        }
        
        // if(env == "volunteer") return [...vol, ...volunteer_members]
        // else return [...mem, ...team_members]

        if(env == "volunteer") return [...vol]
        else return [...mem]
    }
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha, threshold: 330})
    }, [])

    useEffect(feature_animation, [team])

    if(!team.length){
        return (
            <div className='w-full h-auto p-10 flex justify-center items-center bg-white text-black'>
                <p>Waiting for data to load...</p>
            </div>
        )
    }

    return (
        // <div className=' text-black w-full min-h-screen h-auto'>
        <div className=' text-black w-full h-auto team_body_parent_container'>
            <div className='w-full p-20 bg-white flex flex-col items-center'>

                <p className='dmd text-[22px]'>{env == "volunteer"?"Our Volunteers":"Our Team Members"}</p>
                <p className='text-[13px] opacity-80'>
                    {
                        env==="volunteer"?
                        "People who volunteered to join us":
                        "The central team members"
                    }
                </p>

                <div className='w-60 mt-7 h-9 bg-gray-400 rounded-full flex '>
                    <Link href={"/team"}
                        className={`w-full text-white h-full cursor-pointer ${env !== "volunteer"?"bg-[#758467] text-white":"bg-[#9caf88] text-black"} flex justify-center items-center rounded-bl-full rounded-tl-full text-[13px]`}
                    >
                        <p className='font-semibold'>Core Team</p>
                    </Link>

                    <Link href={"/team/volunteer"}
                        className={`w-full h-full font-semibold ${env == "volunteer"?"bg-[#758467] text-white":"bg-[#9caf88] text-black"} cursor-pointer flex justify-center items-center rounded-br-full rounded-tr-full text-[13px]`}
                    >
                        <p className='font-semibold'>Volunteer</p>
                    </Link>
                </div>

            </div>
            
            {
                // env == "volunteer"?
                // HE DEMANDED THAT EVERYONE SHOULD BE PRESENTED USING A VERTICAL SCROLL
                false?
                <>
                    {/* <Testimonial
                        // prevAnim={!hideTeam}
                        id='team'
                        title='Volunteers'
                        description='Meet the selfless individuals who donate their time and expertise to bring health 
                            enlightenment and tangible support to communities worldwide.'
                        baseText='Volunteers'
                        // dataSet={testimonal_messgaes}
                        // dataSet={volunteers_list}
                        dataSet={volunteer_members}
                    /> */}
                </>:
                <>
                    {
                        mobile?
                        <div className='w-full h-auto '>
                            {
                                decideData().map((item, index)=>{
                                    return (
                                        <div 
                                            key={index} 
                                            // className='w-full h-auto sticky top-0 bg-white'
                                            // style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
                                        >
                                            <Part_A item={item}/>
                                            {/* <Part_B item={item}/> */}
                                        </div>
                                    )
                                })
                            }
                        </div>:
                        <div className='w-full h-screen bg-white flex flex-col bp7:flex-row justify-start overflow-hidden team_preview_container' >
                            <div className='w-full h-auto flex flex-col justify-start items-center team_left_preview'>
                                {
                                    decideData().map((item, index)=>{
                                        if(index%2 == 0) return <Part_A key={index} item={item}/>
                                        return null
                                    })
                                }
                            </div> 


                            <div className='w-full h-auto flex flex-col justify-end items-center team_right_preview'>
                                {
                                    decideData().map((item, index)=>{
                                        if(index%2 == 1) return <Part_A key={index} item={item}/>
                                        return null
                                    // })
                                    }).reverse()
                                }
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default TeamBody
