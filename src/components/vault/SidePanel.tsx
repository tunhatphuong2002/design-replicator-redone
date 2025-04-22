import React from "react";
import { useForm } from "react-hook-form";

interface DepositFormData {
  amount: string;
}

export const SidePanel: React.FC = () => {
  const { register, handleSubmit } = useForm<DepositFormData>();

  const onSubmit = (data: DepositFormData) => {
    console.log("Deposit:", data);
  };

  return (
    <div className="w-full max-md:mt-8">
      <div className="w-full">
        <div className="bg-[rgba(30,30,30,1)] border flex w-full gap-[40px_46px] justify-between p-[18px] rounded-[18px] border-[rgba(73,73,76,1)] border-solid">
          <div className="flex flex-col">
            <div className="w-full max-w-[177px]">
              <div className="text-[rgba(190,190,190,1)] text-xs font-normal">
                My position (USDC)
              </div>
              <div className="flex w-full items-center gap-[7px] text-base font-medium whitespace-nowrap">
                <div className="text-[rgba(190,190,190,1)]">0.00</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/22829359f712a39382265788d9134519044de7a3?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6"
                  alt=""
                />
                <div className="text-white">5,000,000.00</div>
              </div>
            </div>

            <div className="w-14 mt-3">
              <div className="text-[rgba(190,190,190,1)] text-xs font-normal">
                Earn APY
              </div>
              <div className="text-white text-base font-medium">15.00%</div>
            </div>

            <div className="self-stretch mt-3">
              <div className="text-[rgba(190,190,190,1)] text-xs font-normal">
                Projected Earnings/Month (USDC)
              </div>
              <div className="text-white text-base font-medium">15.00%</div>
            </div>

            <div className="mt-3">
              <div className="text-[rgba(190,190,190,1)] text-xs font-normal">
                Projected Earnings/Year (USDC)
              </div>
              <div className="text-white text-base font-medium">15.00%</div>
            </div>

            <div className="w-full max-w-[177px] mt-3">
              <div className="text-[rgba(190,190,190,1)] text-xs font-normal">
                Wallet Balance (USDC)
              </div>
              <div className="flex w-full items-center gap-[7px] text-base font-medium whitespace-nowrap">
                <div className="text-[rgba(190,190,190,1)]">0.00</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/22829359f712a39382265788d9134519044de7a3?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6"
                  alt=""
                />
                <div className="text-white">5,000,000.00</div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/733c0be9b70e79acc08a8c1860e685703dbac0da?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[rgba(22,22,22,1)] border flex w-full gap-[40px_82px] font-medium justify-between mt-3 p-[18px] rounded-[18px] border-[rgba(62,115,196,1)] border-solid">
            <div className="w-[156px]">
              <div className="text-[rgba(190,190,190,1)] text-xs font-normal">
                Deposit (USDC)
              </div>
              <input
                type="text"
                {...register("amount")}
                className="bg-transparent text-white text-2xl w-full focus:outline-none"
                placeholder="0.00"
              />
              <div className="text-[rgba(121,121,121,1)] text-[13px]">$0</div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a49eb3d9dab54612b6a60c9b4c26d13d/73f066aca46e89713076c173e07baf1d83bbb2e8?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt=""
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[rgba(92,149,255,1)] text-[15px] text-[rgba(30,30,30,1)] font-medium mt-[18px] px-2.5 py-[13px] rounded-xl"
          >
            Finalize
          </button>
        </form>
      </div>
    </div>
  );
};
