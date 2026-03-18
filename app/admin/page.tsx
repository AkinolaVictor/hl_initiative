import React from 'react'
import AdminHeader from '../components/admin/adminHeader'
import { Metadata } from 'next';
import AdminAuth from '../components/admin/AdminAuth';
import AdminWrapper from '../components/admin/adminWrapper';
import Footer from '../components/footer';
import Header from '../components/header';


export const metadata: Metadata = {
  title: "NGO-Admin",
  description: "The Health enlight initiative Admin page",
};

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div
            className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden home-parent"
        >
            <div className='absolute z-2 top-0 left-0 w-full'>
                <Header dark/>
            </div>
            <AdminWrapper />
            <Footer />
        </div>
    )
}

export default Page
