import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvasLoader from "@/components/main/StarsCanvasLoader";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
{
  return (
    <html lang="en">
      <head>
        <title>Michael Khuri — Founding Full-Stack Engineer</title>
        <meta name="description" content="MS AI @ SJSU. Founding full-stack engineer at Star4ce. Perception projects on BDD100K and Waymo cameras." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Me.png" type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvasLoader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
