import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#2F3E4E] pattern-grid overflow-hidden">
      {/* Subtle decorative elements - no gradients, just opacity variations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#5B6B7A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#9AA7B2]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5B6B7A]/30 border border-[#5B6B7A]/50 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#9AA7B2] rounded-full" />
              <span className="text-sm text-[#9AA7B2]">
                Institute for Shipping Security and Technology
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Securing Supply Chains.{" "}
              <span className="text-[#9AA7B2]">Stopping Narcotics.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#9AA7B2] leading-relaxed mb-10">
              Making borders and societies safer by empowering businesses to cut
              off the arteries of the global narcotics trade and strengthen supply
              chain security through technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/programs">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#2F3E4E] hover:bg-[#9AA7B2] hover:text-[#2F3E4E]">
                  Explore Our Programs
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#5B6B7A] text-white hover:bg-[#5B6B7A] hover:text-white">
                  Learn About Our Mission
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-[#5B6B7A]/30 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">$84B+</div>
                <div className="text-sm text-[#9AA7B2] mt-1">
                  Annual cocaine trade through supply chains
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">23%</div>
                <div className="text-sm text-[#9AA7B2] mt-1">
                  Exporters with comprehensive security
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl lg:text-4xl font-bold text-white">5</div>
                <div className="text-sm text-[#9AA7B2] mt-1">
                  Programs to protect your business
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-96 xl:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/shipping-containers.jpg"
                alt="Shipping containers at port"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with logo */}
              <div className="absolute inset-0 bg-[#2F3E4E]/40 flex items-center justify-center">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/SVG/Asset 4.svg"
                    alt="ISST Institutional Seal"
                    fill
                    className="object-contain brightness-0 invert opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
