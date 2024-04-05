import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import FootBar from "@/components/footer/footerbar";
import GoogleAnalytics from "./googleAnalytics";
import Navbar from "@/components/navbar/navbar";


const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children, params }) {
    const currentLang = params.lang ; // Default to spanish if no language is specified

  return (
    <html lang={currentLang}>
      <meta name="theme-color" content="black" />
      <body className={inter.className} >
      {/* <DataProvider> */}
      <GoogleAnalytics />
      <Navbar idioma={currentLang} menu={true}/>
        {children}
        <Footer idioma={currentLang}/>
        <div className="block md:hidden">
          <FootBar idioma={currentLang}/>
        </div>
      {/* </DataProvider>   */}
      </body>
    </html>
  );
}
