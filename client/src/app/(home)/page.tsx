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
      <Footer />
    </div>
  );
}
