import type { Metadata } from "next";
import { Geist, Geist_Mono,Unbounded,  } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unboundedSemiBold = Unbounded({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Киберия",
  description: "Сайт от студента",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={unboundedSemiBold.className}>
      <body>
       <Header/> 
             {children}
      <Footer/>
      </body>
    </html>
  );
}
