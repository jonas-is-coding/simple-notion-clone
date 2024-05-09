"use client"

import TextareaAutoSize from "react-textarea-autosize"
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Cover from "@/components/cover";
import { useState } from "react";

export default function Home() {

  const [ cover, setCover] = useState("") 
  const [ isVisible, makeVisible] = useState(false)

  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), {ssr: false}),
    []
  )

  return (
    <main className="min-h-screen">
      <Cover url={cover} setUrl={setCover} isVisible={isVisible} />
      <div className="w-full flex flex-col px-24 py-10">
        <div className="group flex flex-col gap-2">
          {!isVisible && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-neutral-400 hover:bg-neutral-100 rounded-md px-3 py-2 transition-colors" onClick={() => makeVisible(true)}>
              📷 Add cover
              </button>
            </div>
          )}
        <TextareaAutoSize placeholder="Untitled" className="w-full appearance-none resize-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none" />
     
        </div>
        <Editor onChange={() => {}} />
      </div> 
    </main>
  );
}
