import type { Metadata } from "next";
import { Gelasio, Karla } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gelasio",
});
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Terasa Black Tulip",
  description:
    "Terasa Black Tulip - O experiență gastronomică de excepție în aer liber. Savurează preparate delicioase și băuturi racoritoare într-un ambient plin de farmec, perfect pentru relaxare și evenimente speciale. Descoperă magia verii într-un cadru intim și primitor!",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${gelasio.variable} ${karla.variable} antialiased dark`}
      >
        <Head>
          {/* Adăugăm favicon-ul în secțiunea Head */}
          <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        </Head>
        {/* Conținut principal */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
