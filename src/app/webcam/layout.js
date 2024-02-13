import Navbar from "@/components/navbar/navbar";

export default function WecamLayout({ children }) {
    return <section>
        <Navbar webcam={false}/>
        {children}
        </section>
  }