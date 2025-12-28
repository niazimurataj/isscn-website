"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GooeyNav } from "@/components/reactbits";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Team", href: "/team" },
  { name: "Reports", href: "/reports" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const gooeyNavItems = navigation.map((item) => ({
  label: item.name,
  href: item.href,
}));

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Find initial active index based on current path
  const getActiveIndex = () => {
    const index = navigation.findIndex(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    );
    return index >= 0 ? index : -1;
  };

  const handleNavItemClick = (item: { label: string; href: string }) => {
    router.push(item.href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#9AA7B2]/20">
      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/SVG/Asset 4.svg"
                alt="ISST Seal"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-bold text-[#2F3E4E] group-hover:text-[#5B6B7A] transition-colors">
                ISST
              </span>
              <span className="hidden lg:block text-xs text-[#5B6B7A] -mt-0.5">
                Shipping Security & Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - GooeyNav */}
          <div className="hidden lg:flex items-center">
            <GooeyNav
              items={gooeyNavItems}
              initialActiveIndex={getActiveIndex()}
              onItemClick={handleNavItemClick}
              animationTime={500}
              particleCount={12}
              particleDistances={[70, 10]}
              particleR={80}
              colors={[1, 2, 3, 4]}
            />
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#2F3E4E] text-white font-semibold rounded-lg hover:bg-[#3d4f61] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#5B6B7A] hover:text-[#2F3E4E] hover:bg-[#9AA7B2]/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#9AA7B2]/20">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#2F3E4E]/10 text-[#2F3E4E]"
                          : "text-[#5B6B7A] hover:text-[#2F3E4E] hover:bg-[#9AA7B2]/10"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-[#2F3E4E] text-white font-semibold rounded-lg text-center hover:bg-[#3d4f61] transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
