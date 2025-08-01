import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightspeed | Robotic Construction Company",
  description: "Building tomorrow's homes today with robotics and precision engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
