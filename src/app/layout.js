import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Directory - Discover Amazing People",
  description: "Search, discover, and learn more about our amazing community of users. A modern user directory built with React and Next.js.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
