import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const repeat = (times: number) => {
  return Array.from(Array(times).keys())
}

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function doSomething<T extends string | number, U extends string>(input1: T, input2: U): [T, U]{
  return [input1, input2]
}

doSomething(6, "world")