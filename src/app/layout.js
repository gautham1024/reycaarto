import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reycaarto Geomaatics Private Limited",
  description: "Reycaarto Geomaatics, founded in 2008, is a global leader in providing high-quality geospatial solutions specializing in Photogrammetry, LIDAR imaging, and data analytics, offering tailored services across industries like Agriculture, Oil & Gas, Telecommunications, and Environmental Engineering, with a client-centric approach and competitive pricing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
