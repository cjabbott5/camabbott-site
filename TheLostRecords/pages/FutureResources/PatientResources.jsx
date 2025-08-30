import React from "react";
import Layout from "@/components/layout/Layout";

export default function ResourcesForPatients() {
  return (
    <Layout title="Resources for Patients" subtitle="Tools for survival, dignity, and agency.">
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-lg">
          This page will house guides, checklists, patient rights documents, and trauma-informed planning templates. The goal is to equip patients with the knowledge and confidence to advocate for themselves during care.
        </p>
      </div>
    </Layout>
  );
}