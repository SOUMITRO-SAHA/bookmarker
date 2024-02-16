import SideMenu from "@/components/SideMenu/SideMenu";

export default async function Page() {
  return (
    <main className="grid grid-cols-12">
      <section className="col-span-2">
        <SideMenu />
      </section>
      <section className="col-span-10 text-white bg-slate-800">Hellow</section>
    </main>
  );
}
