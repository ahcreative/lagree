import { Metadata } from "next";

export const metadata = {
  title: "Gift Cards | Lagree Pulse",
  description:
    "Give the gift of fitness with Lagree Pulse gift cards. Perfect for friends and family who want to experience the Lagree workout method.",
  keywords: [
    "Lagree gift cards",
    "fitness gift",
    "workout gift",
    "Lagree present",
    "fitness voucher",
  ],
  openGraph: {
    title: "Gift Cards | Lagree Pulse",
    description: "Give the gift of fitness with Lagree Pulse gift cards.",
    url: "https://lagreepulse.com/gift-card",
    type: "website",
  },
};

export default function GiftCardLayout({ children }) {
  return children;
}
