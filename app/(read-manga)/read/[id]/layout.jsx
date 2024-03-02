export default async function ReadLayout({ children }) {
  return (
    <main className="text-white">
      <div className="max-w-7xl mx-auto mt-12">{children}</div>
    </main>
  );
}
