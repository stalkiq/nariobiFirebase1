import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { campusFeatures, type CampusFeature } from '@/lib/data/campusFeatures';
import { Building, History, ExternalLink } from 'lucide-react';

export default function CampusTourPage() {
  return (
    <PageWrapper
      title="Virtual Campus Tour"
      description="Explore the key features and resources of Nairobi Online College, celebrating our heritage in East Palo Alto."
    >
      <section className="mb-12 bg-card p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-headline font-semibold text-primary mb-4">
          Our East Palo Alto Roots
        </h2>
        <p className="text-foreground leading-relaxed">
          While our campus is now virtual, our roots are deeply embedded in East Palo Alto, California, the home of the original Nairobi College. This tour celebrates that heritage, reflecting the key spaces and community spirit that defined Nairobi College. Imagine our digital library, vibrant student collaboration hubs, and specialized learning labs, all designed to foster the same dedication to accessible and impactful education.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {campusFeatures.map((feature: CampusFeature) => (
          <Card key={feature.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-56">
              <Image
                src={feature.image}
                alt={feature.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint="campus building modern"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-primary">{feature.name}</CardTitle>
              </div>
              <CardDescription className="text-sm h-12 overflow-hidden text-ellipsis">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground mb-3">{feature.details}</p>
              {feature.historicalConnection && (
                <div className="mt-auto pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <History size={16} className="shrink-0 mt-0.5 text-accent"/> 
                    <span><strong>Historical Link:</strong> {feature.historicalConnection}</span>
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                Explore Feature <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
