
import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

// Adjusted styles for the new theme - less padding if handled by layout, flatter look
export default function PageWrapper({ children, title, description, className = '' }: PageWrapperProps) {
  return (
    <div className={`py-4 md:py-6 ${className}`}> {/* Reduced default padding as main layout handles container and some padding */}
      {title && (
        <h1 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-1 text-center">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-base text-muted-foreground mb-6 text-center max-w-xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
