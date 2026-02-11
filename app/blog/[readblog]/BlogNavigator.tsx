"use client"
import BlogContent from '@/app/components/blog/BlogContent'
import BlogIntro from '@/app/components/blog/BlogIntro'
import { blog_list } from '@/utils/blog_data/blog_list'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useState } from 'react'

interface Props {}

function BlogNavigator(props: Props) {
    const {} = props
    const path = usePathname()
    const [data, setData] = useState<any>({})

    // function get_where(){
    //     const path_split = path?.split("/").reverse() ?? []
    //     const id = path_split[0]
    //     return id
    // }
        
    function get_gallery_data(){
        const path_split = path?.split("/").reverse() ?? []
        const id = path_split[0]
        for(let i=0; i<blog_list.length; i++){
            const each = blog_list[i]
            if(id === each.id){
                // const image_ref = `blog/${each.path}/${each.image}`
                // const img = seek_path_and_ref({path: path, name: image_ref})
                // updater(img)
                return each
            }
        }

        return {}
    }

    useEffect(()=>{
        const datum = get_gallery_data()
        setData(datum)
    }, [])

    if(!data.id) return null

    return (
        <Fragment>
            <BlogIntro 
                title={data.title}
                description={data.description}
                env='readblog'
                image={data.image}
            />
            <BlogContent data={data}/>
        </Fragment>
    )
}

export default BlogNavigator
