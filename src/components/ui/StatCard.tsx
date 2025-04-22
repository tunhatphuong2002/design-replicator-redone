
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | React.ReactNode;
  icon?: string;
  className?: string;
  background?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  className,
  background,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col relative aspect-[2.323] font-normal justify-between flex-1 shrink basis-[0%] my-auto p-[18px] rounded-[12px] border border-[rgba(45,45,45,1)] bg-[rgba(15,15,16,1)] min-w-[120px]",
        className,
      )}
    >
      {background && (
        <img
          src={background}
          className="absolute h-full w-full object-cover inset-0 rounded-[12px]"
          alt=""
        />
      )}
      <div className="relative flex-1 shrink basis-[0%]">
        <div className="text-[rgba(251,253,255,1)] text-xl font-medium">{value}</div>
        <div className="text-[rgba(121,121,121,1)] text-sm mt-2">{title}</div>
      </div>
      {icon && (
        <img
          src={icon}
          className="aspect-[1] object-contain w-5 shrink-0 absolute top-3 right-3"
          alt=""
        />
      )}
    </div>
  );
};
