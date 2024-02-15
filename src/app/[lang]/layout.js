import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  en: {
    title: 'Tenerife Kite Foil - Your Destination for Kitesurfing and Wing Foiling',
    description: 'Explore kitesurfing and wing foiling courses in Tenerife. Find top-quality kitesurfing and wing foil equipment, including kites, boards, accessories, and more. Discover our outlet for discounted items, used gear, and rental options.',
    keywords: 'Kitesurfing Tenerife, Kitesurf Courses Tenerife, Wing Foil Tenerife, Wing Foil Courses Tenerife, Kitesurf and Wing Foil Gear Tenerife, Kites, Boards, Accessories Tenerife, Outlet Tenerife, Used Gear Tenerife, Rental Equipment Tenerife',
  },
  es: {
    title: 'Tenerife Kite Foil - Tu destino para Kitesurf y Wing Foil',
    description: 'Explora cursos de kitesurf y wing foil en Tenerife. Encuentra equipos de kitesurf y wing foil de alta calidad, incluyendo cometas, tablas, accesorios y más. Descubre nuestro outlet con artículos con descuento, equipo usado y opciones de alquiler.',
    keywords: 'Kitesurf en Tenerife, Cursos de Kitesurf en Tenerife, Wing Foil en Tenerife, Cursos de Wing Foil en Tenerife, Material de Kitesurf y Wing Foil en Tenerife, Cometas, Tablas, Accesorios en Tenerife, Outlet en Tenerife, Material Usado en Tenerife, Alquiler de Material en Tenerife',
  },
};


export default function RootLayout({ children, params }) {
    const currentLang = params.lang || 'es'; // Default to spanish if no language is specified
  const currentMetadata = metadata[currentLang];
  return (
    <html lang={currentLang}>
            <title>{currentMetadata?.title}</title>
      <meta name="description" content={currentMetadata?.description} />
      <meta name="keywords" content={currentMetadata?.keywords} />
      <meta name="theme-color" content="black" />
      <body className={inter.className}>
        {children}
        <Footer idioma={currentLang}/>
      </body>
    </html>
  );
}
