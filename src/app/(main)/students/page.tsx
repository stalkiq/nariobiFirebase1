import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookHeadphones, Lightbulb, MessageSquareQuote, GraduationCap } from 'lucide-react';

const studentLifeFeatures = [
  {
    title: "Vibrant Community",
    icon: <Users className="w-10 h-10 text-primary" />,
    description: "Connect with fellow students through clubs, forums, and virtual events. Build lifelong friendships and professional networks."
  },
  {
    title: "Academic Support",
    icon: <BookHeadphones className="w-10 h-10 text-primary" />,
    description: "Access tutoring, writing centers, and academic advising to help you succeed in your studies."
  },
  {
    title: "Career Services",
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    description: "Get guidance on career planning, internships, resume building, and university transfer applications."
  },
    {
    title: "Student Profiles",
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    description: "Showcase your achievements and connect with peers. Check out a sample student profile!"
  },
];

export default function StudentsPage() {
  return (
    <PageWrapper
      title="Student Life at Nairobi Online College"
      description="Discover a supportive and engaging online learning environment designed for your success."
    >
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentLifeFeatures.map(feature => (
            <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-2 text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
                 {feature.title === "Student Profiles" && (
                    <Button asChild variant="link" className="mt-4 text-accent">
                        <Link href="/students/s001">View Sample Profile</Link>
                    </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              At Nairobi Online College, we are committed to providing a holistic educational experience.
              Our student services are designed to support you academically, professionally, and personally.
              Engage with our diverse community, utilize our comprehensive resources, and make the most of your online college experience.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/courses">Explore Our Programs</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Students collaborating online"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="students online collaboration"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-12">
          Hear From Our Students
        </h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="shadow-md">
                <CardHeader className="flex flex-row items-center gap-4">
                    <MessageSquareQuote className="w-8 h-8 text-primary" />
                    <div>
                        <CardTitle className="text-lg">Aisha Jama</CardTitle>
                        <CardDescription>Computer Science Student</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground italic">
                        "Nairobi Online College has provided me with incredible opportunities to learn and grow. The faculty are supportive, and the online community is vibrant. I feel well-prepared for my future!"
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>
    </PageWrapper>
  );
}
