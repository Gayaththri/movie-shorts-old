import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/features/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Shorts",
  description:
    "A fullstack app to browse and comment on your favorite movie summaries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
