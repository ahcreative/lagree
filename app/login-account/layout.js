import { Metadata } from "next";

export const metadata = {
  title: "Login to Your Account | Lagree Pulse",
  description:
    "Access your Lagree Pulse account to manage your classes, memberships, and fitness journey. Secure login for members.",
  keywords: [
    "Lagree login",
    "member login",
    "fitness account",
    "workout login",
    "Lagree member portal",
  ],
  openGraph: {
    title: "Login to Your Account | Lagree Pulse",
    description:
      "Access your Lagree Pulse member account and manage your fitness journey.",
    url: "https://lagreepulse.com/login-account",
    type: "website",
  },
};

export default function LoginAccountLayout({ children }) {
  return children;
}
