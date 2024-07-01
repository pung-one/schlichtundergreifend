import { Layout } from "@/components/Layout";
import { GlobalStyles } from "@/globalStyles/global_styles";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import ReactDOM from "react-dom";

ReactDOM.preload("/fonts/Melodrama-Variable.woff2", {
  as: "font",
  crossOrigin: "",
});
ReactDOM.preload("/fonts/Melodrama-Variable.woff", {
  as: "font",
  crossOrigin: "",
});
ReactDOM.preload("/fonts/Melodrama-Variable.ttf", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/Nunito-Variable.woff", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/Nunito-Variable.woff2", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/Nunito-Variable.ttf", {
  as: "font",
  crossOrigin: "",
});

export const metadata: Metadata = {
  title: "Schlicht & Ergreifend",
  description: "Down to earth fine dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
