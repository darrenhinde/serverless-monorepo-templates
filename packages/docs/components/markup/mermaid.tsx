"use client";

import React, {
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import mermaid from "mermaid";
import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GridPattern } from "@/components/ui/GridPattern";
import MermaidModal from "./MermaidModal";
import { useTheme } from "next-themes";

interface MermaidProps {
  chart: string;
  className?: string;
}

const Mermaid = ({ chart, className }: MermaidProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [diagramVisible, setDiagramVisible] = useState(false);
  const { theme } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const initializeMermaid = useCallback(() => {
    mermaid.initialize({
      theme: theme === "dark" ? "dark" : "default",
      startOnLoad: false,
      securityLevel: "loose",
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: "basis",
      },
      themeVariables: {
        primaryColor: theme === "dark" ? "#bb86fc" : "#7c3aed",
        primaryTextColor: theme === "dark" ? "#ffffff" : "#000000",
        primaryBorderColor: theme === "dark" ? "#bb86fc" : "#7c3aed",
        lineColor: theme === "dark" ? "#bb86fc" : "#7c3aed",
        secondaryColor: theme === "dark" ? "#03dac6" : "#60a5fa",
        tertiaryColor: theme === "dark" ? "#242424" : "#f3f4f6",
      },
    });
  }, [theme]);

  const renderMermaid = useCallback(() => {
    if (ref.current) {
      initializeMermaid();
      mermaid
        .render(`mermaid-${Date.now()}`, chart)
        .then((result) => {
          if (ref.current) {
            ref.current.innerHTML = result.svg;
            setDiagramVisible(true);
          }
        })
        .catch((error) => {
          console.error("Mermaid rendering error:", error);
          if (ref.current) {
            ref.current.innerHTML = `<pre>${chart}</pre>`;
          }
          setDiagramVisible(true);
        });
    }
  }, [chart, initializeMermaid]);

  const memoizedClassName = useMemo(
    () => clsx("mermaid", className),
    [className]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && ref.current) {
      const timer = setTimeout(() => {
        renderMermaid();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [mounted, renderMermaid]);

  useEffect(() => {
    if (mounted) {
      renderMermaid();
    }
  }, [theme, mounted, renderMermaid]);

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

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        onMouseMove={onMouseMove}
        onClick={() => setIsModalOpen(true)}
        className="group relative rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 p-6 mx-auto max-w-3xl cursor-pointer"
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
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#b67ee540] to-[#d8b4fe40] opacity-0 transition duration-300 group-hover:opacity-75 dark:from-[#4a226640] dark:to-[#7c3aed40]"
            style={style}
          />
        </div>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />

        <div
          className={clsx(
            memoizedClassName,
            "relative z-10 flex justify-center",
            diagramVisible ? "opacity-100" : "opacity-0"
          )}
          ref={ref}
        />
      </div>
      <MermaidModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        chart={chart}
      />
    </>
  );
};

export default React.memo(Mermaid);
