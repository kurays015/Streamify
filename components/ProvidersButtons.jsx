import { Github, Google } from "./ProvidersForm";

export default function ProvidersButtons() {
  return (
    <div className="text-white flex flex-col gap-3">
      <Google />
      <Github />
    </div>
  );
}
