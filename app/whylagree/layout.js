import { Metadata } from "next";

export const metadata = {
  title: "Why Lagree | Lagree Pulse",
  description:
    "Discover why Lagree is revolutionizing fitness with its unique low-impact, high-intensity workout method. Learn about the benefits and science behind Lagree training.",
  keywords: [
    "Lagree benefits",
    "Lagree workout",
    "low impact exercise",
    "high intensity training",
    "Lagree fitness",
  ],
  openGraph: {
    title: "Why Choose Lagree | Lagree Pulse",
    description:
      "Discover why Lagree is revolutionizing fitness with its unique low-impact, high-intensity workout method.",
    url: "https://lagreepulse.com/whylagree",
    type: "website",
  },
};

export default function WhyLagreeLayout({ children }) {
  return children;
}
