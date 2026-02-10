"use client"
import GalleryContent from '@/app/components/gallery/galleryContent'
import GalleryOpenedBody from '@/app/components/gallery/galleryOpenedBody'
import GalleryTop from '@/app/components/gallery/galleryTop'
import { gallery_activities } from '@/utils/gallery_data/gallery_activites'
import { usePathname } from 'next/navigation'
import React, { Fragment, useState } from 'react'

interface Props {}

function GalleryNavigator(props: Props) {
    const {} = props
    const path = usePathname()
    const [imageUrl, setImageUrl] = useState("/gallery/school_club/school_club_2.jpg")

    function get_where(){
        const path_split = path?.split("/").reverse() ?? []
        const id = path_split[0]
        return id
    }
    
    function get_gallery_data(){
        const id = get_where()
        if(!(id==="outreach" || id==="webinar")){
            return false
        }

        const pack:any[] = []
        for(let i=0; i<gallery_activities.length; i++){
            const each = gallery_activities[i]
            if(each.type.includes(id)){
                pack.push(each)
            }
        }
        return pack

    }

    function getImage(){
        const data = get_gallery_data()
    }

    return (
        <Fragment>
            <GalleryTop
                // bgImage="/gallery/school_club/school_club_2.jpg"
                bgImage={imageUrl}
            />
            {
                get_gallery_data()?
                <GalleryContent preload_data={get_gallery_data()} where={get_where()}/>:
                <GalleryOpenedBody updater={setImageUrl}/>
            }
        </Fragment>
    )
}

export default GalleryNavigator
