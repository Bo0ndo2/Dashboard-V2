import "./globals.css";
import ClientLayout from "./ClientLayoutNoSSR";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Dashboard",
  description: "Next.js Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSans.variable}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
