import Navbar from "@/components/navbar/navbar";

export default function DynamicSportLayout({ children }) {
    return <section>
        {/* <Navbar webcam={false}/> */}
        {children}
        </section>
  }