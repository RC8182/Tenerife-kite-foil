import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import FootBar from "@/components/footer/footerbar";
import GoogleAnalytics from "./googleAnalytics";

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children, params }) {
    const currentLang = params.lang ; // Default to spanish if no language is specified

  return (
    <html lang={currentLang}>
      <meta name="theme-color" content="black" />
      <body className={inter.className} >
      <GoogleAnalytics />
        {children}
        <Footer idioma={currentLang}/>
        <div className="block md:hidden">
          <FootBar idioma={currentLang}/>
        </div>

      </body>
    </html>
  );
}
