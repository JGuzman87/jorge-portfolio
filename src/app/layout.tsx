

import { Cabin} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
 
  
 
  return (
    
    <html data-theme="autumn" lang="en">
      
      <body
        className={`${cabin.variable}  antialiased min-h-full`}
      >
        <Nav  />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
