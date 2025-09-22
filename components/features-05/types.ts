export interface MediaItem {
  type: "image" | "video";
  url: string;
  caption: string;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
  media: MediaItem[];
}
