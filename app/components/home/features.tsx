import React from 'react'
import CareAbout from './careAbout'
import { cares } from '@/utils/exports'

interface Props {}

function Features(props: Props) {
    const {} = props

    return (
        <div className='w-full h-auto bg-white text-black flex flex-wrap relative'>
        {/* <div className='w-full h-auto bg-white text-black flex flex-wrap sticky top-0'> */}
            <div className='w-full h-screen flex flex-col bp9:flex-row justify-center items-center'>
                <div className='w-full h-auto p-5 bp9:p-15'>
                    <p className='dmd text-[30px] mb-5 text-center'>What we care about</p>
                    <p className='text-[15px] text-justify'>
                        To be a voice to the less privileged by creating opportunities that 
                        supports their voices and ideas. And with positivity and guidance 
                        as core values, strengthen their mental activities towards a more 
                        productive future. 
                    </p>
                </div>

                <div className='w-full h-auto p-5 bp9:p-15'>
                    <img 
                        src="./check_bp.jpg" alt="a doctor checking patient heart bp" 
                        className='rounded-[20px] w-auto h-auto max-h-99 bp9:max-h-full ml-auto mr-auto bp9:ml-0 bp9:mr-0'
                    />
                </div>
            </div>

            {
                cares.map((item, index)=>{
                    const {title, description, icon, background} = item
                    return (
                        <CareAbout 
                            key={index}
                            title={title}
                            description={description}
                            background={background}
                        />
                    )
                })
            }

        </div>
    )
}

export default Features
