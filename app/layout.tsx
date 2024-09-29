import "./css/style.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/ui/header";
import AuthProvider from "@/app/AuthProvider"; // Import the AuthProvider

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SummerFavourite = localFont({
  src: [
    {
      path: "../public/fonts/SummerFavourite-ARLr6.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SummerFavourite-ARLr6.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/SummerFavourite-ARLr6.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SummerFavourite-ARLr6.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-SummerFavourite",
  display: "swap",
});

export const metadata = {
  title: "Skill Forge",
  description: "Skill Forge: Skills that Shine, Gaps combine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${SummerFavourite.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
