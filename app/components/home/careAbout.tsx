"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation';
import { seek_path_and_ref } from '@/utils/exports';

interface Props {}

function CareAbout(props: {title:string, description:string, icon:string, background?:string, index?:number}) {
    const {title, description, icon, background, index} = props
    const card_class = `each_feature_card_${index}`
    const [mobile, setMobile] = useState(false)
    // const card_text_class = `description_containzxzx_${index}`
    const card_text_class = `description_containzxzx`
    const path = usePathname()


    function animate_cards(){
        const isMobile = window.innerWidth < 768;
        setMobile(isMobile)

        if(isMobile) return

        gsap.registerPlugin(ScrollTrigger, SplitText);
        // each_feature_card
        
        gsap.set(`.${card_text_class}`, {opacity: 1})
        let splita = SplitText.create(`.${card_text_class}`, {
            type: "words",
            aria: "hidden",
        })

        const tl = gsap.from(splita.words, {
            opacity: 0,
            duration: 0.7,
            delay: 1,
            ease: "sine.inOut",
            stagger: 0.07
        })
        
        ScrollTrigger.create({
            trigger: `.${card_text_class}`,
            start: "top 70%",
            // start: "left center",
            // end: "+=3000",
            // horizontal: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onEnter: () => tl.restart(),
            onEnterBack: () => tl.restart(),
            // scrub: true,
        })
    }

    useEffect(()=>{
        return animate_cards()
    }, [])

    return (
        <motion.div 
            style={{backgroundColor: background||"#4f3130"}}
            className={`h-[20vh] min-w-88 w-88 flex flex-col justify-center items-center px-2 ${card_class}`}
            initial={{height: "20vh"}}
            viewport={{once: true}}
            whileInView={{height: "100vh"}}
            transition={{duration: 1}}
            // animate=
            // className={`h-screen min-w-80 w-80 flex flex-col justify-center items-center px-2`}
            // className={`h-screen min-w-80 w-full max-w-99 flex flex-col justify-center items-center px-2`}
        >
            <div className='w-28 h-28 bg-white rounded-full flex justify-center items-center'>
            {/* <div className='w-58 h-58 bg-white rounded-[80px] flex justify-center items-center'> */}
                <img 
                    src={`${seek_path_and_ref({path, name: icon})}`} 
                    alt="" 
                    className='w-12 h-12'
                />
            </div>

            <p className='font-semibold text-[18px] text-white mt-7'>{title}</p>

            {/* <p className='text-white text-[15px] opacity-80 mt-4 w-[80%] max-w-75 text-justify'> */}
            <p className={`text-white text-[15px] ${mobile?"opacity-100":"opacity-0"} mt-4 w-[80%] max-w-75 text-justify ${card_text_class}`}>
                {description}
            </p>

            {/* <div className='w-58 h-58 bg-white rounded-[30px] flex justify-center items-center mt-10'
                style={{
                    backgroundImage: `image-set(
                        url(./check_bp.webp) type("image/webp"),
                        url(./check_bp-2.jpg) type("image/jpeg")
                    )`,
                    backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", 
                }}
            /> */}
        </motion.div>
    )
}

export default CareAbout
