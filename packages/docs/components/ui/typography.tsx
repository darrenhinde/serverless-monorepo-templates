import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return <div className="typography">{children}</div>;
}

import { cn } from "@/lib/utils";

export function TypographyFlare({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Component
      className={cn(
        "prose prose-zinc dark:prose-invert",
        "prose-headings:scroll-m-20 prose-headings:font-semibold",
        "prose-h1:text-3xl prose-h1:font-bold",
        "prose-h2:text-2xl prose-h2:font-semibold",
        "prose-h3:text-xl prose-h3:font-semibold",
        "prose-p:leading-7",
        "prose-a:font-medium prose-a:text-emerald-500 hover:prose-a:text-emerald-600",
        "prose-strong:font-semibold",
        "prose-code:rounded-md prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm",
        "prose-pre:rounded-md prose-pre:bg-zinc-100 prose-pre:p-4",
        "prose-img:rounded-md",
        "prose-table:text-sm",
        "prose-th:border prose-th:border-zinc-200 prose-th:p-2",
        "prose-td:border prose-td:border-zinc-200 prose-td:p-2",
        className
      )}
    >
      {children}
    </Component>
  );
}
