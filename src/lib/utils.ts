import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

//Optimization for class names from twailwind css
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
