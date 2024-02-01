// import type { Metadata } from "next";
"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Navbar from '../components/Navbar.js'
import { Sidebar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Provider store={store}>   <Navbar/> 
         
<div className="sm:flex flex-none">
                <div className="">
                    <Sidebar />
                </div>
                <div className="sm:flex-1">
                     {children}
                </div>
            </div>
        
         
         </Provider>
      
        </body>
    </html>
  );
}
