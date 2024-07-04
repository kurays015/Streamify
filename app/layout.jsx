import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HolyLoader from "holy-loader";
import StoreProvider from "./Providers/StoreProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import PersistGateWrapper from "./Providers/PersistGateWrapper";
import { GlobalWatchAndReadList } from "@/components/watch-and-read-list/GlobalWatchAndReadList";
import siteMetadata from "@/config/site-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // creator: siteMetadata.author,
  // metadataBase: new URL(siteMetadata.siteUrl),
  // title: {
  //   default: siteMetadata.title,
  //   template: "%s | Streamify",
  // },
  // description: siteMetadata.description,
  openGraph: {
    title: "test",
    description: "Test",
    images:
      "https://res.cloudinary.com/dlyerb1wj/image/upload/v1720088134/logregcover_eakzqc.png",
    // images: [
    //   {
    //     url: "https://res.cloudinary.com/dlyerb1wj/image/upload/v1720088134/logregcover_eakzqc.png", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://res.cloudinary.com/dlyerb1wj/image/upload/v1720088134/logregcover_eakzqc.png", // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111827] relative`}
        suppressHydrationWarning
      >
        <HolyLoader
          color="#ffe57f"
          height=".2rem"
          speed={250}
          easing="linear"
          showSpinner
        />
        <StoreProvider>
          <PersistGateWrapper>
            <Header />
            <GlobalWatchAndReadList />
            {children}
            <Toaster />
            <Footer />
          </PersistGateWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
