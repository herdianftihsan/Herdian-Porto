import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5a3 3 0 00-1-2.5c3 0 6-2 6-5.5a4.3 4.3 0 00-1-3 4 4 0 000-3s-1-.3-3 1a10 10 0 00-5 0c-2-1.3-3-1-3-1a4 4 0 000 3 4.3 4.3 0 00-1 3C5 14.5 8 16.5 11 16.5a3 3 0 00-1 2.5V21" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  );
}
