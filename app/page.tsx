import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { Team } from "@/components/sections/Team";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Courses />
        <Team />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
