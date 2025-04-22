import React from "react";
import { StatCard } from "@/components/ui/StatCard";

export const VaultHeader: React.FC = () => {
  return (
    <div className="w-full font-normal max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch text-[64px] text-white leading-none justify-center max-md:max-w-full max-md:text-[40px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/bc440b478d58070e4ae215e26ce59cd417db341d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-9 rounded-[28px]"
          alt="MEV Capital"
        />
        <div className="mt-3 max-md:max-w-full max-md:text-[40px]">
          MEV{" "}
          <span className="text-[rgba(121,121,121,1)]">Capital Usual USDC</span>
        </div>
      </div>
      <div className="text-[rgba(206,206,206,1)] text-sm leading-5 mt-3 max-md:max-w-full">
        The MEV Capital Usual USDC provides a set of liquid collateral markets
        with an optimized risk-adjusted return through an active rebalancing
        strategy.
      </div>

      <div className="flex min-h-24 w-full items-center gap-3 flex-wrap mt-6 rounded-3xl max-md:max-w-full">
        <StatCard
          title="Total Deposits (USDC)"
          value={
            <>
              <span className="font-medium text-[rgba(251,253,255,1)]">
                197.45
              </span>
              <span className="font-medium">M</span>
            </>
          }
          icon="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/b0aeedec6c658b74b47cecaa86ccdec5a16a8bdf?placeholderIfAbsent=true"
        />
        <StatCard
          title="Liquidity (USDC)"
          value={
            <>
              <span className="font-medium text-[rgba(251,253,255,1)]">
                197.45
              </span>
              <span className="font-medium">M</span>
            </>
          }
          icon="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/9eafa2550084771d0d96d97f96542a64278ae991?placeholderIfAbsent=true"
        />
        <StatCard
          title="Disclosures"
          value={
            <>
              <span className="font-medium text-[rgba(251,253,255,1)]">
                197.45
              </span>
              <span className="font-medium">M</span>
            </>
          }
          icon="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/7517c99d64c1641ac825fa0e87531d245c9e4df7?placeholderIfAbsent=true"
        />
        <StatCard
          title="APY"
          value={
            <>
              <span className="text-[rgba(251,253,255,1)] font-medium">
                7.07
              </span>
              <span className="text-[rgba(121,121,121,1)]">%</span>
            </>
          }
          icon="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/817d9cae4136aebc4e41b61fdb0664c287188928?placeholderIfAbsent=true"
        />
      </div>
    </div>
  );
};
