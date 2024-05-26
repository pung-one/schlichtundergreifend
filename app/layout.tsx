import { GlobalStyles } from "@/globalStyles/global_styles";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";

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

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
