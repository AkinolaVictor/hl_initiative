import React from 'react'
import AboutIntro from '../components/about/aboutIntro'
import { Metadata } from 'next';
import AboutFoundation from '../components/about/aboutFoundation';
import Purpose from '../components/purpose';
import OurStory from '../components/about/ourStory';
import Testimonial from '../components/about/testimonial';
import LatestBlogs from '../components/latestBlogs';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: "About Us - The HL Initiative",
  description: "Informaation about the Health enlight initiative home page",
};

interface Props {}

function About(props: Props) {
    const {} = props

    return (
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <AboutIntro />
            <AboutFoundation />
            <Purpose bg='black' iconbg="#555555"/>
            <OurStory />
            <Testimonial />
            <LatestBlogs />
            <Footer />
        </div>
    )
}

export default About
