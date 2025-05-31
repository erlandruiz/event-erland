"use client";
import { Skeleton } from "./ui/skeleton";

const SkelentonGrid = ({itemCount}) => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-[30px] mb-32">
      {Array.from({ length: itemCount }).map((_, index) => {
        return (
          <div className=" flex flex-col space-y-3" key={index}>
            <Skeleton className="h-[225px] rounded-xl bg-black" />
            <div className="space-y-2">
              <Skeleton className="h-4  bg-black" />
              <Skeleton className="h-4 w-[200px] bg-black" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkelentonGrid;
