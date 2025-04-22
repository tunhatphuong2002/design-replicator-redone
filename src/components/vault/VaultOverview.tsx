
import React from "react";
import { ChartCard } from "@/components/ui/ChartCard";

export const VaultOverview: React.FC = () => {
  const filterActions = (
    <div className="self-stretch flex min-w-60 gap-3 text-sm font-normal leading-none my-auto">
      <div className="bg-[rgba(30,30,30,1)] flex whitespace-nowrap p-1 rounded-3xl">
        <div className="self-stretch bg-[rgba(15,15,16,1)] gap-2.5 text-white px-[7px] py-[5px] rounded-3xl">
          Deposit
        </div>
        <div className="self-stretch gap-2.5 text-[rgba(121,121,121,1)] px-[7px] py-[5px] rounded-3xl">
          Liquidity
        </div>
      </div>
      <div className="bg-[rgba(30,30,30,1)] flex p-1 rounded-3xl">
        <div className="self-stretch bg-[rgba(15,15,16,1)] gap-2.5 text-white px-[7px] py-[5px] rounded-3xl">
          USDC
        </div>
        <div className="self-stretch gap-2.5 text-[rgba(121,121,121,1)] whitespace-nowrap px-[7px] py-[5px] rounded-3xl">
          USDT
        </div>
      </div>
      <div className="bg-[rgba(30,30,30,1)] self-stretch flex items-center gap-1 text-[rgba(206,206,206,1)] justify-center h-full px-3 py-[5px] rounded-3xl">
        <div className="self-stretch my-auto">3 months</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="aspect-[1] w-3.5 self-stretch shrink-0 my-auto">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="w-full mt-6 max-md:max-w-full">
      <ChartCard title="Total Deposits (USD)" actions={filterActions}>
        <div className="w-full text-[11px] text-[rgba(121,121,121,1)] font-medium whitespace-nowrap flex-1 mt-[18px] max-md:max-w-full">
          {/* Line chart with blue line */}
          <div className="h-48 w-full bg-[rgba(15,15,16,1)] rounded-lg flex flex-col justify-end overflow-hidden relative">
            <div className="absolute inset-0 grid grid-cols-7 grid-rows-6">
              {Array(42).fill(0).map((_, i) => (
                <div key={i} className="border-t border-l border-[rgba(35,35,35,0.5)]"></div>
              ))}
            </div>
            <svg viewBox="0 0 100 40" className="h-full w-full z-10">
              <path
                d="M0,35 C1,32 3,30 6,31 C9,32 10,28 14,26 C18,24 20,28 24,27 C28,26 30,20 35,19 C40,18 45,22 50,20 C55,18 58,15 62,16 C66,17 70,14 75,12 C80,10 85,15 90,13 C95,11 98,8 100,5"
                fill="none"
                stroke="rgba(92,149,255,1)"
                strokeWidth="1.5"
              />
              <path
                d="M0,35 C1,32 3,30 6,31 C9,32 10,28 14,26 C18,24 20,28 24,27 C28,26 30,20 35,19 C40,18 45,22 50,20 C55,18 58,15 62,16 C66,17 70,14 75,12 C80,10 85,15 90,13 C95,11 98,8 100,5 V40 H0 Z"
                fill="rgba(92,149,255,0.1)"
              />
            </svg>
          </div>
          <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-3 max-md:max-w-full">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="text-[rgba(121,121,121,1)]">
                  {i === 0 ? "01/24" : i === 6 ? "02/24" : ""}
                </div>
              ))}
          </div>
        </div>
      </ChartCard>
    </div>
  );
};
