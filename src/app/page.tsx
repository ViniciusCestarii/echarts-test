import BeijingAqiEchart from "@/components/charts/BeijingAqiEchart";
import FirstEchart from "@/components/charts/FirstEchart";
import MultipleLineEchart from "@/components/charts/MultipleLineEchart";
import MultipleLineEchartWithPie from "@/components/charts/MultipleLineEchart copy";
import MultipleLineWithPieEchart from "@/components/charts/MultipleLineWithPieEchart";
import SvgEchart from "@/components/charts/SvgEchart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <FirstEchart />
      <BeijingAqiEchart />
      <SvgEchart />
      <MultipleLineEchart />
      <MultipleLineEchartWithPie/>
    </main>
  );
}
