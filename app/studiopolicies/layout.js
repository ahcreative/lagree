import { Metadata } from "next";

export const metadata = {
  title: "Studio Policies | Lagree Pulse",
  description:
    "Learn about Lagree Pulse studio policies, including class booking, cancellation, and general guidelines to ensure a great experience for all members.",
  keywords: [
    "Lagree policies",
    "studio rules",
    "class policies",
    "fitness guidelines",
    "Lagree studio rules",
  ],
  openGraph: {
    title: "Studio Policies | Lagree Pulse",
    description:
      "Important policies and guidelines for a great Lagree Pulse experience.",
    url: "https://lagreepulse.com/studiopolicies",
    type: "website",
  },
};

export default function StudioPoliciesLayout({ children }) {
  return children;
}
