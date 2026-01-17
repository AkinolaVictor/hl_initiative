import React from 'react'

interface Props {title:string, description:string, bg?:string, color?:string, iconbg?:string}

function EachStory(props: Props) {
    const {title, description, bg, color, iconbg} = props

    return (
        <div className={`w-full max-w-85 h-screen flex flex-col ${color?`text-${color}`:"text-black"} ${bg?`bg-[${bg}]`:"bg-[#d8bd8a]"} justify-start items-center px-10`}>

            <div className={`w-20 h-20 ${iconbg?`bg-[${iconbg}]`:"bg-[#4f3130]"} mt-15 rounded-full flex justify-center items-center`}>
            </div>

            <p className='font-semibold text-[20px] mt-7 mb-4'>{title}</p>

            <p className='text-[14px] text-justify'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                quis nostrud exerci tation ullamcorper suscipit lobortis 
                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum 
                iriure dolor in hendrerit in vulputate velit esse molestie 
                consequat, vel illum dolore eu feugiat nulla facilisis at 
                vero eros et accumsan et iusto odio dignissim qui blandit 
                praesent luptatum zzril delenit augue
            </p>
        </div>
    )
}

export default EachStory
