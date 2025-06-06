import { Metadata } from "next";

export const metadata = {
  title: "Class Schedule | Lagree Pulse",
  description:
    "View and book Lagree classes at your convenience. Browse our comprehensive class schedule and find the perfect workout time for you.",
  keywords: [
    "Lagree schedule",
    "class times",
    "workout schedule",
    "fitness classes",
    "Lagree booking",
  ],
  openGraph: {
    title: "Class Schedule | Lagree Pulse",
    description: "Browse and book Lagree classes at times that work for you.",
    url: "https://lagreepulse.com/schedule",
    type: "website",
  },
};

export default function ScheduleLayout({ children }) {
  return children;
}
