import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
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
      <body
        suppressHydrationWarning
        style={{
          height: "100vh",
          backgroundColor: "#f9f6fc",
        }}
      >
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
