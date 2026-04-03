"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <svg
        width="40"
        height="40"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M18 4L4 14V32H14V22H22V32H32V14L18 4Z"
          fill="#1e3a5f"
        />
        <path
          d="M18 4L4 14H32L18 4Z"
          fill="#2d5a8a"
        />
        <rect x="16" y="18" width="4" height="6" fill="#f5f0eb" />
        <circle cx="21" cy="21" r="1" fill="#d4a574" />
      </svg>
      <span className="text-xl font-semibold text-[#1e3a5f] tracking-tight">
        HostNest
      </span>
    </Link>
  );
}
