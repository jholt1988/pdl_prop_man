import localFont from "next/font/local";
import { StoreProvider } from "./lib/StoreProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PDL Rentals-Property",
  description: "The way to track everything rental.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme='forest' lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <StoreProvider>{children}</StoreProvider>
      </body>
      
    </html>
  );
}
