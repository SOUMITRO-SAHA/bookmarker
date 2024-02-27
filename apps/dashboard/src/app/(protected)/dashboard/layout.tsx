import Sidebar from "@/components/SideBar/Sidebar";
import { Metadata } from "next";
const metadata: Metadata = {
  title: "DashboardLayout",
  description: "",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="flex w-screen h-screen">
      <section className="w-[15%]">
        <Sidebar />
      </section>
      <section className="bg-subtle p-10 w-[calc(100%-15%)]">
        {children}
      </section>
    </main>
  );
}
