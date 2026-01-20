import React from 'react'

interface Props {title:string, reverse?:boolean}

function EachAboutFoundation(props: Props) {
    const {reverse, title} = props

    return (
        <div className={`w-full h-auto min-h-screen flex flex-col bp8:flex-row ${reverse&&"bp8:flex-row-reverse"} justify-between items-center`}>
            <div className='w-full px-5 py-10'>
                <p className='dmd text-[25px] text-center'>{title}</p>
                <p className='text-[13px] text-center opacity-70'>Lorem ipsum dolor sit amet, sit amet</p>

                <p className='text-[14px] text-justify opacity-70 mt-10 w-auto max-w-99 ml-auto mr-auto'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
                    molestie consequat, vel illum dolore eu feugiat nulla fa
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
                    molestie consequat, vel illum dolore eu feugiat nulla fa
                </p>
                <div className='w-40 ml-auto mr-auto h-auto rounded-full bg-black py-2 px-7 text_1 cursor-pointer mt-5'>
                    <p className='text-white text-center font-semibold'>Learn More</p>
                </div>
            </div>

            <div className='w-full h-auto max-h-screen'>
                {/* <img 
                    src="./check_bp_2.jpg" alt="a doctor checking patient heart bp" 
                    // className='rounded-[20px]'
                /> */}
                <picture>
                    <source srcSet="check_bp.webp" type="image/webp" />
                    <img src="check_bp_2.jpg" alt="image"/>
                </picture>
            </div>
        </div>
    )
}

export default EachAboutFoundation
