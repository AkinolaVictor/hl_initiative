import React from 'react'
import EachTestimonial from './eachTestimonial'

interface Props {}

function Testimonial(props: Props) {
    const {} = props
    const color = false
    const iconbg = false
    const title = "John Doe"
    return (
        <div className='w-full h-auto min-h-screen bg-white text-black flex flex-wrap justify-start items-start'>
            <div className='w-full max-w-85 h-screen flex flex-col justify-center items-center px-10'>
                <p className='dmd text-center text-[30px]'>What People Say About Us</p>
                <p className='text-[14px] text-justify mt-2 opacity-70'>
                    positivity and guidance as core values, strengthen their.  
                    positivity and guidance as core values, strengthen their. 
                    positivity and guidance as core values, strengthen their. 
                    positivity and guidance as core values, strengthen their. 
                </p>
            </div>

            <EachTestimonial title={"John Doe"}/>
            <EachTestimonial title='Jahn Doe' description='' bg='white' color='black'/>
            <EachTestimonial title='Goel Doe' description='' color='white' iconbg='#d8bd8a' bg='#4f3130'/>

        </div>
    )
}

export default Testimonial
