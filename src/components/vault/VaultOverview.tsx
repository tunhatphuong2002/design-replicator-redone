
import React, { useState } from "react";
import {
  depositsData,
  apyData,
  apyBreakdown,
  marketData
} from "@/data/mockData";
import { SimpleAreaChart } from "@/components/charts/SimpleAreaChart";
import { ChartFilters } from "@/components/ui/chart-filters";
import { APYBreakdownList } from "@/components/ui/apy-breakdown-list";
import { ChartCard } from "@/components/ui/chart-card";
import { 
  SortableTable, 
  type ColumnDef
} from "@/components/ui/sortable-table";
import { AllocationChart } from "@/components/charts/AllocationChart";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Market table indicator component
const MarketIndicator = ({ active }: { active?: boolean }) => (
  <span
    className={cn(
      "mr-3 inline-flex w-8 h-8 rounded-full border-[3.5px] border-gray-600 transition bg-gradient-to-br",
      active
        ? "border-primary bg-primary/10"
        : "bg-gray-700/20"
    )}
  />
);

// Main component
export const VaultOverview: React.FC = () => {
  // Chart filter states
  const [depositChartType, setDepositChartType] = useState<"deposit" | "liquidity">("deposit");
  const [depositCurrency, setDepositCurrency] = useState<"usdc" | "usdt">("usdc");
  const [depositTimePeriod, setDepositTimePeriod] = useState("3 months");
  
  const [apyTimePeriod, setApyTimePeriod] = useState("3 months");
  
  // Define table columns
  const columns: ColumnDef<typeof marketData[0]>[] = [
    {
      header: "Market Allocation",
      accessorKey: "market",
      cell: ({ row }) => (
        <div className="flex items-center">
          <MarketIndicator active={row.id % 2 === 0} />
          <span className="font-medium text-gray-100">{row.market}</span>
          <span className="bg-gray-800 text-xs px-2 py-0.5 ml-2 rounded-lg font-semibold text-gray-400">
            {row.alloc}%
          </span>
        </div>
      ),
    },
    {
      header: "Allocation %",
      accessorKey: "allocPct",
      enableSorting: true,
      cell: ({ row }) => (
        <AllocationChart percentage={row.allocPct} />
      ),
    },
    {
      header: "Total Supply",
      accessorKey: "supply",
      enableSorting: true,
      cell: ({ row }) => (
        <span className="text-right text-gray-200 font-normal">${row.supply.toFixed(2)}M</span>
      ),
    },
    {
      header: "Cap",
      accessorKey: "cap",
      enableSorting: true,
      cell: ({ row }) => (
        <span className="text-right text-gray-200 font-normal">${row.cap.toFixed(2)}M</span>
      ),
    },
    {
      header: "Supply APY",
      accessorKey: "apy",
      enableSorting: true,
      cell: ({ row }) => (
        <div className="text-right text-[#A2DAFF] font-semibold flex items-center justify-end">
          {row.apy.toFixed(2)}%
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Deposits Chart Card */}
      <ChartCard
        title="Total Deposits (USD)"
        value="197.45"
        valueSuffix="M"
        filters={
          <ChartFilters 
            chartType={depositChartType}
            setChartType={setDepositChartType}
            currency={depositCurrency}
            setCurrency={setDepositCurrency}
            timePeriod={depositTimePeriod}
            setTimePeriod={setDepositTimePeriod}
          />
        }
      >
        <SimpleAreaChart 
          data={depositsData} 
          tooltipFormatter={(value) => [`$${value}M`, "Deposits"]} 
        />
      </ChartCard>

      {/* APY Card + APY Breakdown */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-2/3">
          <ChartCard
            title="APY"
            value="7.77"
            valueSuffix="%"
            filters={
              <ChartFilters 
                chartType={depositChartType}
                setChartType={setDepositChartType}
                currency={depositCurrency}
                setCurrency={setDepositCurrency}
                timePeriod={apyTimePeriod}
                setTimePeriod={setApyTimePeriod}
                timeOptions={["1 month", "3 months", "6 months", "1 year"]}
              />
            }
          >
            <SimpleAreaChart 
              data={apyData} 
              tooltipFormatter={(value) => [`${value}%`, "APY"]} 
            />
          </ChartCard>
        </div>
        <div className="w-full md:w-1/3 flex items-start">
          <APYBreakdownList items={apyBreakdown} />
        </div>
      </div>

      {/* Market Allocation Table */}
      <SortableTable 
        data={marketData} 
        columns={columns} 
        pageSize={8} 
      />
    </div>
  );
};
