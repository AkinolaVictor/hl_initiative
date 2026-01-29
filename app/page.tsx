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
import ConstructionPage from "./components/constructionPage";
// import Image from "next/image";


export const metadata: Metadata = {
  title: "NGO-The HL Initiative",
  description: "The Health enlight initiative home page",
};


export default function Home() {

  // if(process.env.NEXT_PUBLIC_DEVELOPMENT != "local") return <ConstructionPage />

  return (
    <div 
      className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black overflow-y-auto overflow-x-hidden home-parent"
      // className="flex-col min-h-screen h-auto items-start justify-start bg-zinc-50 font-sans dark:bg-black home-parent"
      style={{
        transformOrigin: "0% 0%",
        // willChange: "transform",
        // perspective: "1200px",
      }}
    >
      {/* <Header />   */}
      <HomeIntro />
      <Features />
      <Purpose iconbg="#999999" bg="green"/>
      <RecentPrograms />
      <VoiceinNumbers />
      <LatestBlogs />
      <Footer />
    </div>
  );
}
