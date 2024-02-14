"use client";
import { useState } from "react";
import ReusableSelect from "./ReusableSelect";
import Chapters from "./Chapters";

export default function SelectProvider({ providers }) {
  const [chapters, setChapters] = useState([]);
  const [provider, setProvider] = useState(null);
  return (
    <div className="">
      <ReusableSelect
        infoData={providers}
        setChapters={setChapters}
        setProvider={setProvider}
      />
      <Chapters chapters={chapters} provider={provider} />
    </div>
  );
}
