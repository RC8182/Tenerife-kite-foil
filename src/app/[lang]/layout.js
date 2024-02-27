import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children, params }) {
    const currentLang = params.lang ; // Default to spanish if no language is specified

  return (
    <html lang={currentLang}>
      <meta name="theme-color" content="black" />
      <body className={inter.className}>
        {children}
        <Footer idioma={currentLang}/>
      </body>
    </html>
  );
}
