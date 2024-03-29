"use client";
import Header from "@/components/Header/Header";
import MainNav from "@/components/MainNav/MainNav";
import Footer from "@/components/Footer/Footer";
import { RecoilRoot } from "recoil";
import "../scss/template.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <RecoilRoot>
        <body className="body">
          <Header />
          <MainNav />
          <main className="container container_pos_main">{children}</main>
          <Footer />
        </body>
      </RecoilRoot>
    </html>
  );
}
