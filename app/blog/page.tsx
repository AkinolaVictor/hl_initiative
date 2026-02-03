import { Metadata } from 'next';
import React from 'react'
import BlogIntro from '../components/blog/BlogIntro';
import BlogBody from '../components/blog/BlogBody';
import Footer from '../components/footer';


export const metadata: Metadata = {
    title: "Blog - The HL Initiative",
    description: "The Health enlight initiative blog page",
};

interface Props {}

function Page(props: Props) {
    const {} = props

    // if(process.env.NEXT_PUBLIC_DEVELOPMENT != "local") return <ConstructionPage />


    return (
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <BlogIntro 
                title='Our Discoveries'
                description={`
                    Explore a curated collection of evidence-based articles, deep-dive research, and community stories. 
                    We translate complex medical data into practical, life-saving advice to keep you and your loved ones 
                    informed and healthy.
                `}
            />
            <BlogBody />
            <Footer />
        </div>
    )
}

export default Page
