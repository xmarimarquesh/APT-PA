//import dos modulos
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

//imports internos
import "./globals.css";
import { Menu } from "@/components/menu"; 
import { Footer } from "@/components/footer"; 

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased flex flex-col justify-center align-center w-full`}
      >
        <Menu page1="Pagina 1" page2="Pagina 2" page3={true} page4={4}/>
        {children}
        <Footer email="marimarques@gmail.com" data="28.05.2006"/>
      </body>
    </html>
  );
}
