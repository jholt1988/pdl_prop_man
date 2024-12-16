import localFont from "next/font/local";
import { StoreProvider } from "../app/StoreProvider";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
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
