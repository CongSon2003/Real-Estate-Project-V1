import { Nav } from "@/components/home";

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      <main>
        {children}
      </main>
    </div>
  );
}
