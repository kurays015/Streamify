import BackToHomeBtn from "@/components/BackToHomeBtn";

export default async function ReadLayout({ children }) {
  return (
    <main className="text-white max-w-7xl mx-auto mt-12">
      <BackToHomeBtn />
      <div>{children}</div>
    </main>
  );
}
