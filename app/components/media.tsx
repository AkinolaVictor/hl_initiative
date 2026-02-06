import { seek_path_and_ref_2 } from '@/utils/exports'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {x?:string, linkedIn?: string, instagram?: string, className?: string}

function Media(props: Props) {
    const {x, linkedIn, instagram, className} = props
    const either_social = x || linkedIn || instagram
    const no_social = !(x || linkedIn || instagram)
    const path = usePathname()

    return (
        <div className={`flex m-2 cursor-pointer mb-10 ${className}`}>
            {
                x?
                <Link href={x} target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full'>
                    <img src={seek_path_and_ref_2({name: "x.png", path})} alt="image" className='h-auto w-5'/>
                </Link>:
                either_social?
                null:
                <div className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full opacity-0'>
                    <img src={seek_path_and_ref_2({name: "x.png", path})} alt="image" className='h-auto w-5'/>
                </div>
            }


            {
                linkedIn?
                <Link href={linkedIn} target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full'>
                    <img src={seek_path_and_ref_2({name: "ln.png", path})} alt="image" className='h-auto w-4'/>
                </Link>:
                either_social?
                null:
                <div className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full opacity-0'>
                    <img src={seek_path_and_ref_2({name: "x.png", path})} alt="image" className='h-auto w-5'/>
                </div>
            }


            {
                instagram?
                <Link href={instagram} target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full'>
                    <img src={seek_path_and_ref_2({name: "ig.png", path})} alt="image" className='h-auto w-4'/>
                </Link>:
                either_social?
                null:
                <div className='w-8 h-8 flex m-2 justify-center items-center bg-white rounded-full opacity-0'>
                    <img src={seek_path_and_ref_2({name: "x.png", path})} alt="image" className='h-auto w-5'/>
                </div>
            }


        </div>
    )
}

export default Media
