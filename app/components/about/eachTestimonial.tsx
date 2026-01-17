import React from 'react'

interface Props {title:string, iconbg?:string, color?:string, description?:string, bg?:string}

function EachTestimonial(props: Props) {
    const {iconbg, title, color, description, bg} = props

    return (
        <div className={`w-full max-w-85 h-screen flex flex-col ${color?`text-${color}`:"text-black"} ${bg?`bg-[${bg}]`:"bg-[#d8bd8a]"} justify-start items-center px-10`}>

            <div className={`w-45 h-45 ${iconbg?`bg-[${iconbg}]`:"bg-[#4f3130]"} mt-15 rounded-full flex justify-center items-center`}>
            </div>

            <p className='font-semibold text-[20px] mt-7'>{title}</p>
            <p className='mb-4 text-[13px]'>Description of John Doe</p>

            <p className='text-[14px] text-justify'>
                <i>
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                    quis nostrud exerci tation ullamcorper suscipit lobortis 
                    nisl ut aliquip ex ea commodo consequat.
                </i>
            </p>
        </div>
    )
}

export default EachTestimonial
