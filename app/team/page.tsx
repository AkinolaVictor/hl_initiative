import React from 'react'
import Testimonial from '../components/about/testimonial'
import Footer from '../components/footer'
import TeamIntro from '../components/team/TeamIntro'
import TeamBody from '../components/team/TeamBody'
import { Metadata } from 'next'

interface Props {}

export const metadata: Metadata = {
    title: "Team - The HL Initiative",
    description: "Informaation about the Health enlight initiative team",
};

function Page(props: Props) {
    const {} = props

    return (
        // <div className="relative bg-zinc-50 font-sans dark:bg-black w-full h-auto">
        // <div className="w-full h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <TeamIntro />
            <TeamBody />
            {/* <Testimonial 
                // prevAnim
                id='team'
                title='Volunteers'
                baseText='Volunteers'
            /> */}
            <Footer />
        </div>
    )
}

export default Page
