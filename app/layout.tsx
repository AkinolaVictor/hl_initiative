import type { Metadata } from "next";
import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import Header from "./components/header";
// import { Provider } from "react-redux";
// import dataStore from "./redux/store";
// import OverlayMenu from "./components/overlayMenu";
// import OverlayHeader from "./components/overlayHeader";
// import AdminModal from "./components/admin/adminModal";
// import Workings from "./components/workings";
import CentralBodyOverlay from "./centralBodyOverlay";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// const description = `OUR VISION: To build a healthier and more informed society by equipping individuals especially young people - with the knowledge and tools to prevent diseases and promote well-being`,
// const url = `https://www.thehealthenlightinitiative.org`
// const title = "Health enLight Initiative"
// const title = "Health enLight Initiative"

export const metadata: Metadata = {
  title: "Health enLight Initiative",
  description: `OUR VISION: To build a healthier and more informed society by equipping individuals especially young people - with the knowledge and tools to prevent diseases and promote well-being`,
  
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Health enLight Initiative",
    description: `OUR VISION: To build a healthier and more informed society by equipping individuals especially young people - with the knowledge and tools to prevent diseases and promote well-being`,
    url: `https://www.thehealthenlightinitiative.org`,
    siteName: "Health enLight Initiative",
    images: ["/favicon.ico"],
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Health enLight Initiative",
    description: `OUR VISION: To build a healthier and more informed society by equipping individuals especially young people - with the knowledge and tools to prevent diseases and promote well-being`,
    images: ["/favicon.ico"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "NonprofitOrganization"],
            name: "Health enLight Initiative",
            "url": "https://thehealthenlightinitiative.org",
            "logo": "https://thehealthenlightinitiative.org/favicon.ico",
            image: "https://thehealthenlightinitiative.org/favicon.ico",
            description: `OUR VISION: To build a healthier and more informed society by equipping individuals especially young people - with the knowledge and tools to prevent diseases and promote well-being`,
            address: {
              "@type": "PostalAddress",
              addressCountry: "NG",
            },
            "sameAs": [
              "https://www.instagram.com/thehlinitiative/",
              "https://www.linkedin.com/company/the-health-enlight-initiative/posts/?feedView=all"
            ]
          }),
        }}
      />
    </html>
  );
}
