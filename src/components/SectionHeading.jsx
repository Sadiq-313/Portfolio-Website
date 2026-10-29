import React from "react";

/**
 * SectionHeading Component
 * Provides clean, consistent typographic hierarchy for section titles.
 * Adheres to anti-slop rules: no code-comment prefixes or fake machine tags.
 */
export default function SectionHeading({ badge, title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <span className="text-xs font-medium uppercase tracking-wider text-blue-400 mb-2 block">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
