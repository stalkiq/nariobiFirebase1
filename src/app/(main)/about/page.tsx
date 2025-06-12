
import PageWrapper from '@/components/layout/PageWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Target, BookHeart, Landmark } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageWrapper
      title="About Nairobi Online College"
      description="Continuing a legacy of transformative education, deeply rooted in the innovative spirit of the original Nairobi College."
    >
      <section className="mb-12">
        <Card className="shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Our Heritage</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Nairobi Online College proudly carries forward the innovative spirit and community focus of the original Nairobi College, a pioneering two-year community college founded in East Palo Alto, California. That institution, detailed in foundational documents like the 1969 report (ERIC ED038131), was a beacon of "relevant education," particularly for Black and other minority students, aiming to prepare them for transfer to four-year institutions or for meaningful employment.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We are inspired by its commitment to community involvement, cultural identity, its unique operational structure, and the groundbreaking "College Without Walls" concept, which emphasized flexible, problem-solving, and community-based learning.
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
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Landmark className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl text-primary">Core Tenets from Our Legacy</CardTitle>
            </div>
            <p className="text-muted-foreground">
              The original Nairobi College operated on distinct principles that we strive to adapt and apply in our modern online context. These tenets, drawn from its foundational philosophy, guide our approach to education and community.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Relevant & Problem-Solving Curriculum</h3>
              <p className="text-foreground leading-relaxed">
                The original curriculum was designed to be directly applicable to students' lives and community needs.
                <em>(You can elaborate here with specific examples from the PDF on how courses were structured, what kind of problems they addressed, or unique teaching methodologies.)</em>
              </p>
              {/* Example: <p className="mt-2 text-sm text-muted-foreground">e.g., "Courses included 'Community Health' addressing local health disparities, and 'Economic Cooperatives' exploring local business development."</p> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Community-Centered Operations</h3>
              <p className="text-foreground leading-relaxed">
                Nairobi College was deeply integrated with East Palo Alto, operating with a philosophy of mutual support and involvement.
                <em>(Describe how the college operated in relation to its community, its governance, or student support systems as detailed in the PDF.)</em>
              </p>
              {/* Example: <p className="mt-2 text-sm text-muted-foreground">e.g., "The college utilized community spaces for learning and involved community members in advisory roles."</p> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Empowerment and Transfer Focus</h3>
              <p className="text-foreground leading-relaxed">
                A key goal was to provide pathways to four-year institutions and meaningful careers, empowering students through education.
                <em>(Highlight specific strategies or programs mentioned in the PDF that supported student transfer and career readiness.)</em>
              </p>
              {/* Example: <p className="mt-2 text-sm text-muted-foreground">e.g., "Articulation agreements were actively pursued with surrounding universities, and career workshops were integral to the student experience."</p> */}
            </div>
             <p className="text-sm text-foreground pt-2 italic">
              Please replace these prompts with specific details and quotes from the ERIC ED038131 document to fully bring the original Nairobi College's vision to life on this page.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">Our Mission & Vision for Today</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <Target className="w-8 h-8 text-accent" />
              <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                To provide accessible, high-quality online education that empowers students from diverse backgrounds to achieve their academic and career goals, fostering critical thinking, lifelong learning, and community engagement, inspired by the groundbreaking work of Nairobi College.
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
