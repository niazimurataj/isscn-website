"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Squares, TrueFocus } from "@/components/reactbits";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#2F3E4E] overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 opacity-20">
        <Squares
          direction="diagonal"
          speed={0.3}
          borderColor="#5B6B7A"
          squareSize={50}
          hoverFillColor="#4F6F73"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5B6B7A]/30 border border-[#5B6B7A]/50 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#9AA7B2] rounded-full animate-pulse" />
              <span className="text-sm text-[#9AA7B2]">
                Institute for Shipping Security and Technology
              </span>
            </div>

            {/* Headline - True Focus Animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              <TrueFocus
                sentence="Securing Supply Chains. Stopping Narcotics."
                manualMode={false}
                blurAmount={4}
                borderColor="#4F6F73"
                glowColor="rgba(79, 111, 115, 0.6)"
                animationDuration={0.6}
                pauseBetweenAnimations={1.5}
              />
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#c5cdd4] leading-relaxed mb-10">
              Making borders and societies safer by empowering businesses to cut
              off the arteries of the global narcotics trade and strengthen supply
              chain security through technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/programs">
                <Button size="lg" className="w-full sm:w-auto bg-[#4F6F73] text-white hover:bg-[#5d8285] transition-all duration-300 hover:scale-105 shadow-lg">
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
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white hover:text-[#2F3E4E] transition-all duration-300 hover:scale-105">
                  Learn About Our Mission
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image - Clean, no overlay shapes */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/shipping-containers.jpg"
                alt="Shipping containers at port"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E4E]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
