
import { cn } from "@/lib/utils";
// import GridPattern from "@/components/magicui/grid-pattern";
import GridPattern from "./ui/grid-pattern";
import HyperText from "./ui/hyper-text";

export function Index() {
  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden bg-background">
        <div className="absolute top-5 right-[29%]">
          <p className="text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            <HyperText
              className="text-5xl font-mono font-bold text-black dark:text-white text-center"
              text="FIVE DIMENSIONS OF IDENTITY IN 1-CLICK"
            />
          </p>
        </div>
        <GridPattern
          width={50}
          height={50}
          x={0}
          y={0}
          className={cn(
            "absolute [mask-image:none] fill-current text-gray-300 dark:text-gray-700"
          )}
        />
      </div>
      
    </div>
  );
}
