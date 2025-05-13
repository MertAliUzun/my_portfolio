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
  title: "Mert Ali Uzun",
  description: "Mert Ali Uzun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM6g0g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5g5" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <footer>
      <p style={{ textAlign: 'center', fontSize: '14px', color: 'white', margin: '10px 0' }}>
        &copy; 2025 Mert Ali Uzun. All rights reserved.
      </p>
      </footer>
      </body>
    </html>
  );
}
