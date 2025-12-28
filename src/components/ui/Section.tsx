import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
  container?: boolean;
  pattern?: boolean;
}

const variantStyles = {
  default: "bg-[#F8FAFC]",
  primary: "bg-[#2F3E4E]",
  secondary: "bg-[#5B6B7A]/10",
  white: "bg-white",
};

const sizeStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      container = true,
      pattern = false,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={`
          relative
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {/* Subtle pattern overlay for primary sections - very low opacity */}
        {pattern && variant === "primary" && (
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle, #9AA7B2 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />
        )}
        {container ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            {children}
          </div>
        ) : (
          <div className="relative z-10">{children}</div>
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ children, centered = true, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          mb-12
          ${centered ? "text-center max-w-3xl mx-auto" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
}

export const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ children, as: Component = "h2", className = "", ...props }, ref) => {
    const baseStyles = {
      h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
      h2: "text-3xl md:text-4xl font-bold tracking-tight",
      h3: "text-2xl md:text-3xl font-semibold",
    };

    return (
      <Component
        ref={ref}
        className={`${baseStyles[Component]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const SectionDescription = forwardRef<HTMLParagraphElement, SectionDescriptionProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-lg md:text-xl text-[#5B6B7A] mt-4 ${className}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);

SectionDescription.displayName = "SectionDescription";
