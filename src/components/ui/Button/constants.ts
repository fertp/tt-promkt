export type Variants = (typeof variants)[Variantkeys];
type Variantkeys = keyof typeof variants;

export const variants = {
  ONLY_ICON: 'only-icon',
  ICON_LEFT: 'icon-left',
  ICON_RIGHT: 'icon-right',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
} as const;
