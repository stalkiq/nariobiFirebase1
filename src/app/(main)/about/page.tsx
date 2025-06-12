
import PageWrapper from '@/components/layout/PageWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Users, Target, BookHeart, Landmark, Home, MessageSquareQuote, GraduationCap, ChevronLeft, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <PageWrapper
      title="About Nairobi Online College"
      description="Continuing a legacy of transformative education, deeply rooted in the innovative spirit and community focus of the original Nairobi College of East Palo Alto."
    >
      <Button asChild variant="outline" className="mb-6">
        <Link href="/dashboard">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
      </Button>
      <section className="mb-12">
        <Card className="shadow-lg overflow-hidden rounded-none border-border">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">Our Heritage: The Original Nairobi College (1969)</h2>
              <p className="text-sm text-foreground mb-3 leading-relaxed">
                Nairobi Online College proudly carries forward the innovative spirit and community focus of the original Nairobi College, a pioneering community-run college founded in East Palo Alto, California, in 1969. This institution was born from a desire to make education "relevant to the ghetto community," serving an area that was approximately 80% Black. Founded by students and taught by community members, it quickly enrolled 120 students with 40 instructors offering 25 courses.
              </p>
              <p className="text-sm text-foreground mb-3 leading-relaxed">
                As founder Bob Hoover stated, Nairobi College was "an alternative to tearing down... an alternative to an educational system which serves all people badly and people of color not at all." It aimed to show, as Pastor James Branch observed, "that rather than fight, we can create... It shows that we can do things for ourselves and gives us a sense of group pride."
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                The administration building was a "dilapidated white shingle house... Nothing distinguishes the house from any other on the block, nothing but the daylong-nightlong stream of visitors. But 'the people' know where Nairobi College is." This intimate connection with the community is a core inspiration.
              </p>
            </div>
            <div className="relative h-56 md:h-full w-full">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Historical photo of Nairobi College students or campus"
                layout="fill"
                objectFit="cover"
                data-ai-hint="vintage college document"
                className="rounded-none"
              />
            </div>
          </div>
        </Card>
      </section>

      <Card className="mb-6 shadow-lg rounded-none border-border">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Core Tenets from Our Legacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-foreground leading-relaxed">
          <p>The original Nairobi College operated on several groundbreaking principles that we strive to uphold:</p>
          <div>
            <h4 className="font-semibold text-md text-accent mb-1 flex items-center"><Users className="w-5 h-5 mr-2" />Community-Run & Focused:</h4>
            <p>"Nairobi College is not in East Africa, but in East Palo Alto, California; it is a community-run college for 'people of color.' The classes are taught by people who live there. The board of trustees is composed equally of students, faculty and representatives of the community-at-large."</p>
          </div>
          <div>
            <h4 className="font-semibold text-md text-accent mb-1 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Education for Relevance & Liberation:</h4>
            <p>"The curriculum is designed to meet the needs of the community on an immediate level— solving local problems—as well as on a long-range level- motivating study in the professions which will later serve to upgrade the area." It was described as "a school of Black studies or of Chicano studies only in the sense that most schools today are schools of White studies."</p>
          </div>
          <div>
            <h4 className="font-semibold text-md text-accent mb-1 flex items-center"><Home className="w-5 h-5 mr-2" />College Without Walls:</h4>
            <p>"There is no 'physical plant,' no isolated campus, no Ivory Tower, at Nairobi. The school grounds extend to the boundaries of East Palo Alto. Classes are held in churches, the teen center, instructors' homes, student's apartments."</p>
          </div>
          <div>
            <h4 className="font-semibold text-md text-accent mb-1 flex items-center"><Landmark className="w-5 h-5 mr-2" />Hands-On, Community-Built Ethos:</h4>
            <p>"Nails are banged into walls; desks painted; screens must be installed. Students and teachers pitch in between classes." This hands-on, community-built approach fostered a deep sense of ownership and collective pride.</p>
          </div>
          <div>
            <h4 className="font-semibold text-md text-accent mb-1 flex items-center"><Briefcase className="w-5 h-5 mr-2" />Integral Community Service:</h4>
            <p>A core principle was direct community engagement. As stated in historical records, "In addition to the normal load of classes, each Nairobi student will be assigned four hours of daily work in the community--in health centers, schools and welfare offices." Our online college honors this by requiring students to complete significant community work to graduate, fostering a direct application of learning and ensuring a continued commitment to community betterment.</p>
          </div>
        </CardContent>
      </Card>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">Our Mission & Vision for Today</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-xl transition-shadow rounded-none border-border">
            <CardHeader className="flex flex-row items-center gap-2 p-4">
              <Target className="w-6 h-6 text-accent" />
              <CardTitle className="text-lg text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-foreground">
                To provide accessible, high-quality online education that empowers students from diverse backgrounds. We foster critical thinking, lifelong learning, and community engagement, inspired by the groundbreaking work of Nairobi College, which sought to make education a relevant, empowering force for its community and "give a sense of community to a shunted group of poor people."
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow rounded-none border-border">
            <CardHeader className="flex flex-row items-center gap-2 p-4">
              <Lightbulb className="w-6 h-6 text-accent" />
              <CardTitle className="text-lg text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-foreground">
                To be a leading online institution recognized for innovative teaching, student success, and continuing the legacy of relevant, transformative education pioneered by Nairobi College. We believe, as they did, that "the centrality of community interests is the formula for minority education," adapted for today's digital world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
}
