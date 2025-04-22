
import React from "react";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  children,
  className,
  actions,
}) => {
  return (
    <div
      className={cn(
        "bg-[rgba(22,22,22,1)] border min-h-80 w-full p-[18px] rounded-[12px] border-[rgba(45,45,45,1)] border-solid",
        className,
      )}
    >
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap">
        <div className="self-stretch">
          <div className="text-[rgba(121,121,121,1)] text-sm font-medium leading-none">
            {title}
          </div>
        </div>
        {actions && (
          <div className="self-stretch flex items-center gap-3">{actions}</div>
        )}
      </div>
      <div className="mt-[18px]">{children}</div>
    </div>
  );
};
