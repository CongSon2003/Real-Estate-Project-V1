"use client";
import {
  Header,
  Footer,
  Nav,
  ProperticeAreaEnd,
  ProperticeAreaStart,
  Section,
  ProperticeRentStart,
} from "@/components/home";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <ProperticeAreaStart />
        <ProperticeAreaEnd />
        <ProperticeRentStart />
        <Section />
      </main>
      <section>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
      <Footer />
    </div>
  );
}
