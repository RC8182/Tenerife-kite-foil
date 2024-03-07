import Navbar from "@/components/navbar/navbar";

export default function WingfoilLayout({ children }) {
    return <section>
        <Navbar webcam={false}/>
        {children}
        </section>
  }