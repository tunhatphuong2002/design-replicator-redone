import React from "react";
import { StatCard } from "@/components/ui/StatCard";

export const VaultPerformance: React.FC = () => {
  return (
    <div className="w-full mt-6 max-md:max-w-full">
      <div className="flex w-full items-center gap-[18px] flex-wrap max-md:max-w-full">
        <StatCard
          title="7D APY"
          value={
            <>
              6,88<span className="text-[rgba(101,101,101,1)]">%</span>
            </>
          }
          background="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/2fb9c5547b41dc0a22179981179f3f42c9d6af8f?placeholderIfAbsent=true"
        />
        <StatCard
          title="30D APY"
          value={
            <>
              6,88<span className="text-[rgba(101,101,101,1)]">%</span>
            </>
          }
          background="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/2fb9c5547b41dc0a22179981179f3f42c9d6af8f?placeholderIfAbsent=true"
        />
        <StatCard
          title="90D APY"
          value={
            <>
              6,88<span className="text-[rgba(101,101,101,1)]">%</span>
            </>
          }
          background="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/2fb9c5547b41dc0a22179981179f3f42c9d6af8f?placeholderIfAbsent=true"
        />
      </div>
      <div className="flex w-full items-stretch gap-[18px] flex-wrap mt-[18px] max-md:max-w-full">
        <StatCard
          title="Performance Fee"
          value={
            <>
              10,00<span className="text-[rgba(101,101,101,1)]">%</span>
            </>
          }
          background="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/2fb9c5547b41dc0a22179981179f3f42c9d6af8f?placeholderIfAbsent=true"
        />
        <StatCard
          title="30D APY"
          value={<>0xD4C8...2446</>}
          background="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/2fb9c5547b41dc0a22179981179f3f42c9d6af8f?placeholderIfAbsent=true"
          icon="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/a1d5f302ec415005aa4bd6d997e011960019c604?placeholderIfAbsent=true"
        />
      </div>
    </div>
  );
};
