"use client";
import { useState } from "react";

import Link from "next/link";

import useDebounce from "@/hook/useDebounce";

export default function Home() {
  const [inputValue, setInputValue] = useState();
  const debouncedSetInputValue = useDebounce(
    (value) => setInputValue(value),
    2000
  );
  const handleOnChange = (event) => {
    debouncedSetInputValue(event.target.value);
  };

  console.log("----->>>>> input value", inputValue);
  return (
    <main className="flex flex-col">
      <h1>Debouncer with chancel</h1>
      <input
        type="text"
        className="border-2 border-white"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Type something..."
      />
      <Link
        href={"/secondPage"}
        className="text-white"
      >
        Secound Page
      </Link>
    </main>
  );
}
