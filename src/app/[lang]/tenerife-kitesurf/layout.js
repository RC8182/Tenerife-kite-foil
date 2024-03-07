import Navbar from "@/components/navbar/navbar";

export default function KitesurfLayout({ children }) {
    return <section>
        <Navbar webcam={false}/>
        {children}
        </section>
  }