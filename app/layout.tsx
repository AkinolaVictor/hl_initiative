// "use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Provider } from "react-redux";
import dataStore from "./redux/store";
import OverlayMenu from "./components/overlayMenu";
import OverlayHeader from "./components/overlayHeader";
import AdminModal from "./components/admin/adminModal";
import Workings from "./components/workings";
import CentralBodyOverlay from "./centralBodyOverlay";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Health enLight Initiative",
  description: `OUR VISION: To build a healthier and more informed society by equipping individuals especially young people - with the knowledge and tools to prevent diseases and promote well-being`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Dosis:wght@200..800&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {/* <Provider store={dataStore}>
          <OverlayHeader />
          <AdminModal />
          <Workings /> */}
          <CentralBodyOverlay>
            <div className="classcc">
              {children}
            </div>
          </CentralBodyOverlay>
          {/* <OverlayMenu />
        </Provider> */}
      </body>
    </html>
  );
}
