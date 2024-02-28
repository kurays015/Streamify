import AuthCover from "@/components/AuthCover";

export default function layout({ children }) {
  return (
    <main className="h-screen">
      <AuthCover />
      {children}
    </main>
  );
}
