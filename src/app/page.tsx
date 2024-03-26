import AnimatedBrazilMapEchart from "@/components/echarts/AnimatedBrazilMapEchart";
import AnimatedSantaCatarinaMapEchartUsingJson from "@/components/echarts/AnimatedSantaCatarinaMapEchartUsingJson";
import AnimatedTextEcharts from "@/components/echarts/AnimatedTextEcharts";
import BeefEchart from "@/components/echarts/BeefEchart";
import BeijingAqiEchart from "@/components/echarts/BeijingAqiEchart";
import BrazilMapEchart from "@/components/echarts/BrazilMapEchart";
import FirstEchart from "@/components/echarts/FirstEchart";
import MultipleLineEchart from "@/components/echarts/MultipleLineEchart";
import MultipleLineEchartWithPie from "@/components/echarts/MultipleLineEchartWithPie";
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
      <Link href="https://github.com/ViniciusCestarii" className="underline w-full text-right">@viniciuscestarii</Link>
      <AnimatedSantaCatarinaMapEchartUsingJson />
      <span>Obs: Estes dados são aproximações e, portanto, passíveis de imprecisão.</span>
      <FirstEchart />
      <BeijingAqiEchart />
      <SvgEchart />
      <MultipleLineEchart />
      <MultipleLineEchartWithPie />
      <h2>Svg maps</h2>
      <BeefEchart />
      <AnimatedBrazilMapEchart />
      <BrazilMapEchart isMap />
      <BrazilMapEchart />
      <SantaCatarinaMapEchart />
    </main>
  );
}
