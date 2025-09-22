"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Feature } from "./types";

interface FeatureCardProps {
  feature: Feature;
  onClick: () => void;
}

const isVideo = (url: string) => {
  return url.toLowerCase().endsWith(".mp4");
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVerMas, setShowVerMas] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      if (scrollHeight > clientHeight) {
        setShowVerMas(true);
      }
    }
  }, [feature.description]);

  return (
    <Card className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 h-full">
      <CardHeader className="flex flex-col items-center text-center p-6 flex-grow">
        <div className="flex items-center justify-center gap-2 mb-2">
          <feature.icon />
          <h4 className="text-xl font-semibold tracking-tight">
            {feature.title}
          </h4>
        </div>
        <p
          ref={descriptionRef}
          className={`mt-1 text-muted-foreground text-[17px] transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-4"
          }`}>
          {feature.description}
        </p>
        {showVerMas && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 mt-2 text-sm"
          >
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        )}
      </CardHeader>
      <CardContent className="mt-auto px-0 pb-0">
        <div className="pl-6 relative group cursor-pointer" onClick={onClick}>
          {isVideo(feature.media[0].url) ? (
            <div className="relative w-full h-40">
              <video
                src={feature.media[0].url}
                className="w-full h-40 object-cover rounded-tl-xl"
                muted
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-48">
              <Image
                src={feature.media[0].url}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-tl-xl transition-transform duration-300"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 transition-opacity duration-300">
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};