"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Footer from '../footer'
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { overlay_menu_listener, seek_path_and_ref } from '@/utils/exports'
import { usePathname, useRouter } from 'next/navigation'
// import { gallery_activities } from '@/utils/gallery_data/gallery_activites'

interface Props {
    image?:string, 
    title2?: string, 
    title?: string, 
    description2?: string,
    description?: string,
    id?: string,
    colors?: any,
    // type?: string[],
    type?: any,
    path?: string,
    preload_data?: any,
    where?: string
}

function GalleryContent(props: Props) {
    const {preload_data, where} = props
    const gallery_activities = preload_data || []
    const [mobile, setMobile] = useState(false)
    const imgs = ["check_bp", "bg-white", "bg-red", "bg-white", "check_bp", "bg-red", "bg-white"]
    const router = useRouter()
    // const [where, setWhere] = useState("all")
    const path_main = usePathname()

    function feature_animation(){
        // if(prevAnim) return
        const screen_width = window.innerWidth
        const screen_height = window.innerHeight
        const isMobile = screen_width <= 800;
        setMobile(isMobile)
        
        if(isMobile) return


        // const card_size = 340

        function getCardCount(){
            const card_len = gallery_activities.length
            if(card_len%2 == 1) return Math.floor(card_len/2)
            return Math.floor(card_len/2) - 1
        }

        const total_cards = getCardCount()
        // const total_screen_required = card_size * total_cards
        // const remaining_width_offscreen = total_screen_required - screen_width + 170

        gsap.registerPlugin(ScrollTrigger, SplitText);
        // gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
        ScrollTrigger.create({
            trigger: ".gallery_preview_container",
            start: "top top",
            end: "+=1600vh",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            
            onUpdate: (self)=>{
                // gsap.to(".gallery_preview_container", {
                gsap.to(".gallery_left_preview", {
                    y: `${-(screen_height * total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })

                gsap.to(".gallery_right_preview", {
                    y: `${(screen_height * total_cards)*self.progress}`, // multiplied by the number of the total widths additional cards to be scrolled to view
                    duration: 0.5,
                    ease: "power3.out"
                })
            }
        })

        // return ()=>ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return ScrollTrigger.refresh;
    }

    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    // const working2 = useRef(false)
    // const timeout2 = useRef(false)
    const called = useRef(false)

    useEffect(()=>{
        const ht = window.innerHeight
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({
            ScrollTrigger, 
            working, 
            timeout, 
            called,
            // threshold: ht,
            threshold: 330,
            setGeneralAlpha
        })
    }, [])
    
    useEffect(feature_animation, [])
    
    function EachGalleryComp(props2: Props){
        const {image, title2, description2} = props2

        return (
            <div onClick={()=>{router.push("/gallery/open-12233")}} className='w-full h-auto relative cursor-pointer'>
                <div className='w-full h-auto flex justify-center items-center'>
                    <div
                        className='w-full h-auto' 
                        style={{
                            backgroundImage: `image-set(
                                url(./${image||"bg-red"}.webp) type("image/webp"),
                                url(./${image||"bg-red"}-2.jpg) type("image/jpeg")
                            )`,
                            backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                            height: "100vh", margin:0, padding: 0,
                            

                        }}
                    >

                    </div>
                </div>

                <div 
                    className='w-full h-auto max-h-70 bg-[rgba(0,0,0,0.6)] absolute z-2 bottom-0 left-0 p-5 text-white'
                    style={{
                        background:`linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 100%)`,
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                    }}
                >
                    <p className='dmd text-[22px] opacity-90'>{title2 || "Medical Outreach Erin-Ijesha"}</p>
                    <p className='text-[12px] opacity-70'>Carried out on {"12th September, 2025"}</p>
                    <p className='text-[13px] mt-3 opacity-70'>
                        {
                            description2||`
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                                nibh euismod tincidunt ut.
                            `
                        }
                    </p>
                    <Link
                        href={"/gallery/open-12233"}
                        className='w-35 h-8.5 text-black font-semibold rounded-full text-[13px] flex justify-center items-center bg-[rgba(255,255,255,0.9)] cursor-pointer mt-4'
                    >
                        Explore
                    </Link>
                </div>
            </div>
        )
    }
    
    function EachGalleryComp_2(props2: Props){
        const {image, title, description, id, colors, type, path} = props2
        const {bg, color} = colors
        const image_ref = `gallery/${path}/${image}`
        const img = seek_path_and_ref({path: path_main, name: image_ref})
        // console.log({type})
        return (
            <div onClick={()=>{router.push(`/gallery/${id}`)}} 
                className={`w-full flex flex-col min-h-screen relative cursor-pointer`}
                style={{backgroundColor: bg||"green", color: color||"white"}}
            >
                <div className='w-full h-auto flex justify-center items-center'>
                    <div
                        // className='w-full h-85' 
                        className={`rounded-[20px] mt-10 w-80.5 h-auto max-h-99`} 
                        style={{
                            // backgroundImage: `image-set(
                            //     url(./${image||"bg-red"}.webp) type("image/webp"),
                            //     url(./${image||"bg-red"}-2.jpg) type("image/jpeg")
                            // )`,
                            backgroundImage: `url(${img})`,
                            // backgroundImage: `url(./../gallery/amr/amr_1.jpg)`,
                            backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                            width: "300px", minHeight: "360px", height: "auto", maxHeight: "450px"
                            // height: "100vh", margin:0, padding: 0,
                        }}
                    >

                    </div>
                </div>

                <div 
                    className='w-full h-full max-h-70 p-5 flex flex-col justify-center items-center text-center'
                    style={{
                        // background:`linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 100%)`,
                        // backdropFilter: "blur(6px)",
                        // WebkitBackdropFilter: "blur(6px)",
                    }}
                >
                    <p className='font-semibold text-[22px] opacity-90'>{title}</p>
                    {/* <p className='text-[12px] opacity-70'>Carried out on {date||"12th September, 2025"}</p> */}
                    <p className='text-[12px]'>({type.includes("webinar")?"Webinar":"Outreach"})</p>
                    <p className='text-[14px] mt-3 opacity-70 text-justify max-w-125'>
                        {description}
                    </p>
                    <Link
                        href={`/gallery/${id}`}
                        style={{backgroundColor: "white"}}
                        className='w-35 h-8.5 text-black font-semibold rounded-full text-[13px] flex justify-center items-center  cursor-pointer mt-4'
                    >
                        Explore
                    </Link>
                </div>
            </div>
        )
    }



    return (
        // <div className='w-full min-h-screen h-auto bg-white text-black'>
        <div className='w-full h-auto bg-white text-black gallery_content_parent_container'>
            <div className='w-full bg-white flex flex-col items-center'>
                <p className='text-center px-7 pt-7 font-semibold text-[17px]'>Our Programmes So Far</p>
                <p className='text-center px-7 pb-7 text-[13px] text-[#414141]'>Explore some of the programmes we did</p>

                <div className='w-full max-w-90 my-5 h-9 bg-gray-400 rounded-full flex '>
                    <Link href={"/gallery"}
                        // onClick={()=>setWhere("all")}
                        className={`w-full font-semibold h-full cursor-pointer ${where=="all"?"bg-[#758467] text-white":"bg-[#9caf88] text-black"} flex justify-center items-center rounded-bl-full rounded-tl-full text-[13px]`}
                    >
                        All
                    </Link>

                    <Link href={"/gallery/outreach"}
                        // onClick={()=>setWhere("outreaches")}
                        className={`w-full font-semibold h-full cursor-pointer ${where=="outreach"?"bg-[#758467] text-white":"bg-[#9caf88] text-black"} flex justify-center items-center text-[13px]`}
                    >
                        Outreaches
                    </Link>

                    <Link href={"/gallery/webinar"}
                        // onClick={()=>setWhere("webinars")}
                        className={`w-full font-semibold h-full ${where=="webinar"?"bg-[#758467] text-white":"bg-[#9caf88] text-black"} cursor-pointer flex justify-center items-center rounded-br-full rounded-tr-full text-[13px]`}
                    >
                        Webinars
                    </Link>
                </div>
            </div>

            {
                mobile?
                // <div className=' h-screen overflow-y-auto relative'>
                <div className='mt-5'>
                    {
                        gallery_activities.map((item:any, index:number)=>{
                            const {title, description, id, colors, type, path, image} = item
                            return (
                                <div key={index} className='w-full h-screen flex justify-center items-center sticky top-0' >
                                    <EachGalleryComp_2 
                                        key={index}
                                        id={id}
                                        title={title}
                                        description={description}
                                        colors={colors}
                                        type={type}
                                        image={image}
                                        path={path}
                                    />
                                </div>
                            )
                        })
                    }
                </div>:
                <div className='w-full h-screen bg-white flex flex-col bp8:flex-row justify-start mt-7 overflow-hidden gallery_preview_container '>
                    
                    <div className='w-full h-auto flex flex-col justify-start items-center relative gallery_left_preview'>
                        {
                            gallery_activities.map((item:any, index:number)=>{
                                if(index%2 == 1) return null
                                
                                const {title, description, id, colors, type, path, image} = item

                                return (
                                    <EachGalleryComp_2 
                                        key={index}
                                        id={id}
                                        title={title}
                                        description={description}
                                        colors={colors}
                                        type={type}
                                        image={image}
                                        path={path}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='w-full h-auto flex flex-col justify-end items-center relative gallery_right_preview'>
                        {
                            gallery_activities.map((item: any, index: number)=>{
                                if(index%2 == 0) return null
                                
                                const {title, description, id, colors, type, path, image} = item

                                return (
                                    <EachGalleryComp_2 
                                        key={index}
                                        id={id}
                                        title={title}
                                        description={description}
                                        colors={colors}
                                        type={type}
                                        image={image}
                                        path={path}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            }
        </div>
    )
}

export default GalleryContent
