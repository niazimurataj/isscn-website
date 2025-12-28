"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CardNav } from "@/components/reactbits";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Team", href: "/team" },
  { name: "Reports", href: "/reports" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Group navigation items into 3 categories for CardNav
const cardNavItems = [
  {
    label: "Learn",
    bgColor: "#2F3E4E",
    textColor: "#fff",
    links: [
      { label: "About Us", href: "/about", ariaLabel: "Learn about ISST" },
      { label: "Programs", href: "/programs", ariaLabel: "View our programs" },
    ],
  },
  {
    label: "Connect",
    bgColor: "#3d4f61",
    textColor: "#fff",
    links: [
      { label: "Our Team", href: "/team", ariaLabel: "Meet our team" },
      { label: "Contact", href: "/contact", ariaLabel: "Contact us" },
    ],
  },
  {
    label: "Resources",
    bgColor: "#5B6B7A",
    textColor: "#fff",
    links: [
      { label: "Reports", href: "/reports", ariaLabel: "View reports" },
      { label: "Blog", href: "/blog", ariaLabel: "Read our blog" },
    ],
  },
];

export function Header() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#9AA7B2]/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-center h-20 lg:h-24">
          <CardNav
            logo="/SVG/Asset 4.svg"
            logoAlt="ISST Seal"
            items={cardNavItems}
            baseColor="#ffffff"
            menuColor="#2F3E4E"
            buttonBgColor="#2F3E4E"
            buttonTextColor="#ffffff"
            buttonText="Get Involved"
            onButtonClick={handleButtonClick}
            ease="power3.out"
          />
        </div>
      </nav>
    </header>
  );
}
