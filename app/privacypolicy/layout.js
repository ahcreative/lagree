import { Metadata } from "next";

export const metadata = {
  title: "Privacy Policy | Lagree Pulse",
  description:
    "Learn how Lagree Pulse protects your privacy and handles your personal information. Read our comprehensive privacy policy and data protection practices.",
  keywords: [
    "Lagree privacy",
    "data protection",
    "privacy policy",
    "personal information",
    "data security",
  ],
  openGraph: {
    title: "Privacy Policy | Lagree Pulse",
    description:
      "How we protect your privacy and handle your personal information at Lagree Pulse.",
    url: "https://lagreepulse.com/privacypolicy",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
