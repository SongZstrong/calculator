import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Calculator Blog - Math Tips, Tutorials & Calculation Guides | Calculate Tools",
  description: "Explore our comprehensive blog about calculators, math tips, percentage calculations, and practical calculation guides. Learn how to use our free online calculator tools effectively.",
  keywords: "calculator blog, math tips, calculation guides, percentage calculation, online calculator tutorial",
  openGraph: {
    title: "Calculator Blog - Math Tips & Calculation Guides",
    description: "Explore our comprehensive blog about calculators, math tips, and practical calculation guides.",
    url: 'https://calculate-tools.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Calculator Blog - Math Tips & Calculation Guides",
    description: "Explore our comprehensive blog about calculators, math tips, and practical calculation guides.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
