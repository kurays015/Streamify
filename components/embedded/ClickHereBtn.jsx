"use client";
export default function ClickHereBtn({ info, id }) {
  return (
    <span
      onClick={() => {
        localStorage.setItem("infos", JSON.stringify(info));
        localStorage.setItem("id", id);
      }}
    >
      here
    </span>
  );
}
