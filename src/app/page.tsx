import AnimatedBrazilMapEchart from "@/components/echarts/AnimatedBrazilMapEchart";
import AnimatedSantaCatarinaMapEchartUsingJson from "@/components/echarts/AnimatedSantaCatarinaMapEchartUsingJson";
import AnimatedTextEcharts from "@/components/echarts/AnimatedTextEcharts";
import BeefEchart from "@/components/echarts/BeefEchart";
import BeijingAqiEchart from "@/components/echarts/BeijingAqiEchart";
import BrazilHavanMap from "@/components/echarts/BrazilHavanGeoEchart";
import BrazilMapEchart from "@/components/echarts/BrazilMapEchart";
import FirstEchart from "@/components/echarts/FirstEchart";
import MultipleLineEchart from "@/components/echarts/MultipleLineEchart";
import MultipleLineEchartWithPie from "@/components/echarts/MultipleLineEchartWithPie";
import SantaCatarinaHavanMap from "@/components/echarts/SantaCatarinaHavanMap";
import SantaCatarinaMapEchart from "@/components/echarts/SantaCatarinaMapEchart";
import SvgEchart from "@/components/echarts/SvgEchart";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <AnimatedTextEcharts text="echarts-test" />
      <Link href="https://echarts.apache.org/en/index.html" className="absolute top-10 left-4 -rotate-12" target="_blank">
        <Image src="/echarts-logo.png" alt="Echarts logo" width={646} height={147} />
      </Link>
      <div className="underline w-full flex justify-end">
        <Link href="https://github.com/ViniciusCestarii">@viniciuscestarii</Link>
      </div>
      <span>Obs: Estes dados são aproximações e, portanto, passíveis de imprecisão.</span>
      <AnimatedSantaCatarinaMapEchartUsingJson />
      <BrazilHavanMap />
      <SantaCatarinaHavanMap />
      <FirstEchart />
      <BeijingAqiEchart />
      <SvgEchart />
      <MultipleLineEchart />
      <MultipleLineEchartWithPie />
      <h2>Mapas utilizando SVG</h2>
      <BeefEchart />
      <AnimatedBrazilMapEchart />
      <BrazilMapEchart isMap />
      <BrazilMapEchart />
      <SantaCatarinaMapEchart />
    </main>
  );
}
