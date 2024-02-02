import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="h-[80vh] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
