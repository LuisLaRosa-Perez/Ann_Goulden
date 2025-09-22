import type { ComponentType } from 'react';

export interface MediaItem {
  type: "image" | "video";
  url: string;
  caption: string;
}

export interface Feature {
  icon: ComponentType;
  title: string;
  description: string;
  media: MediaItem[];
}