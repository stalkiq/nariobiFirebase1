
// This page now serves as a simple redirect or entry point to the new dashboard structure.
// In a real application, you might set up a server-side redirect or make /dashboard the root.
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/layout/PageWrapper'; // PageWrapper might need style adjustments

export default function HomePage() {
  return (
    <PageWrapper title="Welcome to Nairobi Online College Portal" description="Access your courses and college resources.">
      <div className="text-center">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/dashboard">
            Go to Dashboard
          </Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          This site is undergoing a transformation to serve you better.
        </p>
      </div>
    </PageWrapper>
  );
}
