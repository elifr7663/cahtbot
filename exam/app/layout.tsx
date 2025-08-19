import type { Metadata } from "next";
import "@/app/globals.css";
import { geistSans, geistMono } from "@/components/theme/theme";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "NexbotLite",
  description: "Conversational AI assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
