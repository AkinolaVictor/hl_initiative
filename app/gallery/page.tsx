import React from 'react'
import GalleryTop from '../components/gallery/galleryTop'
import GalleryContent from '../components/gallery/galleryContent'
import Footer from '../components/footer'
import { Metadata } from 'next';

interface Props {}

export const metadata: Metadata = {
  title: "Gallery-The HL Initiative",
  description: "Our Programmes: Health enlight initiative home page",
};

function Page(props: Props) {
    const {} = props

    return (
        // <div className="flex flex-col min-h-screen h-auto items-start relative justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
        <div className="relative bg-zinc-50 font-sans dark:bg-black ">
            <GalleryTop />
            <GalleryContent />
            <Footer />
        </div>
    )
}

export default Page
