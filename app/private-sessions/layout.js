import { Metadata } from "next";

export const metadata = {
  title: "Private Lagree Sessions | Lagree Pulse",
  description:
    "Experience personalized Lagree training with our private sessions. Get one-on-one attention and customized workouts tailored to your fitness goals.",
  keywords: [
    "private Lagree",
    "personal training",
    "one-on-one workout",
    "customized fitness",
    "private fitness sessions",
  ],
  openGraph: {
    title: "Private Lagree Sessions | Lagree Pulse",
    description:
      "Get personalized attention and customized workouts with our private Lagree sessions.",
    url: "https://lagreepulse.com/private-sessions",
    type: "website",
  },
};

export default function PrivateSessionsLayout({ children }) {
  return children;
}
