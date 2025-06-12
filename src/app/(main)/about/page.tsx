import PageWrapper from '@/components/layout/PageWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Target, BookHeart } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageWrapper
      title="About Nairobi Online College"
      description="Continuing a legacy of transformative education."
    >
      <section className="mb-12">
        <Card className="shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Our Heritage</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Nairobi Online College proudly carries forward the innovative spirit and community focus of the original Nairobi College, a pioneering two-year community college founded in East Palo Alto, California. That institution was a beacon of "relevant education," particularly for Black and other minority students, aiming to prepare them for transfer to four-year institutions or for meaningful employment.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We are inspired by its commitment to community involvement, cultural identity, and the groundbreaking "College Without Walls" concept, which emphasized flexible, community-based learning.
              </p>
            </div>
            <div className="relative h-64 md:h-full w-full">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Historical photo of Nairobi College students or campus"
                layout="fill"
                objectFit="cover"
                data-ai-hint="vintage college students"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                To provide accessible, high-quality online education that empowers students from diverse backgrounds to achieve their academic and career goals, fostering critical thinking, lifelong learning, and community engagement.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <Lightbulb className="w-8 h-8 text-accent" />
              <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                To be a leading online institution recognized for its innovative teaching methods, commitment to student success, and its role in continuing the legacy of relevant and transformative education pioneered by Nairobi College.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Users className="w-10 h-10 text-primary" />, title: "Community", description: "Fostering a supportive and inclusive learning environment." },
            { icon: <BookHeart className="w-10 h-10 text-primary" />, title: "Relevance", description: "Offering practical, culturally responsive education." },
            { icon: <Lightbulb className="w-10 h-10 text-primary" />, title: "Innovation", description: "Embracing new technologies and teaching methodologies." },
            { icon: <Target className="w-10 h-10 text-primary" />, title: "Empowerment", description: "Equipping students with skills for success and impact." },
          ].map(value => (
            <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-shadow">
              {value.icon}
              <h3 className="text-lg font-semibold text-primary mt-3 mb-1">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
