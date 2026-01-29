import React from 'react'
import BlogController from './BlogController'
import BlogPreview from './BlogPreview'

interface Props {}

function BlogBody(props: Props) {
    const {} = props

    return (
        <div className='w-full h-auto min-h-screen bg-white text-black py-17.5 px-4 bp7:px-10'>
            <BlogController />
            {
                [1,1,1,1,1].map((item, index)=>{
                    return (
                        <BlogPreview key={index} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default BlogBody
