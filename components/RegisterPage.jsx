import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="h-[80vh] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-50 relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Register to watch exciting movies, anime and more!
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
