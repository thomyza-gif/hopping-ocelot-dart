import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import { MotionProps } from "framer-motion";
import React from "react";

/**
 * Heading component with text-wrap: balance (native CSS, no JS)
 * Replaced react-wrap-balancer to fix SSR bug where JS code appeared in text
 */
export const Heading = ({
  className,
  as: Tag = "h2",
  children,
  size = "md",
  ...props
}: {
  className?: string;
  as?: any;
  children: any;
  size?: "sm" | "md" | "xl" | "2xl";
  props?: React.HTMLAttributes<HTMLHeadingElement>;
} & MotionProps &
  React.HTMLAttributes<HTMLHeadingElement>) => {
  const sizeVariants = {
    sm: "text-xl md:text-2xl md:leading-snug",
    md: "text-3xl md:text-5xl md:leading-tight",
    xl: "text-4xl md:text-6xl md:leading-none",
    "2xl": "text-5xl md:text-7xl md:leading-none",
  };
  return (
    <Tag
      className={cn(
        "text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight",
        "font-medium",
        "text-black",
        "text-balance", // Native CSS text-wrap: balance (defined in globals.css)
        sizeVariants[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

/**
 * Subheading component for descriptive text below headings
 */
export const Subheading = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLParagraphElement>;
} & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-center leading-relaxed",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
