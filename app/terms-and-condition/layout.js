import { Metadata } from "next";

export const metadata = {
  title: "Terms and Conditions | Lagree Pulse",
  description:
    "Read our terms and conditions to understand the rules, policies, and guidelines for using Lagree Pulse services and facilities.",
  keywords: [
    "Lagree terms",
    "Lagree conditions",
    "fitness terms",
    "gym policies",
    "Lagree rules",
  ],
  openGraph: {
    title: "Terms and Conditions | Lagree Pulse",
    description:
      "Rules, policies, and guidelines for using Lagree Pulse services and facilities.",
    url: "https://lagreepulse.com/terms-and-condition",
    type: "website",
  },
};

export default function TermsAndConditionLayout({ children }) {
  return children;
}
