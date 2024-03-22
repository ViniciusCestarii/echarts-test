import BeijingAqiEchart from "@/components/charts/BeijingAqiEchart";
import FirstEchart from "@/components/charts/FirstEchart";
import SvgEchart from "@/components/charts/SvgEchart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <FirstEchart />
      <BeijingAqiEchart />
      <SvgEchart />
    </main>
  );
}
