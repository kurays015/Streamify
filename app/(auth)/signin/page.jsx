import { gitHub, google } from "@/actions/providers";

export default function Login() {
  return (
    <div className="text-white">
      <form action={gitHub}>
        <button>Github</button>
      </form>
      <form action={google}>
        <button>google</button>
      </form>
    </div>
  );
}
