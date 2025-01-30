"use client";

import React, { useState, useEffect } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  language?: string;
}

const languageNames: Record<string, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  javascript: "JavaScript",
  typescript: "TypeScript",
  php: "PHP",
  python: "Python",
  ruby: "Ruby",
  go: "Go",
};

function getPanelTitle({
  title,
  language,
}: {
  title?: string;
  language?: string;
}) {
  if (title) {
    return title;
  }
  if (language && language in languageNames) {
    return languageNames[language];
  }
  return "Code";
}

export function CodeBlock({
  children,
  className,
  title,
  language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleCopy = () => {
    const code = typeof children === "string" ? children : "";
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
    });
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
      <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {getPanelTitle({ title, language })}
        </h3>
      </div>
      <div className="relative">
        <pre className={`overflow-x-auto p-4 text-xs text-white ${className}`}>
          {children}
        </pre>
        <button
          type="button"
          className={`absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 ${
            copied
              ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20"
              : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
          }`}
          onClick={handleCopy}
        >
          <span
            className={`flex items-center gap-0.5 text-zinc-400 transition duration-300 ${
              copied ? "scale-0" : "scale-100"
            }`}
          >
            <LuCopy className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover:stroke-zinc-400" />
            Copy
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 ${
              copied ? "scale-100" : "scale-0"
            }`}
          >
            <LuCheck className="h-5 w-5" />
            Copied!
          </span>
        </button>
      </div>
    </div>
  );
}
