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

  // --- Helper: Filter responses based on selected filters
  const getFilteredResponses = (responses, filters) => {
    return responses.filter((r) => {
      for (let key in filters) {
        if (!filters[key]) continue; // skip empty filters
        if (r[key] !== filters[key]) return false;
      }
      return true;
    });
  };

  // --- Helper: Calculate stat summary
  const calculateSummary = (responses) => {
    const total = responses.length;
    const harmed = responses.filter((r) => r.harmed).length;
    const safe = responses.filter((r) => r.feltSafe).length;
    const avgRecovery =
      total > 0
        ? (
            responses.reduce((sum, r) => sum + r.recoveryTime, 0) / total
          ).toFixed(1)
        : 0;

    return {
      totalResponses: total,
      percentHarmed: `${Math.round((harmed / total) * 100) || 0}%`,
      percentSafe: `${Math.round((safe / total) * 100) || 0}%`,
      avgRecoveryTime: `${avgRecovery} months`,
    };
  };

  const filteredResponses = getFilteredResponses(dummyData.responses, filters);
  const summary = calculateSummary(filteredResponses);

  // --- Harm Chart Data
  const harms = activeSetting
    ? filteredResponses
        .filter((r) => r.setting === activeSetting)
        .flatMap((r) => r.harmTypes)
        .reduce((acc, type) => {
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {})
    : filteredResponses
        .flatMap((r) => r.harmTypes)
        .reduce((acc, type) => {
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {});

  const harmChartData = Object.entries(harms).map(([type, count]) => ({
    type,
    count,
  }));

  // --- Setting Chart Data
  const settingChartData = dummyData.filters.settings.map((settingName) => {
    const settingResponses = filteredResponses.filter((r) => r.setting === settingName);
    const safe = settingResponses.filter((r) => r.feltSafe).length;
    const harmful = settingResponses.filter((r) => r.harmed).length;

    return {
      name: settingName,
      safe,
      harmful,
    };
  });

  // --- Support Chart Data
  const supportMap = filteredResponses
    .flatMap((r) => r.supports)
    .reduce((acc, support) => {
      acc[support] = (acc[support] || 0) + 1;
      return acc;
    }, {});

  const supportChartData = Object.entries(supportMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <Layout title="Numbers" subtitle="The data behind the stories.">
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Filters */}
        <FilterPanel filters={filters} setFilters={setFilters} />

        {/* Section 1: At a Glance */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Responses" value={summary.totalResponses} />
            <StatCard title="% Harmed" value={summary.percentHarmed} />
            <StatCard title="% Felt Safe" value={summary.percentSafe} />
            <StatCard title="Avg. Recovery Time" value={summary.avgRecoveryTime} />
          </div>
        </section>

        {/* Section 2 & 3: Setting + Harm Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SettingChart data={settingChartData} onSettingClick={setActiveSetting} />
          <HarmChart
            data={harmChartData}
            activeSetting={activeSetting}
            onClear={() => setActiveSetting(null)}
          />
        </section>

        {/* Section 4: Support Chart */}
        <section>
          <SupportChart data={supportChartData} />
        </section>
      </div>
    </Layout>
  );
}
