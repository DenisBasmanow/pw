import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Denis | weksoftware",
  description: "Developer from frickin' weksoftware",
  keywords: "antievil, antievil bot, antievil бот, антиевил, антиевил бот, olutapa, oluttapa, olut tapa, olupata, supell, llespus, супел, супелл, лепус, ллепус, weksoftware, викасофта, denis_(<->_<->), denis.dev, denis_wsdev, rtwo2dtwo2, denis__, 405714652824338434, 808406127473197126, викасофт, виксофтваре",
  openGraph: {
    type: "website",
    title: "Denis",
    url: "https://d.weks.dev",
    description: "from weksoftware",
  },
};

export const viewport: Viewport = {
  themeColor: "#242429",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
