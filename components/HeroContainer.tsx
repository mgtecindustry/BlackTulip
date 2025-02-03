import React from "react";
import { containerVariables } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

function HeroContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full p-4 sm:p-16 text-center">
      {containerVariables.map((container, index) => (
        <Card
          key={index}
          className="border-2 border-orange-200 shadow-lg overflow-hidden hover:border-orange-400 transition-colors duration-300"
        >
          <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[300px]">
            <container.icon className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="scroll-m-20 text-2xl text-orange-400 font-semibold tracking-tight mb-4">
              {container.title}
            </h3>
            <p className="leading-7 text-md">{container.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default HeroContainer;
