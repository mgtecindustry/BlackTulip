import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="grid items-center justify-center p-12">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Terasa Black Tulip <br />{" "}
        <Cover className="inline-block mt-4">
          <span className="relative z-10 mix-blend-overlay hover:[&::after]:w-full">
            Dej
            <span
              className="absolute -bottom-2 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 hover:w-full"
              aria-hidden
            />
          </span>
        </Cover>
      </h1>
    </div>
  );
}
