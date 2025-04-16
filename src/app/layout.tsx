

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
    
    <html data-theme="fantasy" lang="en">
      
      <body
        className={`${cabin.variable}  antialiased`}
      >
        <Nav  />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
