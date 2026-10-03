// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";

export const metadata = { title: "My Portfolio", description: "Personal portfolio built with Next.js" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}