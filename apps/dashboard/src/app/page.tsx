import { auth } from "@/auth";
import Navbar from "@/components/LandingPage/Navbar/Navbar";

export default async function Main() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      {/* Navbar */}
      <Navbar />
    </main>
  );
}
