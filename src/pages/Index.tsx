
import React from "react";
import { VaultHeader } from "@/components/vault/VaultHeader";
import { VaultOverview } from "@/components/vault/VaultOverview";
import { VaultPerformance } from "@/components/vault/VaultPerformance";
import { VaultRisk } from "@/components/vault/VaultRisk";
import { VaultDisclosures } from "@/components/vault/VaultDisclosures";
import { VaultAllocation } from "@/components/vault/VaultAllocation";
import { VaultDepositors } from "@/components/vault/VaultDepositors";
import { SidePanel } from "@/components/vault/SidePanel";

export default function Index() {
  return (
    <div className="bg-[rgba(15,15,16,1)] flex flex-col overflow-hidden items-center pt-[80px] pb-[100px] px-[40px] max-md:px-4 max-md:py-[60px]">
      <div className="w-full max-w-[1200px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <main className="w-[76%] max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-8">
              <VaultHeader />

              {/* Overview Section */}
              <section className="w-full mt-[40px] max-md:max-w-full max-md:mt-8">
                <h2 className="text-[rgba(121,121,121,1)] text-base font-medium leading-none max-md:max-w-full">
                  Overview
                </h2>
                <VaultOverview />
              </section>

              {/* Performance Section */}
              <section className="w-full mt-[40px] max-md:max-w-full max-md:mt-8">
                <h2 className="text-[rgba(121,121,121,1)] text-base font-medium leading-none max-md:max-w-full">
                  Performance
                </h2>
                <VaultPerformance />
              </section>

              {/* Risk Section */}
              <section className="w-full mt-[40px] max-md:max-w-full max-md:mt-8">
                <h2 className="text-[rgba(121,121,121,1)] text-base font-medium leading-none max-md:max-w-full">
                  Risk
                </h2>
                <VaultRisk />
              </section>

              {/* Disclosures Section */}
              <section className="w-full mt-[40px] max-md:max-w-full max-md:mt-8">
                <h2 className="text-[rgba(121,121,121,1)] text-base font-medium leading-none max-md:max-w-full">
                  Disclosures
                </h2>
                <VaultDisclosures />
              </section>

              {/* Allocation History Section */}
              <section className="w-full mt-[40px] max-md:max-w-full max-md:mt-8">
                <h2 className="text-[rgba(121,121,121,1)] text-base font-medium leading-none max-md:max-w-full">
                  Allocation History
                </h2>
                <VaultAllocation />
              </section>

              {/* Depositors Section */}
              <section className="w-full mt-[40px] max-md:max-w-full max-md:mt-8">
                <h2 className="text-[rgba(121,121,121,1)] text-base font-medium leading-none max-md:max-w-full">
                  Depositors
                </h2>
                <VaultDepositors />
              </section>
            </div>
          </main>

          <aside className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <SidePanel />
          </aside>
        </div>
      </div>
    </div>
  );
}
