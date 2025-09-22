"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { features } from "./features-data";
import { FeatureCard } from "./FeatureCard";
import { Feature } from "./types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Features05Page = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const isVideo = (url: string) => {
    return url.toLowerCase().endsWith(".mp4");
  };

  return (
    <div id="features" className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">
          Galería de Actividades
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
          Explore los momentos de nuestras actividades y eventos.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              onClick={() => {
                setSelectedFeature(feature);
              }}
            />
          ))}
        </div>

        {/* Modal para ver las imágenes */}
        {selectedFeature && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative max-w-6xl w-full mx-4">
              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white z-10"
                >
                  <X size={24} />
                </button>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-center dark:text-white">
                    {selectedFeature.title}
                  </h3>

                  <Carousel
                    opts={{ loop: true }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {selectedFeature.media.map((mediaItem, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                          <div className="p-1">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                              {isVideo(mediaItem.url) ? (
                                <video
                                  src={mediaItem.url}
                                  controls
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <Image
                                  src={mediaItem.url}
                                  alt={mediaItem.caption}
                                  fill
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <p className="text-center text-base italic mt-2 text-gray-600 dark:text-gray-400">
                              {mediaItem.caption}
                            </p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {selectedFeature.media.length > 2 && (
                      <>
                        <CarouselPrevious className="-left-4" />
                        <CarouselNext className="-right-4" />
                      </>
                    )}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features05Page;
