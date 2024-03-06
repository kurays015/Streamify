import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import MetaContextProvider from "@/context/MetaContext";
import HolyLoader from "holy-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Streamify",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111827] relative`}
        suppressHydrationWarning
      >
        {/* <MetaContextProvider> */}
        <HolyLoader
          color="#ffe57f"
          height=".2rem"
          speed={250}
          easing="linear"
          showSpinner
        />
        <Header />
        {children}
        {/* </MetaContextProvider> */}
      </body>
    </html>
  );
}
