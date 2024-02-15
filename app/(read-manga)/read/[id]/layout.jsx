import BackToHomeBtn from "@/components/BackToHomeBtn";
import NavBar from "@/components/NavBar";

export default async function ReadLayout({ children }) {
  return (
    <main className="text-white">
      <BackToHomeBtn />
      <div className="max-w-7xl mx-auto mt-12">{children}</div>
    </main>
  );
}
