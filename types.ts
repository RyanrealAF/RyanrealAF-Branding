import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  accent?: boolean;
}

export interface MetricData {
  name: string;
  value: number;
}