"use client";

import { cn } from "@/lib/utils";
// import GridPattern from "@/components/magicui/grid-pattern";
import GridPattern from "./ui/grid-pattern";

export function Index() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      <GridPattern
        width={50} // Adjust these values for better grid coverage
        height={50}
        x={0} // Starting point of the grid
        y={0}
        className={cn(
          "absolute inset-0 [mask-image:none] fill-current text-gray-300 dark:text-gray-700"
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Grid Pattern
        </p>
      </div>
    </div>
  );
}
