import React from 'react'
import AboutIntro from '../components/about/aboutIntro'
import { Metadata } from 'next';
import AboutFoundation from '../components/about/aboutFoundation';
import Purpose from '../components/purpose';
import OurStory from '../components/about/ourStory';
import Testimonial from '../components/about/testimonial';
import LatestBlogs from '../components/latestBlogs';
import Footer from '../components/footer';
import ConstructionPage from '../components/constructionPage';

export const metadata: Metadata = {
  title: "About Us - The HL Initiative",
  description: "Information about the Health enlight initiative",
};

interface Props {}

function About(props: Props) {
    const {} = props

    // if(process.env.NEXT_PUBLIC_DEVELOPMENT != "local") return <ConstructionPage />

    return (
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <AboutIntro />
            <AboutFoundation />
            <Purpose bg='black' iconbg="#555555"/>
            <OurStory />
            <Testimonial id='about'/>
            <LatestBlogs />
            <Footer />
        </div>
    )
}

export default About
