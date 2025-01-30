"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type TocProps = {
  tocs: { href: string; level: number; text: string }[];
};

export default function Toc({ tocs }: TocProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const encodedHref = encodeURIComponent(href.replace(/^#/, ""));
    const targetElement = document.getElementById(encodedHref);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  if (!tocs.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 w-full pl-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between text-sm font-semibold cursor-pointer"
      >
        <span>On this page</span>
        {isExpanded ? <LuChevronUp /> : <LuChevronDown />}
      </button>
      {isExpanded && (
        <ScrollArea className="pt-0.5 pb-4">
          <div className="flex flex-col gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
            {tocs.map(({ href, level, text }) => (
              <Link
                key={href}
                href={href}
                scroll={false}
                onClick={(e) => handleSmoothScroll(e, href)}
                className={clsx(
                  "hover:text-white dark:hover:text-white transition-colors duration-200",
                  {
                    "pl-0": level == 2,
                    "pl-3": level == 3,
                    "pl-6": level == 4,
                  }
                )}
              >
                {text}
              </Link>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
