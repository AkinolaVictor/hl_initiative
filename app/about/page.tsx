import React from 'react'
import AboutIntro from '../components/about/aboutIntro'
import { Metadata } from 'next';
import AboutFoundation from '../components/about/aboutFoundation';
import Purpose from '../components/purpose';
import OurStory from '../components/about/ourStory';
import Testimonial from '../components/about/testimonial';
import LatestBlogs from '../components/latestBlogs';
import Footer from '../components/footer';
import { testimonal_messgaes } from '@/utils/exports';
import VoiceinNumbers from '../components/home/voiceinNumbers';
// import ConstructionPage from '../components/constructionPage';

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
            <Purpose bg='green' iconbg="#555555"/>
            <OurStory />
            <VoiceinNumbers />
            <Testimonial 
                id='about' 
                dataSet={testimonal_messgaes}
                description='Real stories of transformation from the individuals, schools, 
                and communities whose lives have been changed by our work.'
                // and communities whose lives have been changed by our work.'
            />
            <LatestBlogs />
            <Footer />
        </div>
    )
}

export default About
