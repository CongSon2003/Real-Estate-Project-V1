import ProperticeStart from "@/components/home/propertice/area/ProperticeStart";
import { Header, Footer, Nav, ProperticeEnd, Section } from "../components/home";
export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <ProperticeStart />

        <ProperticeEnd />
        <Section/>
      </main>
      <Footer />
    </div>
  );
}
