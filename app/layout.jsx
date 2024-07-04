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
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: "%s | Streamify",
  },
  creator: siteMetadata.author,
  author: siteMetadata.author,
  description: siteMetadata.author,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/login-cover.png"],
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
