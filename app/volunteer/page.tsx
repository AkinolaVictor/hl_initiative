import React from 'react'
import ConstructionPage from '../components/constructionPage'
import { Metadata } from 'next';
import VolunteerMain from '../components/volunteer/VolunteerMain';
import Footer from '../components/footer';
import FillForm from '../components/fillForm';

interface Props {}

export const metadata: Metadata = {
  title: "Volunteer - The HL Initiative",
  description: "Volunteer page: Join us today",
};

function Page(props: Props) {
    const {} = props
    // if(process.env.NEXT_PUBLIC_DEVELOPMENT != "local") return <ConstructionPage />

    return (
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <VolunteerMain />
            <FillForm 
                title='Send us a message today'
                description='We will receive your message and get back to you.'
            />
            <Footer />
        </div>
    )
}

export default Page
