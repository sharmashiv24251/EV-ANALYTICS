import { EVData } from '@/data';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTotalDistance(data: EVData[]): number {
    return data.reduce((total, ev) => total + ev.distance_traveled, 0);
  }