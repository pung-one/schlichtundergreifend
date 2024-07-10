import { Layout } from "@/components/Layout";
import { GlobalStyles } from "@/globalStyles/global_styles";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import ReactDOM from "react-dom";

ReactDOM.preload("/fonts/Melodrama-Variable.woff2", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/Nunito-Variable.woff2", {
  as: "font",
  crossOrigin: "",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
