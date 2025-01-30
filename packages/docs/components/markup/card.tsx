"use client";

import { PropsWithChildren, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { iconMap } from "@/settings/icons";
import { GridPattern } from "@/components/ui/GridPattern";

type CardProps = PropsWithChildren & {
  subtitle?: string;
  title: string;
  description?: string;
  href?: string;
  image?: string;
  className?: string;
  external?: boolean;
  icon?: keyof typeof iconMap;
  variant?: "normal" | "small" | "image";
};

export default function Card({
  subtitle,
  title,
  description,
  href,
  image,
  className,
  external = false,
  icon,
  variant = "normal",
  children,
}: CardProps) {
  const IconComponent = icon ? iconMap[icon] : null;
  const ExternalIcon = iconMap["arrowUpRight"];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  const content = (
    <div
      onMouseMove={onMouseMove}
      className={clsx(
        "group relative rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
        variant === "small" ? "p-3" : "p-6",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <GridPattern
            width={72}
            height={56}
            x="50%"
            y="50%"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
            squares={[
              [0, 1],
              [1, 3],
            ]}
          />
        </div>
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#9345cc80] to-[#b67ee580] opacity-0 transition duration-300 group-hover:opacity-75 dark:from-[#4a226680] dark:to-[#5b3f7280]"
          style={style}
        />
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />

      <div className="relative z-10">
        {external && href && variant !== "image" && (
          <div className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">
            <ExternalIcon
              className="w-4 h-4 group-hover:stroke-[4]"
              strokeWidth={3}
            />
          </div>
        )}
        {IconComponent && (
          <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-purple-300/10 dark:group-hover:ring-purple-400">
            <IconComponent className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-purple-300/10 dark:group-hover:stroke-purple-400" />
          </div>
        )}
        {subtitle && variant === "normal" && (
          <p className="text-xs font-semibold !my-1 text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        {image && variant === "image" && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-[180px] object-cover object-center !m-0 border-0 rounded-lg"
          />
        )}
        <h3
          className={clsx(
            "mt-4 font-semibold text-zinc-900 dark:text-white",
            variant === "small" ? "text-sm" : "text-lg"
          )}
        >
          {title}
        </h3>
        {description && variant !== "small" && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      passHref
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="!no-underline"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
