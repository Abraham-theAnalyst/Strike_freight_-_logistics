// Maps the plain string keys used in lib/site-data.ts to actual icon
// components, so site-data stays framework-agnostic and content-only.
import type { ComponentType } from "react";
import {
  ShieldCheck,
  Truck,
  CalendarDays,
  MapPin,
  Plane,
  Ship,
  ShoppingBag,
  Utensils,
  FileText,
  Shirt,
  Cog,
  Footprints,
  Gem,
  Smartphone,
  type LucideProps,
} from "lucide-react";
import { WhatsAppIcon, type BrandIconProps } from "./brand-icons";

export type IconComponent = ComponentType<LucideProps> | ComponentType<BrandIconProps>;

export const trustBarIconMap: Record<string, IconComponent> = {
  shield: ShieldCheck,
  doorstep: Truck,
  calendar: CalendarDays,
  mapPin: MapPin,
  whatsapp: WhatsAppIcon,
};

export const serviceIconMap: Record<string, IconComponent> = {
  plane: Plane,
  ship: Ship,
  courier: Truck,
  shopping: ShoppingBag,
};

export const categoryIconMap: Record<string, IconComponent> = {
  food: Utensils,
  document: FileText,
  clothing: Shirt,
  machine: Cog,
  shoe: Footprints,
  bag: ShoppingBag,
  jewelry: Gem,
  gadget: Smartphone,
};
