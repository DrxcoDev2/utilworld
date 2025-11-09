import Image from "next/image";
import { BackgroundLinesDemo } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="mt-10">
        <BackgroundLinesDemo />
      </div>
      
    </div>
  );
}
