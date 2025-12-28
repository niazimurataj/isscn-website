"use client";

import CardSwap, { Card } from "@/components/reactbits/CardSwap";

const values = [
  {
    title: "Mission-Driven",
    description:
      "Every decision we make is guided by our commitment to making borders and societies safer.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "#2F3E4E",
  },
  {
    title: "Transparency",
    description:
      "We practice what we preach, maintaining open governance and clear conflicts-of-interest policies.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    color: "#4F6F73",
  },
  {
    title: "Accessibility",
    description:
      "Security shouldn't be a privilege. We work to make protection accessible to businesses of all sizes.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "#5B6B7A",
  },
  {
    title: "Collaboration",
    description:
      "Complex problems require diverse perspectives. We partner across sectors to drive real change.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    color: "#9AA7B2",
  },
];

export function ValuesCardSwap() {
  return (
    <div className="flex justify-center items-center py-8">
      <CardSwap
        width={320}
        height={280}
        cardDistance={40}
        verticalDistance={50}
        delay={4000}
        pauseOnHover={true}
        skewAmount={4}
        easing="elastic"
      >
        {values.map((value, index) => (
          <Card
            key={index}
            className="p-8 flex flex-col items-center text-center bg-white"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${value.color}15`, color: value.color }}
            >
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-[#2F3E4E] mb-3">
              {value.title}
            </h3>
            <p className="text-[#5B6B7A] text-sm leading-relaxed">
              {value.description}
            </p>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}

