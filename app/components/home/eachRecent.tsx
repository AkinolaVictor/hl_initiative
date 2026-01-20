import React from 'react'

interface Props {reverse?: boolean, title: string, isLast?:boolean}

function EachRecent(props: Props) {
    const {reverse, title, isLast} = props

    return (
        <div className={`w-full flex flex-col bp8:flex-row ${reverse&&"bp8:flex-row-reverse"} justify-around items-center p-3 mt-0`}>
            <div className='w-auto bp8:max-w-100 h-auto p-5'>
                <p className='dmd text-[22px]'>{title}</p>
                <p className='text-[12px] opacity-70'>Date: 24th November, 2025</p>
                <br />
                <p className='text-[14px] text-justify'>
                    An epitome of momentous impact 
                    <br />
                    <br />

                    Ikorodu food distribution was a huge success, being our base, 
                    Every box distributed gave us fulfillment. Because we are relentless, 
                    after a long day with the kids on 23rd December 2021, 
                    we commenced distribution to our people in Ikorodu.
                    <br />
                    <br />

                    We distributed over 1,000 love box’s which contains , 
                    Rice , Beans, Garri , Spaghetti , Noodles, Salt, 
                    Vegetable oil  & of course our Season’s greetings card.
                </p>
                <div className=' w-auto max-w-25 h-auto rounded-full bg-[#111111] py-2 px-7 text_1 cursor-pointer mt-5'>
                    <p className='text-white font-semibold'>Explore</p>
                </div>
            </div>

            <div className='w-auto max-w-125 h-auto p-5'>
                {/* <img 
                    src="./check_bp_2.jpg" alt="a doctor checking patient heart bp" 
                    className='rounded-[20px]'
                /> */}
                <picture>
                    <source srcSet="check_bp.webp" type="image/webp" className='rounded-[20px]'/>
                    <img src="check_bp_2.jpg" alt="image" className='rounded-[20px]'/>
                </picture>
            </div>
            {isLast?null:<div className='w-full h-px bg-black bp8:hidden mt-5 opacity-50'/>}
            
        </div>
    )
}

export default EachRecent
