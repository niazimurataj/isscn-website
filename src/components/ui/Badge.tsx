import { HTMLAttributes, forwardRef } from "react";

type BadgeVariant = "default" | "primary" | "secondary" | "success" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#9AA7B2]/20 text-[#5B6B7A]",
  primary: "bg-[#2F3E4E]/10 text-[#2F3E4E]",
  secondary: "bg-[#5B6B7A]/10 text-[#5B6B7A]",
  success: "bg-[#4a6b5c]/10 text-[#4a6b5c]",
  outline: "border border-[#9AA7B2] text-[#5B6B7A]",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = "default", className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center
          px-3 py-1
          text-xs font-medium
          rounded-full
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
