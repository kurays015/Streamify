import ProvidersButtons from "./ProvidersButtons";

export default function LoginPage() {
  return (
    <div className="px-6 py-12 lg:px-8 z-50 absolute top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-between my-5"></div>
        <ProvidersButtons />
      </div>
    </div>
  );
}
