import BackToHomeBtn from "@/components/BackToHomeBtn";
import SelectProvider from "@/components/SelectProvider";

async function getChapters(id) {
  try {
    const res = await fetch(`${process.env.ANIFY_URL}/chapters/${id}`);
    if (!res.ok) {
      throw new Error("Error fetching chapters.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function ReadLayout({ children, params }) {
  const providers = await getChapters(params.id);
  return (
    <main className="text-white max-w-7xl mx-auto mt-12">
      <BackToHomeBtn />
      <div className="flex gap-12">
        <SelectProvider providers={providers} />
        <div>{children}</div>
      </div>
    </main>
  );
}
