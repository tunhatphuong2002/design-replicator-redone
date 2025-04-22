
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Area,
  ReferenceLine,
} from "recharts";
import { cn } from "@/lib/utils";

// DATA MOCKS (should be replaced with real query/data)
const depositsData = [
  { date: "02/01", value: 140 },
  { date: "02/04", value: 131 },
  { date: "02/07", value: 125 },
  { date: "02/10", value: 128 },
  { date: "02/13", value: 120 },
  { date: "02/16", value: 136 },
  { date: "02/19", value: 160 },
  { date: "02/22", value: 173 },
  { date: "02/24", value: 197 },
];
const apyData = [
  { date: "02/01", value: 4.2 },
  { date: "02/04", value: 4.0 },
  { date: "02/07", value: 4.2 },
  { date: "02/10", value: 5.1 },
  { date: "02/13", value: 4.8 },
  { date: "02/16", value: 4.6 },
  { date: "02/19", value: 4.3 },
  { date: "02/22", value: 7.2 },
  { date: "02/24", value: 7.77 },
];
const apyBreakdown = Array(5).fill({ label: "Native APY", value: "6.63%" });
const marketRows = Array(8).fill({
  market: "csUSDL/USDC",
  alloc: 96.5,
  allocPct: 17.44,
  supply: 34.44,
  cap: 34.44,
  apy: 7.65,
});

// Styled filter pill
const FilterPill = ({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "px-4 py-1 rounded-3xl text-sm font-medium select-none transition",
      active
        ? "bg-[rgba(255,255,255,0.06)] text-white"
        : "bg-transparent text-[rgba(190,192,197,0.87)] hover:bg-[rgba(255,255,255,0.1)]"
    )}
  >
    {children}
  </div>
);

// Deposits & APY chart card
const ChartCard = ({
  title,
  value,
  filters,
  tooltipFormatter,
  data,
  valueSuffix = "",
  ChartComponent,
}: any) => (
  <div className="bg-[#232325] rounded-2xl p-5 md:p-6">
    <div className="flex justify-between items-start flex-wrap gap-4">
      <div>
        <div className="text-sm text-gray-300 mb-1">{title}</div>
        <div className="text-[2.2rem] leading-tight font-semibold text-white">
          {value}
          <span className="text-lg font-medium text-gray-400">{valueSuffix}</span>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">{filters}</div>
    </div>
    <div className="mt-4 h-52 w-full">
      {ChartComponent
        ? <ChartComponent data={data} tooltipFormatter={tooltipFormatter} />
        : null}
    </div>
  </div>
);

// Deposits LineChart
const DepositsChart = ({
  data,
  tooltipFormatter,
}: {
  data: { date: string; value: number }[];
  tooltipFormatter: (value: any) => React.ReactNode;
}) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ left: 0, right: 0, top: 24, bottom: 0 }}>
      <defs>
        <linearGradient id="depositsArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1EAEDB" stopOpacity={0.22}/>
          <stop offset="100%" stopColor="#1EAEDB" stopOpacity={0.04}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="date" tick={{ fill: "#A1A1AA", fontSize: 12 }} axisLine={false} tickLine={false} />
      <YAxis hide domain={[120, 200]} />
      <Tooltip
        wrapperClassName="rounded-lg"
        contentStyle={{
          background: "#22232A",
          border: "none",
          color: "#fff",
          fontSize: 14,
        }}
        formatter={tooltipFormatter}
        labelFormatter={(v) => `Date: ${v}`}
      />
      {/* Average Reference */}
      <ReferenceDot x={data[2].date} y={4.55} r={20} isFront={true}
        fill="#393C43" stroke="rgba(30,174,219,0.22)" strokeWidth={2}
        label={{position:"top", value:"Avg 4.55%", fill:"#8894ad", fontSize:11, fontWeight:500}} />
      <ReferenceLine y={120} stroke="#2d333b" strokeDasharray="3 3" />
      <Area type="monotone" dataKey="value" stroke="none" fill="url(#depositsArea)" />
      <Line type="monotone" dataKey="value" stroke="#1EAEDB" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

// APY LineChart
const APYChart = ({
  data,
  tooltipFormatter,
}: {
  data: { date: string; value: number }[];
  tooltipFormatter: (value: any) => React.ReactNode;
}) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ left: 0, right: 0, top: 24, bottom: 0 }}>
      <defs>
        <linearGradient id="apyArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1EAEDB" stopOpacity={0.22}/>
          <stop offset="100%" stopColor="#1EAEDB" stopOpacity={0.04}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="date" tick={{ fill: "#A1A1AA", fontSize: 12 }} axisLine={false} tickLine={false} />
      <YAxis hide domain={[0, 9]} />
      <Tooltip
        wrapperClassName="rounded-lg"
        contentStyle={{
          background: "#22232A",
          border: "none",
          color: "#fff",
          fontSize: 14,
        }}
        formatter={tooltipFormatter}
        labelFormatter={(v) => `Date: ${v}`}
      />
      {/* Average Reference */}
      <ReferenceDot x={data[2].date} y={4.55} r={20} isFront={true}
        fill="#393C43" stroke="rgba(30,174,219,0.22)" strokeWidth={2}
        label={{position:"top", value:"Avg 4.55%", fill:"#8894ad", fontSize:11, fontWeight:500}} />
      <ReferenceLine y={4.55} stroke="#2d333b" strokeDasharray="3 3" />
      <Area type="monotone" dataKey="value" fill="url(#apyArea)" stroke="none" />
      <Line type="monotone" dataKey="value" stroke="#1EAEDB" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

// APY breakdown list (right-side in APY card)
const APYBreakdownList = () => (
  <div className="flex flex-col gap-2 min-w-[160px]">
    {apyBreakdown.map((item, i) => (
      <div
        key={i}
        className="flex items-center justify-between rounded-xl px-4 py-2 bg-[rgba(40,41,44,0.85)]"
      >
        <span className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-[#1EAEDB] to-[#3E5E80] opacity-75" />
          <span className="text-sm text-gray-100">{item.label}</span>
        </span>
        <span className="font-semibold text-sm text-gray-300">{item.value}</span>
      </div>
    ))}
  </div>
);

// Market Table row indicator
const TableToggle = ({
  active,
}: {
  active?: boolean;
}) => (
  <span
    className={cn(
      "mr-3 inline-flex w-8 h-8 rounded-full border-[3.5px] border-gray-600 transition bg-gradient-to-br",
      active
        ? "border-[#1EAEDB] bg-[#1EAEDB]/10"
        : "bg-gray-700/20"
    )}
  />
);

const TableChartRing = () => (
  <svg width={32} height={32} viewBox="0 0 32 32">
    <circle
      cx="16"
      cy="16"
      r="14"
      stroke="#282A2E"
      strokeWidth="4"
      fill="none"
    />
    <circle
      cx="16"
      cy="16"
      r="14"
      stroke="#1EAEDB"
      strokeWidth="4"
      strokeDasharray="44,40"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// MARKET ALLOCATION TABLE =============================================
const MarketTable = () => (
  <div className="bg-[#232325] rounded-2xl p-2 pt-0 w-full mt-6 overflow-x-auto">
    {/* Table Header */}
    <div className="grid grid-cols-6 text-xs font-medium text-gray-400 px-5 py-3 border-b border-[#33333a]">
      <span className="col-span-2">Market Allocation</span>
      <span className="text-right">Allocation %</span>
      <span className="text-right">Total Supply</span>
      <span className="text-right">Cap</span>
      <span className="text-right">Supply APY</span>
    </div>
    {/* Table Rows */}
    {marketRows.map((row, i) => (
      <div
        key={i}
        className={cn(
          "grid grid-cols-6 items-center px-5 py-4",
          i % 2 === 1 ? "bg-[#28282D]/80" : ""
        )}
      >
        <span className="flex items-center gap-3 col-span-2">
          <TableToggle active={i % 2 === 0} />
          <span className="font-medium text-gray-100">{row.market}</span>
          <span className="bg-gray-800 text-xs px-2 py-0.5 ml-2 rounded-lg font-semibold text-gray-400">{row.alloc}%</span>
        </span>
        <span className="flex items-center justify-end gap-2">
          <TableChartRing />
          <span className="font-semibold text-white text-base">{row.allocPct}%</span>
        </span>
        <span className="text-right text-gray-200 font-normal">${row.supply.toFixed(2)}M</span>
        <span className="text-right text-gray-200 font-normal">${row.cap.toFixed(2)}M</span>
        <span className="text-right text-[#A2DAFF] font-semibold">
          {row.apy.toFixed(2)}%
          <span className="inline-block ml-1">&#8599;</span>
        </span>
      </div>
    ))}
    {/* Pagination */}
    <div className="flex justify-between items-center pt-4 px-5 pb-1">
      <span className="text-gray-500 text-sm">1 of 3</span>
      <div className="flex gap-1 text-gray-500">
        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-700/60 transition disabled:opacity-30" disabled>
          <svg width={20} height={20}><polyline points="12 6 8 10 12 14" fill="none" stroke="currentColor" strokeWidth={2} /></svg>
        </button>
        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-700/60 transition">
          <svg width={20} height={20}><polyline points="8 6 12 10 8 14" fill="none" stroke="currentColor" strokeWidth={2} /></svg>
        </button>
      </div>
    </div>
  </div>
);

// === OVERVIEW SECTION COMPOSITION ===

export const VaultOverview: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Deposits */}
      <ChartCard
        title="Total Deposits (USD)"
        value="197.45M"
        valueSuffix=""
        data={depositsData}
        tooltipFormatter={(value: number) => [`$${value}M`, "Deposits"]}
        filters={
          <>
            <FilterPill active>Deposit</FilterPill>
            <FilterPill>Liquidity</FilterPill>
            <FilterPill active>USDC</FilterPill>
            <FilterPill>USDT</FilterPill>
            <FilterPill active>
              3 months
              <svg
                className="ml-1 inline-block"
                width={16} height={16}
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </FilterPill>
          </>
        }
        ChartComponent={DepositsChart}
      />

      {/* APY Card + APY Breakdown */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-2/3">
          <ChartCard
            title="APY"
            value="7.77"
            valueSuffix="%"
            data={apyData}
            tooltipFormatter={(value: number) => [`${value}%`, "APY"]}
            filters={
              <FilterPill active>
                3 months
                <svg
                  className="ml-1 inline-block"
                  width={16} height={16}
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </FilterPill>
            }
            ChartComponent={APYChart}
          />
        </div>
        <div className="w-full md:w-1/3 flex items-start">
          <APYBreakdownList />
        </div>
      </div>

      {/* Market Table */}
      <MarketTable />
    </div>
  );
};
