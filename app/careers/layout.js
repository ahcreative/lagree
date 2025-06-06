import { Metadata } from "next";

export const metadata = {
  title: "Careers at Lagree Pulse | Join Our Team",
  description:
    "Explore exciting career opportunities at Lagree Pulse. Join our team of fitness professionals and be part of a growing fitness community.",
  keywords: [
    "Lagree careers",
    "fitness jobs",
    "work at Lagree",
    "fitness careers",
    "Lagree employment",
  ],
  openGraph: {
    title: "Careers at Lagree Pulse | Join Our Team",
    description:
      "Join our team of fitness professionals and be part of the Lagree Pulse community.",
    url: "https://lagreepulse.com/careers",
    type: "website",
  },
};

export default function CareersLayout({ children }) {
  return children;
}
