import { Metadata } from "next";

export const metadata = {
  title: "Terms of Services | Lagree Pulse",
  description:
    "Read our Terms of Services to understand the rules, policies, and guidelines for using Lagree Pulse services and facilities.",
  keywords: [
    "Lagree terms",
    "Lagree conditions",
    "fitness terms",
    "gym policies",
    "Lagree rules",
  ],
  openGraph: {
    title: "Terms of Services | Lagree Pulse",
    description:
      "Rules, policies, and guidelines for using Lagree Pulse services and facilities.",
    url: "https://lagreepulse.com/termsOfServices",
    type: "website",
  },
};

export default function TermsOfServicesLayout({ children }) {
  return children;
}
