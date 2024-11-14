import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HolyLoader from "holy-loader";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GlobalWatchAndReadList } from "@/components/watch-list/GlobalWatchAndReadList";
import siteMetadata from "@/config/site-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  creator: siteMetadata.author,
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: "%s | Streamify",
  },
  description: siteMetadata.description,
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

        <Header />
        <GlobalWatchAndReadList />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
