
import PageWrapper from '@/components/layout/PageWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Users, Target, BookHeart, Landmark, Home, MessageSquareQuote, GraduationCap, ChevronLeft, Edit, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function HistoryPage() {
  return (
    <PageWrapper
      title="History of Nairobi College"
      description="An overview of the founding, principles, and impact of the original Nairobi College of East Palo Alto (1969-1981)."
    >
      <div className="flex justify-between items-center mb-6">
        <Button asChild variant="outline">
          <Link href="/dashboard">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
        <Button variant="secondary" disabled>
          <Edit className="mr-2 h-4 w-4" /> Edit this page (Placeholder)
        </Button>
      </div>

      <article className="bg-card p-6 md:p-8 rounded-lg shadow-lg text-foreground">
        <header className="mb-8 pb-4 border-b border-border">
          <h1 className="text-3xl font-bold text-primary mb-2">Nairobi College (1969-1981)</h1>
          <p className="text-sm text-muted-foreground">From a community vision to a legacy of transformative education.</p>
        </header>

        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Introduction</h2>
          <p className="text-sm leading-relaxed mb-3">
            Nairobi College was a small, radical left junior college for ethnic minority students in East Palo Alto, California, active from 1969 until approximately 1981. It proudly carried forward an innovative spirit and community focus, born from a desire to make education "relevant to the ghetto community," serving an area that was approximately 80% Black.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Founded by students and taught by community members, it quickly enrolled 120 students with 40 instructors offering 25 courses. As founder Bob Hoover stated, Nairobi College was "an alternative to tearing down... an alternative to an educational system which serves all people badly and people of color not at all." It aimed to show, as Pastor James Branch observed, "that rather than fight, we can create... It shows that we can do things for ourselves and gives us a sense of group pride."
          </p>
          <p className="text-sm leading-relaxed">
            The administration building was a "dilapidated white shingle house... Nothing distinguishes the house from any other on the block, nothing but the daylong-nightlong stream of visitors. But 'the people' know where Nairobi College is." This intimate connection with the community was a core inspiration. Nairobi College also had satellite campuses throughout the San Francisco Bay Area and was affiliated with the Nairobi Day School, a private preschool founded in 1966.
          </p>
        </section>

        <Separator className="my-8" />

        <section id="background" className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Background & Context</h2>
          <p className="text-sm leading-relaxed mb-3">
            The College was part of a movement for ethnic minority groups in the United States to have dedicated academic programs to train themselves in the theory and practice of liberation, resistance, and revolution. These programs were often referred to as "Third World colleges," which sought to practice the principles of self-determination and community empowerment while teaching left-radical ideology in rejection of the perceived bourgeois ideology and white control of existing educational institutions.
          </p>
          <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground my-4">
            "It is necessary for us to develop a new frame of reference which transcends the limits of white concepts. It is necessary for us to develop and maintain a total intellectual offensive against the false universality of white concepts." - Lerone Bennett, Jr.
          </blockquote>
        </section>
        
        <Separator className="my-8" />

        <section id="core-tenets" className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-3">Core Tenets & Founding Principles</h2>
          <p className="text-sm text-foreground leading-relaxed mb-4">The original Nairobi College operated on several groundbreaking principles:</p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-accent mb-1 flex items-center"><Users className="w-5 h-5 mr-2" />Community-Run & Focused:</h3>
              <p className="text-sm text-foreground leading-relaxed">"Nairobi College is not in East Africa, but in East Palo Alto, California; it is a community-run college for 'people of color.' The classes are taught by people who live there. The board of trustees is composed equally of students, faculty and representatives of the community-at-large."</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-accent mb-1 flex items-center"><Lightbulb className="w-5 h-5 mr-2" />Education for Relevance & Liberation:</h3>
              <p className="text-sm text-foreground leading-relaxed">"The curriculum is designed to meet the needs of the community on an immediate level— solving local problems—as well as on a long-range level- motivating study in the professions which will later serve to upgrade the area." It was described as "a school of Black studies or of Chicano studies only in the sense that most schools today are schools of White studies."</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-accent mb-1 flex items-center"><Home className="w-5 h-5 mr-2" />College Without Walls:</h3>
              <p className="text-sm text-foreground leading-relaxed">"There is no 'physical plant,' no isolated campus, no Ivory Tower, at Nairobi. The school grounds extend to the boundaries of East Palo Alto. Classes are held in churches, the teen center, instructors' homes, student's apartments."</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-accent mb-1 flex items-center"><Landmark className="w-5 h-5 mr-2" />Hands-On, Community-Built Ethos:</h3>
              <p className="text-sm text-foreground leading-relaxed">"Nails are banged into walls; desks painted; screens must be installed. Students and teachers pitch in between classes." This hands-on, community-built approach fostered a deep sense of ownership and collective pride.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-accent mb-1 flex items-center"><Briefcase className="w-5 h-5 mr-2" />Integral Community Service:</h3>
              <p className="text-sm text-foreground leading-relaxed">A core principle was direct community engagement. As stated in historical records, "In addition to the normal load of classes, each Nairobi student will be assigned four hours of daily work in the community--in health centers, schools and welfare offices." This commitment ensured a direct application of learning and a continued dedication to community betterment.</p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />
        
        <section id="legacy" className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-3">Legacy</h2>
            <p className="text-sm leading-relaxed mb-3">
                Nairobi Online College today strives to embody these historical tenets, adapting them for the digital age. The mission remains to provide accessible, high-quality education that empowers students from diverse backgrounds, fostering critical thinking, lifelong learning, and community engagement. The vision is to be a leading online institution recognized for innovative teaching and student success, continuing the legacy of relevant, transformative education pioneered by the original Nairobi College.
            </p>
        </section>

        <footer className="mt-12 pt-4 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
                Content compiled from historical records and institutional memory. Last updated: {new Date().toLocaleDateString()}.
            </p>
        </footer>
      </article>
    </PageWrapper>
  );
}
