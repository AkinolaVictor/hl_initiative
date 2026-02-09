"use client"
import GalleryContent from '@/app/components/gallery/galleryContent'
import GalleryOpenedBody from '@/app/components/gallery/galleryOpenedBody'
import { gallery_activities } from '@/utils/gallery_data/gallery_activites'
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'

interface Props {}

function GalleryNavigator(props: Props) {
    const {} = props
    const path = usePathname()

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
    

    return (
        <Fragment>
            {
                get_gallery_data()?
                <GalleryContent preload_data={get_gallery_data()} where={get_where()}/>:
                <GalleryOpenedBody />
            }
        </Fragment>
    )
}

export default GalleryNavigator
