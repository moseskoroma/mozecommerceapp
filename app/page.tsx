import Hero from "./Components/Hero";
import Newest from "./Components/Newest";

export default function Home() {
  return (
    <main className=" bg-white pb-6 sm:pb-8 lg:pb-12">
     <Hero/>
     <Newest/>
    </main>
  );
}
