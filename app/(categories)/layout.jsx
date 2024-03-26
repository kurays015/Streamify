import CategoriesSearchBar from "@/components/CategoriesSearchBar";

export default function CategoriesLayout({ children }) {
  return (
    <main className="text-white max-w-7xl mx-auto px-2">
      <CategoriesSearchBar />
      {children}
    </main>
  );
}
