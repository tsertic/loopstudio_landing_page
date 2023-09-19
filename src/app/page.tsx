import { About, Creations, Hero } from "@/components/pageSections/Homepage";

export default function Home() {
  return (
    <main className="">
      <section className="mb-[96px] md:mb-[160px]">
        <Hero />
      </section>
      <section className="mb-[96px] md:mb-[184px]">
        <About />
      </section>
      <section className="mb-[96px] md:mb-[184px]">
        <Creations />
      </section>
    </main>
  );
}
