// src/components/ui/Typography.tsx
import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body1' 
  | 'body2' 
  | 'subtitle1' 
  | 'subtitle2' 
  | 'caption' 
  | 'overline';

type ColorVariant = 'primary' | 'secondary' | 'muted' | 'inherit';
type AlignVariant = 'left' | 'center' | 'right';
type WeightVariant = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  className?: string;
  as?: ElementType;
  align?: AlignVariant;
  color?: ColorVariant;
  weight?: WeightVariant;
}

type VariantMappingType = {
  [K in TypographyVariant]: ElementType;
};

type VariantStylesType = {
  [K in TypographyVariant]: string;
};

type ColorStylesType = {
  [K in ColorVariant]: string;
};

type AlignStylesType = {
  [K in AlignVariant]: string;
};

type WeightStylesType = {
  [K in WeightVariant]: string;
};

const variantMapping: VariantMappingType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
  caption: 'span',
  overline: 'span',
};

const variantStyles: VariantStylesType = {
  h1: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight',
  h2: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
  h3: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-snug',
  h4: 'text-2xl md:text-3xl lg:text-4xl font-bold leading-snug',
  h5: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-normal',
  h6: 'text-lg md:text-xl lg:text-2xl font-semibold leading-normal',
  body1: 'text-base md:text-lg leading-relaxed',
  body2: 'text-sm md:text-base leading-relaxed',
  subtitle1: 'text-lg md:text-xl font-medium leading-normal',
  subtitle2: 'text-base md:text-lg font-medium leading-normal',
  caption: 'text-xs md:text-sm leading-normal',
  overline: 'text-xs uppercase tracking-wider font-medium leading-normal',
};

const colorStyles: ColorStylesType = {
  primary: 'text-gray-900',
  secondary: 'text-gray-700',
  muted: 'text-gray-500',
  inherit: 'text-inherit',
};

const alignStyles: AlignStylesType = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const weightStyles: WeightStylesType = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Typography({
  children,
  variant = 'body1',
  className,
  as,
  align = 'left',
  color = 'primary',
  weight,
}: TypographyProps) {
  const Component = as || variantMapping[variant];

  return (
    <Component
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        alignStyles[align],
        weight && weightStyles[weight],
        className
      )}
    >
      {children}
    </Component>
  );
}

// Convenience components for common use cases
export function Heading1(props: Omit<TypographyProps, 'variant'>) {
  return <Typography variant="h1" {...props} />;
}

export function Heading2(props: Omit<TypographyProps, 'variant'>) {
  return <Typography variant="h2" {...props} />;
}

export function Heading3(props: Omit<TypographyProps, 'variant'>) {
  return <Typography variant="h3" {...props} />;
}

export function Heading4(props: Omit<TypographyProps, 'variant'>) {
  return <Typography variant="h4" {...props} />;
}

export function Paragraph(props: Omit<TypographyProps, 'variant'>) {
  return <Typography variant="body1" {...props} />;
}

export function Caption(props: Omit<TypographyProps, 'variant'>) {
  return <Typography variant="caption" {...props} />;
}