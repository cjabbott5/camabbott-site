import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import FilterPanel from "@/components/dashboard/FilterPanel";
import StatCard from "@/components/dashboard/StatCard";
import SettingChart from "@/components/dashboard/SettingChart";
import HarmChart from "@/components/dashboard/HarmChart";
import SupportChart from "@/components/dashboard/SupportChart";
import dummyData from "@/data/dummyData";

export default function Numbers() {
  const [filters, setFilters] = useState({});
  const [activeSetting, setActiveSetting] = useState(null);

  const harms =
    activeSetting && dummyData.harmTypes[activeSetting.replace(/\s/g, "")]
      ? dummyData.harmTypes[activeSetting.replace(/\s/g, "")]
      : dummyData.harmTypes.all;

  return (
    <Layout title="Numbers" subtitle="The data behind the stories.">
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Filters */}
        <FilterPanel filters={filters} setFilters={setFilters} />

        {/* Section 1: At a Glance */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Responses"
              value={dummyData.summary.totalResponses}
            />
            <StatCard
              title="% Harmed"
              value={dummyData.summary.percentHarmed}
            />
            <StatCard
              title="% Felt Safe"
              value={dummyData.summary.percentSafe}
            />
            <StatCard
              title="Avg. Recovery Time"
              value={dummyData.summary.avgRecoveryTime}
            />
          </div>
        </section>

        {/* Sections 2 & 3 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SettingChart
            data={dummyData.settings}
            onSettingClick={setActiveSetting}
          />

          <HarmChart
            data={harms}
            activeSetting={activeSetting}
            onClear={() => setActiveSetting(null)}
          />
        </section>

        {/* Section 4 */}
        <section>
          <SupportChart data={dummyData.supports} />
        </section>
      </div>
    </Layout>
  );
}
