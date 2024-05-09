"use client"

import TextareaAutoSize from "react-textarea-autosize"
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), {ssr: false}),
    []
  )

  return (
    <main className="min-h-screen">
      <div className="w-full flex flex-col px-24 py-10">
        <TextareaAutoSize placeholder="Untitled" className="w-full appearance-none resize-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none" />
      <Editor onChange={() => {}} />
      </div> 
    </main>
  );
}
