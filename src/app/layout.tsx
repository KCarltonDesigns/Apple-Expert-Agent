import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Expert Agent",
  description: "Research notes on iPhone Duo and iOS 27.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
