import { Metadata } from "next";

export const metadata = {
  title: "First Time at Lagree | Lagree Pulse",
  description:
    "New to Lagree? Learn everything you need to know about your first Lagree workout, what to expect, and how to prepare for your first class.",
  keywords: [
    "first Lagree class",
    "Lagree beginner",
    "Lagree first time",
    "Lagree preparation",
    "Lagree workout guide",
  ],
  openGraph: {
    title: "First Time at Lagree | Lagree Pulse",
    description:
      "Everything you need to know about your first Lagree workout experience.",
    url: "https://lagreepulse.com/first-timers",
    type: "website",
  },
};

export default function FirstTimersLayout({ children }) {
  return children;
}
