import { Metadata } from "next";

export const metadata = {
  title: "Contact Us | Lagree Pulse",
  description:
    "Get in touch with Lagree Pulse. Contact us for inquiries about classes, memberships, or any questions about our fitness programs.",
  keywords: [
    "contact Lagree",
    "Lagree Pulse contact",
    "fitness inquiry",
    "Lagree support",
    "workout questions",
  ],
  openGraph: {
    title: "Contact Lagree Pulse",
    description:
      "Reach out to us for any questions about our fitness programs and services.",
    url: "https://lagreepulse.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
