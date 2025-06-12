import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageWrapper({ children, title, description, className = '' }: PageWrapperProps) {
  return (
    <div className={`container mx-auto px-4 py-8 md:py-12 ${className}`}>
      {title && (
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2 text-center">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
