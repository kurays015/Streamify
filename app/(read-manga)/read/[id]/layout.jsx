import BackToHomeBtn from "@/components/BackToHomeBtn";
import Chapters from "@/components/Chapters";

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
  const comick = providers.find(provider => provider.providerId === "comick");
  console.log(comick);

  return (
    <main className="text-white max-w-7xl mx-auto mt-12">
      <BackToHomeBtn />
      <div className="flex justify-evenly">
        <Chapters chapters={comick.chapters} />
        <div>{children}</div>
      </div>
    </main>
  );
}
