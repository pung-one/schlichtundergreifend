import { About } from "@/components/About";
import { getBase64 } from "@/utils/createPlaceholder";

export default async function AboutPage() {
  const blurUrl = await getBase64("about/about1.png");
  return <About blurUrl={blurUrl} />;
}
