import AnimatedBrazilMapEchart from "@/components/charts/AnimatedBrazilMapEchart";
import BeefEchart from "@/components/charts/BeefEchart";
import BeijingAqiEchart from "@/components/charts/BeijingAqiEchart";
import BrazilMapEchart from "@/components/charts/BrazilMapEchart";
import FirstEchart from "@/components/charts/FirstEchart";
import MultipleLineEchart from "@/components/charts/MultipleLineEchart";
import MultipleLineEchartWithPie from "@/components/charts/MultipleLineEchartWithPie";
import SvgEchart from "@/components/charts/SvgEchart";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <FirstEchart />
      <BeijingAqiEchart />
      <SvgEchart />
      <MultipleLineEchart />
      <MultipleLineEchartWithPie/>
      <BeefEchart />
      <AnimatedBrazilMapEchart />
      <BrazilMapEchart isMap />
      <BrazilMapEchart />
    </main>
  );
}
