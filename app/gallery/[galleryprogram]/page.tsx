import Footer from '@/app/components/footer'
import GalleryOpenedBody from '@/app/components/gallery/galleryOpenedBody'
import GalleryTop from '@/app/components/gallery/galleryTop'
import { Metadata } from 'next';
import React from 'react'

interface Props {}

export const metadata: Metadata = {
  title: "Gallery-The HL Initiative",
  description: "Our Programmes: Health enlight initiative home page",
};

function Page(props: Props) {
    const {} = props

    return (
        // <div>
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <GalleryTop 
                title='Medical Outreach Erin-Ijesha'
                date='Carried Out On 12th September, 2025'
            />
            <GalleryOpenedBody />
            <Footer />
        </div>
    )
}

export default Page
