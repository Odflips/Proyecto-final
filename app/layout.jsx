import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App | By Oliver Leal",
  description: "Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-the-black" lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
