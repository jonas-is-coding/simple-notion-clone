"use client"

import "@blocknote/core/fonts/inter.css"
import "@blocknote/react/style.css"
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote, BlockNoteView} from "@blocknote/react"
import { uploadFiles } from "@/utils/uploadthing";

interface EditorProps {
    onChange: () => void;
    initialContent?: string;
    editable?: boolean;
}

export default function Editor({
    onChange,
    initialContent,
    editable
} : EditorProps) {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent 
        ? (JSON.parse(initialContent) as PartialBlock[]) 
        : undefined,
        uploadFile: async (file: File) => {
            const [res] = await uploadFiles("imageUploader", {files: [file]});
            return res.url
        }
    })
    return (
        <div className="-mx-[54px] my-4">
            <BlockNoteView editor={editor} editable={editable} theme="light" onChange={onChange} />
        </div>
    )
}