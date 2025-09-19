import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* // add bg image */}
      <div className="bg-[url(/backgroundImg.svg)] h-screen w-full bg-cover bg-center" />

      <Navbar />
    </>
  );
}
