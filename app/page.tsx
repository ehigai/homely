import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Add fixed bg image behind content */}
      <div
        className="fixed inset-0 -z-10 bg-[url(/backgroundImg.svg)] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      <div className="bg-transparent pt-24 relative z-0">
        <Navbar />

        <main>
          <HeroSection />
        </main>
        <footer>Footer</footer>
      </div>
    </>
  );
}
