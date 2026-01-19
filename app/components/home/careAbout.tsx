import React from 'react'

interface Props {}

function CareAbout(props: {title:string, description:string, icon?:string, background?:string}) {
    const {title, description, icon, background} = props
    

    return (
        <div 
            style={{backgroundColor: background||"#4f3130"}}
            className={`h-screen min-w-80 w-80 flex flex-col justify-center items-center px-2`}
            // className={`h-screen min-w-80 w-full max-w-99 flex flex-col justify-center items-center px-2`}
        >
            <div className='w-28 h-28 bg-white rounded-full flex justify-center items-center'>

            </div>

            <p className='dmd text-[22px] text-white mt-7'>{title}</p>
            <p className='text-white text-[15px] opacity-80 mt-4 w-[80%] max-w-75 text-justify'>
                {description}
            </p>
        </div>
    )
}

export default CareAbout
