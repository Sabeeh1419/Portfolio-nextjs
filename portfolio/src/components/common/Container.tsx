import { ElementType } from "react";
import { cn } from '@/lib/utils';
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}
export function Container({ 
  children, 
  className, 
  as = 'div' 
}: ContainerProps) {
  const Component = as as ElementType;
  
  return (
    <Component className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Component>
  );
}