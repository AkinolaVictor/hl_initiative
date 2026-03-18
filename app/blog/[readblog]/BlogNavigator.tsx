"use client"
import BlogContent from '@/app/components/blog/BlogContent'
import BlogIntro from '@/app/components/blog/BlogIntro'
// import { blog_list } from '@/utils/blog_data/blog_list'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {}

function BlogNavigator(props: Props) {
    const {} = props
    const path = usePathname()
    const [data, setData] = useState<any>({})
    const blog_list= useSelector((state:any)=>state.generalSlice.blog)

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
            // const this_id = each.title.split(" ").join("_")
            const this_id = each.data_id
            if(id === this_id){
                // const image_ref = `blog/${each.path}/${each.image}`
                // const img = seek_path_and_ref({path: path, name: image_ref})
                // updater(img)
                return each
            }
        }

        return {}
    }

    useEffect(()=>{
        if(!blog_list.length) return
        const datum = get_gallery_data()
        setData(datum)
    }, [blog_list])

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
