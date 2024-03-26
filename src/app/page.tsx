import AnimatedBrazilMapEchart from "@/components/charts/AnimatedBrazilMapEchart";
import AnimatedSantaCatarinaMapEchartUsingJson from "@/components/charts/AnimatedSantaCatarinaMapEchartUsingJson";
import BeefEchart from "@/components/charts/BeefEchart";
import BeijingAqiEchart from "@/components/charts/BeijingAqiEchart";
import BrazilMapEchart from "@/components/charts/BrazilMapEchart";
import FirstEchart from "@/components/charts/FirstEchart";
import MultipleLineEchart from "@/components/charts/MultipleLineEchart";
import MultipleLineEchartWithPie from "@/components/charts/MultipleLineEchartWithPie";
import SantaCatarinaMapEchart from "@/components/charts/SantaCatarinaMapEchart";
import SvgEchart from "@/components/charts/SvgEchart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <AnimatedSantaCatarinaMapEchartUsingJson />
      <span>Obs: Estes dados são aproximações e, portanto, passíveis de imprecisão.</span>
      <FirstEchart />
      <BeijingAqiEchart />
      <SvgEchart />
      <MultipleLineEchart />
      <MultipleLineEchartWithPie/>
      <BeefEchart />
      <AnimatedBrazilMapEchart />
      <BrazilMapEchart isMap />
      <BrazilMapEchart />
      <SantaCatarinaMapEchart />
    </main>
  );
}
