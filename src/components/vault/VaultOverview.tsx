import React from "react";
import { ChartCard } from "@/components/ui/ChartCard";

export const VaultOverview: React.FC = () => {
  const filterActions = (
    <div className="self-stretch flex min-w-60 gap-3 text-sm font-normal leading-none my-auto">
      <div className="bg-[rgba(51,51,54,1)] flex whitespace-nowrap p-1 rounded-3xl">
        <div className="self-stretch bg-[rgba(74,74,80,1)] gap-2.5 text-white px-[7px] py-[5px] rounded-3xl">
          Deposit
        </div>
        <div className="self-stretch gap-2.5 text-[rgba(121,121,121,1)] px-[7px] py-[5px] rounded-3xl">
          Liquidity
        </div>
      </div>
      <div className="bg-[rgba(51,51,54,1)] flex p-1 rounded-3xl">
        <div className="self-stretch bg-[rgba(74,74,80,1)] gap-2.5 text-white px-[7px] py-[5px] rounded-3xl">
          USDC
        </div>
        <div className="self-stretch gap-2.5 text-[rgba(121,121,121,1)] whitespace-nowrap px-[7px] py-[5px] rounded-3xl">
          USDT
        </div>
      </div>
      <div className="bg-[rgba(51,51,54,1)] self-stretch flex items-center gap-1 text-[rgba(206,206,206,1)] justify-center h-full px-3 py-[5px] rounded-3xl">
        <div className="self-stretch my-auto">3 months</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/4c0aa5994c5c26d7ed47fc57602b557ce969413b?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full mt-6 max-md:max-w-full">
      <ChartCard title="Total Deposits (USD)" actions={filterActions}>
        <div className="w-full text-[11px] text-[rgba(190,190,190,1)] font-medium whitespace-nowrap flex-1 mt-[18px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/0623c260f9a797872569339e2ae036ac8169a088?placeholderIfAbsent=true"
            className="aspect-[4.76] object-contain w-full flex-1 rounded-lg max-md:max-w-full"
          />
          <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-3 max-md:max-w-full">
            {Array(7)
              .fill("02/24")
              .map((date, i) => (
                <div key={i}>{date}</div>
              ))}
          </div>
        </div>
      </ChartCard>
    </div>
  );
};
