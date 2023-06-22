import { Navbar } from "@/components/site-navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, authModal }: { children: React.ReactNode; authModal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen dark ${inter.className}`}>
        <Providers>
          <Navbar />
          {authModal}
          <main className="container my-16 grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
