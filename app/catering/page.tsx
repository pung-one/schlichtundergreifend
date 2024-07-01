import { Catering } from "@/components/Catering";
import { getBase64 } from "@/utils/createPlaceholder";

export default async function CateringPage() {
  const blurUrl = await getBase64("catering/gardentable.png");
  return <Catering blurUrl={blurUrl} />;
}
