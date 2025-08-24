import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CodingClubPage() {
  return (
    <div className="bg-uq-content-bg p-3 border border-border rounded-none shadow-md">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <Code className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-primary">Coding Club</h1>
        </div>
        <p className="text-sm text-muted-foreground">Join our community of student developers and programmers</p>
      </div>

      {/* Coming Soon Content */}
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-6">
          <Code className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Coming Soon</h2>
          <p className="text-lg text-muted-foreground max-w-md">
            We're building an amazing coding club experience for Nairobi College students. 
            Get ready for workshops, hackathons, and collaborative coding projects!
          </p>
        </div>

        <Card className="w-full max-w-md bg-secondary/50 border-border">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg text-foreground">What to Expect</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>• Weekly coding workshops</p>
            <p>• Project collaboration opportunities</p>
            <p>• Hackathon events</p>
            <p>• Industry guest speakers</p>
            <p>• Portfolio building support</p>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Button asChild variant="outline" className="border-border hover:bg-secondary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
