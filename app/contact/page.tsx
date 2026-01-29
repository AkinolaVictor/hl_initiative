import React from 'react'
// import ConstructionPage from '../components/constructionPage'
import ContactIntro from '../components/contact/contactIntro'
import { Metadata } from 'next';
import FillForm from '../components/fillForm';
import Footer from '../components/footer';

interface Props {}

export const metadata: Metadata = {
  title: "Contact Us - The HL Initiative",
  description: "Contact Page, to reach out to us.",
};

function Page(props: Props) {
    const {} = props
    // if(process.env.NEXT_PUBLIC_DEVELOPMENT != "local") return <ConstructionPage />

    return (
        <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden">
            <ContactIntro />
            <FillForm 
                title='Reach Out To Us Today'
                description='We will receive your message and get back to you.'
            />
            <Footer />
        </div>
    )
}

export default Page
