import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

export function timeToRead(words: string) {
  const trimString = words.trim();

  const wordsArray = trimString.split(/\s+/);
  const wordCount = wordsArray.length;

  const avgReadTime: number = 185;
  return (wordCount / avgReadTime).toFixed(0)
}

export function resolveOpenGraphImage(image: SanityImageSource, width = 1200, height = 627) {
  if (!image) return;
  console.log(image);
  const url = urlFor(image)?.width(1200).height(627).fit("crop").url();
  if (!url) return;
  return { url, width, height };
}