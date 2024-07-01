import { Popup } from "@/components/Popup";
import { getBase64 } from "@/utils/createPlaceholder";

export default async function PopupPage() {
  const blurUrl = await getBase64("popup/popup1.png");
  return <Popup blurUrl={blurUrl} />;
}
