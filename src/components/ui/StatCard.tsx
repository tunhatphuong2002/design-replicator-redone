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
  background = "https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/5930e632f397fc79fd9227956c297ded4ade51e0?placeholderIfAbsent=true",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col self-stretch relative aspect-[2.323] font-normal justify-between flex-1 shrink basis-[0%] my-auto p-[18px] rounded-[18px]",
        className,
      )}
    >
      <img
        src={background}
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      />
      <div className="relative flex-1 shrink basis-[0%]">
        <div className="text-[rgba(121,121,121,1)] text-2xl">{value}</div>
        <div className="text-[rgba(190,190,190,1)] text-base mt-3">{title}</div>
      </div>
      {icon && (
        <img
          src={icon}
          className="aspect-[1] object-contain w-6 shrink-0"
          alt=""
        />
      )}
    </div>
  );
};
