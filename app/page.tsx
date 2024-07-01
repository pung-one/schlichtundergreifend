import { Landing } from "@/components/Landing";
import { getBase64 } from "@/utils/createPlaceholder";

export default async function Home() {
  const blurUrl = await getBase64("hero/messy-table1.png");
  return <Landing blurUrl={blurUrl} />;
}
