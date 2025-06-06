import { Metadata } from "next";

export const metadata = {
  title: "Lagree Pricing & Membership | Lagree Pulse",
  description:
    "Explore our flexible membership options and pricing plans for Lagree workouts. Find the perfect package to achieve your fitness goals.",
  keywords: [
    "Lagree pricing",
    "Lagree membership",
    "Lagree class packages",
    "fitness membership",
    "workout pricing",
  ],
  openGraph: {
    title: "Lagree Pricing & Membership | Lagree Pulse",
    description:
      "Flexible membership options and pricing plans for your Lagree fitness journey.",
    url: "https://lagreepulse.com/pricing",
    type: "website",
  },
};

export default function PricingLayout({ children }) {
  return children;
}
