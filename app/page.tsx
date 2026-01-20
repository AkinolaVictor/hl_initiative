import { Metadata } from "next";
import Head from "next/head";
import Header from "./components/header";
import Features from "./components/home/features";
import Purpose from "./components/purpose";
import RecentPrograms from "./components/home/recentPrograms";
import VoiceinNumbers from "./components/home/voiceinNumbers";
import LatestBlogs from "./components/latestBlogs";
import Footer from "./components/footer";
import HomeIntro from "./components/home/homeIntro";
import Features2 from "./components/home/features2";
// import Image from "next/image";


export const metadata: Metadata = {
  title: "NGO-The HL Initiative",
  description: "The Health enlight initiative home page",
};

export default function Home() {
  return (
    <div className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto ">
    {/* <div className="flex min-h-screen items-start justify-start"> */}
      {/* <Header />   */}
      <HomeIntro />
      <Features />
      {/* <Features2 /> */}
      <Purpose iconbg="#999999"/>
      <RecentPrograms />
      <VoiceinNumbers />
      <LatestBlogs />
      <Footer />
    </div>
  );
}
