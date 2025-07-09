import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import SidebarNav from "@/app/components/SidebarNav";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:flex md:justify-between">
      <SidebarNav />
      <main className="lg:w-[55%] lg:pt-24 lg:py-24">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
