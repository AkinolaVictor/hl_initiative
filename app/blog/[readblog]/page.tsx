import BlogContent from '@/app/components/blog/BlogContent';
import BlogIntro from '@/app/components/blog/BlogIntro';
import Footer from '@/app/components/footer';
import { Metadata } from 'next';
import React from 'react'
import BlogNavigator from './BlogNavigator';

export const metadata: Metadata = {
    title: "Blog - The HL Initiative",
    description: "Read a blog on the Health enlight initiative blog page",
};

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">   
            <BlogNavigator />
            <Footer />
        </div>
    )
}

export default Page

