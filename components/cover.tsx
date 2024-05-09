import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";

interface CoverProps {
  url?: string;
  isVisible?: boolean;
  setUrl: (_: string) => void;
}

export default function Cover({ url, setUrl, isVisible }: CoverProps) {
  return (
    <>
      <div
        className={`relative w-full h-[35vh] bg-neutral-100 group ${
          !isVisible ? "hidden" : ""
        }`}
      >
        <Image
          src={url!}
          alt="Page Cover"
          fill
          className="object-cover"
          sizes="100vw"
        />
          <UploadButton
            className="absolute bottom-10 right-10 opacity-0 transition-opacity group-hover:opacity-100 w-fit ut-allowed-content:hidden ut-button:bg-neutral-200 ut-button:hover:bg-neutral-300 ut-button:text-neutral-800 ut-button:transition-colors"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setUrl(res[0].url);
            }}
          />
        </div>
    </>
  );
}
