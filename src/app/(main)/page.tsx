import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpenText, MapPinned, UsersRound } from 'lucide-react';

const featuredLinks = [
  {
    title: "Explore Our Courses",
    description: "Discover a wide range of courses designed for modern learners.",
    href: "/courses",
    icon: <BookOpenText className="w-12 h-12 text-primary mb-4" />,
    cta: "View Course Catalog"
  },
  {
    title: "Meet Our Faculty",
    description: "Learn from experienced educators passionate about your success.",
    href: "/faculty",
    icon: <UsersRound className="w-12 h-12 text-primary mb-4" />,
    cta: "Faculty Directory"
  },
  {
    title: "Virtual Campus Tour",
    description: "Experience our digital campus and its East Palo Alto heritage.",
    href: "/campus-tour",
    icon: <MapPinned className="w-12 h-12 text-primary mb-4" />,
    cta: "Take the Tour"
  }
];

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background rounded-lg shadow-inner">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6">
            Welcome to Nairobi Online College
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-10 max-w-3xl mx-auto">
            Reimagining education, inspired by the pioneering spirit of Nairobi College of East Palo Alto.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/courses">
              Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-12">
          Discover Nairobi Online College
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredLinks.map((link) => (
            <Card key={link.title} className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                {link.icon}
                <CardTitle className="text-2xl text-primary">{link.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription className="text-base mb-6">{link.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0 mt-auto text-center">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href={link.href}>
                    {link.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card rounded-lg shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-semibold text-primary mb-6">
                Our Heritage: Nairobi College
              </h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Nairobi Online College carries forward the legacy of the original Nairobi College, a pioneering two-year community college founded in East Palo Alto, California. Our mission is to provide relevant, empowering education, particularly for students seeking to advance their careers or transfer to four-year institutions.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                We embrace the spirit of community involvement, cultural identity, and the "College Without Walls" concept, offering flexible, practical, and problem-solving-oriented learning experiences for a new generation.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Nairobi College historical image placeholder"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover"
                data-ai-hint="college students library"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
