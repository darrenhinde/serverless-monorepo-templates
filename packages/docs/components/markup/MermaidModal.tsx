"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { LuX, LuZoomIn, LuZoomOut, LuRotateCcw } from "react-icons/lu";
import mermaid from "mermaid";

interface MermaidModalProps {
  isOpen: boolean;
  onClose: () => void;
  chart: string;
}

const MermaidModal: React.FC<MermaidModalProps> = ({
  isOpen,
  onClose,
  chart,
}) => {
  const [mounted, setMounted] = useState(false);
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen && mounted && mermaidRef.current) {
      mermaid.render("mermaid-modal", chart).then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
          const svg = mermaidRef.current.querySelector("svg");
          if (svg) {
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.style.maxWidth = "100%";
            svg.style.maxHeight = "100%";
          }
        }
      });
    }
  }, [isOpen, mounted, chart]);

  if (!isOpen || !mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-11/12 h-5/6 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
          onClick={onClose}
        >
          <LuX className="w-6 h-6" />
        </button>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
                <button
                  onClick={() => zoomIn()}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <LuZoomIn className="w-6 h-6" />
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <LuZoomOut className="w-6 h-6" />
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <LuRotateCcw className="w-6 h-6" />
                </button>
              </div>
              <TransformComponent
                wrapperClass="!w-full !h-full"
                contentClass="!w-full !h-full"
              >
                <div
                  ref={mermaidRef}
                  className="w-full h-full flex items-center justify-center"
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </motion.div>
  );
};

export default MermaidModal;
