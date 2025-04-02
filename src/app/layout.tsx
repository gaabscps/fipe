// app/layout.tsx
import { Roboto } from "next/font/google";
import { Providers } from "./providers";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tabela Fipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body suppressHydrationWarning style={{ height: "100vh" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
