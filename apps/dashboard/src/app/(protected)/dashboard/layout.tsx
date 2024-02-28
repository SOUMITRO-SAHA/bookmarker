import Sidebar from "@/components/SideBar/Sidebar";
import { Metadata } from "next";
const metadata: Metadata = {
  title: "Dashboard | Bookmarker",
  description: "",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="flex w-screen h-screen">
      {/* Sidebar */}
      <section>
        <Sidebar />
      </section>
      {/* Body */}
      <section className="w-full p-10 bg-subtle">{children}</section>
    </main>
  );
}
