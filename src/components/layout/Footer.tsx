import Link from "next/link";
import Image from "next/image";

const footerNavigation = {
  programs: [
    { name: "Education & Outreach", href: "/programs/education-outreach" },
    { name: "Compliance Enablement", href: "/programs/compliance-enablement" },
    { name: "Vendor Guidance", href: "/programs/vendor-guidance" },
    { name: "Traceability Platform", href: "/programs/traceability-platform" },
    { name: "Access & Affordability", href: "/programs/access-affordability" },
  ],
  organization: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Reports", href: "/reports" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Newsletter", href: "/contact#newsletter" },
    { name: "Publications", href: "/reports" },
    { name: "Partner With Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2F3E4E] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/SVG/Asset 4.svg"
                  alt="ISST Seal"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-lg font-bold">ISST</span>
            </Link>
            <p className="text-[#9AA7B2] text-sm leading-relaxed mb-6">
              Institute for Shipping Security and Technology. Making borders
              and societies safer through technology-enabled supply chain security.
            </p>
            <p className="text-[#5B6B7A] text-xs">
              A 501(c)(3) nonprofit organization
            </p>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#9AA7B2] uppercase tracking-wider mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              {footerNavigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#9AA7B2] hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#9AA7B2] uppercase tracking-wider mb-4">
              Organization
            </h3>
            <ul className="space-y-3">
              {footerNavigation.organization.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#9AA7B2] hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#9AA7B2] uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#9AA7B2] hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#5B6B7A]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#5B6B7A] text-sm">
            &copy; {new Date().getFullYear()} Institute for Shipping Security and
            Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#5B6B7A] hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#5B6B7A] hover:text-white text-sm transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
