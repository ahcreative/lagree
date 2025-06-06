import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";

// For metadata
export const metadata = {
  title: "Lagree Pulse",
  description:
    "Official website for Lagree Pulse — innovative fitness equipment and training solutions.",
  keywords: ["Lagree", "Pulse", "Fitness", "Workout"],
  authors: [{ name: "Lagree Pulse Team", url: "https://lagreepulse.com" }],
  openGraph: {
    title: "Lagree Pulse",
    description:
      "Experience next-level fitness with Lagree Pulse's cutting-edge equipment.",
    url: "https://lagreepulse.com",
    siteName: "Lagree Pulse",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LoadingScreen />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
