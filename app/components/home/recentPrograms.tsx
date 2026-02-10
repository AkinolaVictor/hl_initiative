"use client"
// import Link from 'next/link'
// import React from 'react'
import { health_club_wesly } from '@/utils/gallery_data/outreaches/health_club_wesly'
import EachRecent from './eachRecent'
import { antimicrobial_resistance } from '@/utils/gallery_data/outreaches/antimicrobial_resistance'
import { usePathname } from 'next/navigation'
import { seek_path_and_ref } from '@/utils/exports'
// import { motion } from 'framer-motion'

interface Props {}

function RecentPrograms(props: Props) {
    const {} = props
    const path = usePathname()
    const arr = ["Ikorodu Oga", "Ikeja Lane", "Maritonous Pech", "Webinar Session", "Research Validation"]
    

    return (
        // <div className='w-full min-h-screen h-auto bg-white text-black sticky top-0'>
        <div 
            className='w-full min-h-screen h-auto bg-white text-black relative flex flex-col py-20 px-5'
        >
            <p className='dmd text-[22px] text-center'>Our recent Programmes</p>
            <p className='opacity-70 text-center text-[14px]'>The last few programs we carried out</p>
            {
                // arr.map((item, index)=>{
                [
                    {...health_club_wesly, title: "School Health Club at Wesley Girls High School Lagos"}, 
                    {...antimicrobial_resistance}
                ].map((item:any, index)=>{
                    const {title, description, id, date, image, image_alt} = item
                    const thisPath = item.path
                    const which_image = image==="amr_1.jpg"?image_alt:image
                    const image_ref = `gallery/${thisPath}/${which_image}`
                    const img = seek_path_and_ref({path: path, name: image_ref})
                    return (
                        <EachRecent 
                            key={index} 
                            id={id}
                            description={description} 
                            title={title} 
                            index={index} 
                            reverse={index%2==1} 
                            date={date}
                            image={img}
                            // isLast={index==arr.length-1}
                        />
                    )
                })
            }
            {/* <EachRecent title='Ikeja Lane' reverse/>
            <EachRecent title='Maritonous Pech' isLast/> */}
        </div>
    )
}

export default RecentPrograms
