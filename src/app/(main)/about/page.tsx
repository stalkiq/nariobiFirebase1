
import PageWrapper from '@/components/layout/PageWrapper';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Users, Target, BookHeart, Landmark, Home, MessageSquareQuote, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageWrapper
      title="About Nairobi Online College"
      description="Continuing a legacy of transformative education, deeply rooted in the innovative spirit and community focus of the original Nairobi College of East Palo Alto."
    >
      <section className="mb-12">
        <Card className="shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Our Heritage: The Original Nairobi College</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Nairobi Online College proudly carries forward the innovative spirit and community focus of the original Nairobi College, a pioneering community-run college founded in East Palo Alto, California, in 1969. This institution was born from a desire to make education "relevant to the ghetto community," serving an area that was approximately 80% Black. Founded by students and taught by community members, it quickly enrolled 120 students with 40 instructors offering 25 courses.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                As founder Bob Hoover stated, Nairobi College was "an alternative to tearing down... an alternative to an educational system which serves all people badly and people of color not at all." It aimed to show, as Pastor James Branch observed, "that rather than fight, we can create... It shows that we can do things for ourselves and gives us a sense of group pride."
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We are inspired by its commitment to community involvement, its unique operational structure, and the groundbreaking "College Without Walls" concept.
              </p>
            </div>
            <div className="relative h-64 md:h-full w-full">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Historical photo of Nairobi College students or campus"
                layout="fill"
                objectFit="cover"
                data-ai-hint="vintage college document"
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
            <CardDescription className="text-muted-foreground">
              The original Nairobi College operated on distinct principles that we strive to adapt and apply in our modern online context. These tenets, drawn from its foundational philosophy, guide our approach to education and community.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Relevant & Problem-Solving Curriculum</h3>
              <p className="text-foreground leading-relaxed mb-3">
                The curriculum was designed "to meet the needs of the community on an immediate level—solving local problems—as well as on a long-range level." Courses ranged from remedial work like Mary Hoover's "developmental skills" English class, focusing on basic spelling and syntax, to university transfer courses. As student Naiomi Moss explained, "There's more detail and explanation here at Nairobi; the people just seem to care more."
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                Innovative offerings included "black music, black legal problems and Swahili," alongside traditional subjects. Aaron Manganiello's "political education" course, held in his living room, related politics to education and economics, discussing issues like the reclamation of Alcatraz Island. The Journalism class planned to publish "Umoja" (Unity), a community newspaper, not just a school paper.
              </p>
              <p className="text-foreground leading-relaxed">
                A key component was practical experience: "each Nairobi student will be assigned four hours of daily work in the community—in health centers, schools and welfare offices." Bob Hoover emphasized, "We want to put people in positions where they are forced to develop community responsibility."
              </p>
            </div>
            <hr className="my-4 border-border" />
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Community-Centered Operations: "College Without Walls"</h3>
              <p className="text-foreground leading-relaxed mb-3">
                Nairobi College was "not a college community. It is a community college." There was no isolated campus or "Ivory Tower." As student Sam White described, driving through East Palo Alto, "See, this is our campus... our school church... our school variety store." Classes were held in churches, the teen center, instructors' homes, and students' apartments. The administration building was a "dilapidated white shingle house," indistinguishable from others on the block, yet "the people" knew where Nairobi College was.
              </p>
              <p className="text-foreground leading-relaxed">
                This integration was fundamental: "the citizens believe the school must be located in the community if it is to be focused on their needs." Leadership, like President Bob Hoover, was hands-on, seen "vacuuming a rug" or installing lavatories, joining the community in building the college.
              </p>
            </div>
            <hr className="my-4 border-border" />
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Empowerment, Access & Transfer Focus</h3>
              <p className="text-foreground leading-relaxed mb-3">
                A core goal was to "educate leaders who want to work within the community." The college recruited a diverse student body including "factory workers, day maids, housewives, as well as college age youths," many of whom worked during the day. For students like Aidamar Jones, a Black Brazilian mother, it was a chance: "For twelve years now I have been in this country with no chance to go to school."
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                It offered an "easier transition to college" for students like Duane Jones, with no charges for books and tuition. For others, like Albert Nelson, it was an alternative to the "tokenism" of other institutions: "Why travel fifty miles a day somewhere that they don't want you in the first place?"
              </p>
              <p className="text-foreground leading-relaxed">
                Despite its autonomy, Nairobi College secured transfer agreements with institutions like Central Michigan University, Goddard, and Antioch, demonstrating its commitment to student advancement. Stanford University also granted library privileges to its students.
              </p>
            </div>
             <hr className="my-4 border-border" />
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Student & Faculty Voices</h3>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground my-3">
                  "We learn things here you couldn't find in textbooks. These communities are rich in knowledge and culture—but they're not researched. You can't read about them in White libraries." - Audilita Morales, Student
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground my-3">
                  "The problem with black studies programs in most schools is that all the strings are held by White people." - Albert Nelson, Student
                </blockquote>
                 <blockquote className="border-l-4 border-primary pl-4 italic text-foreground my-3">
                  "This school is devoid of the intellectual aloofness... At Santa Clara, the mind is the most important thing; at Nairobi, we try to integrate the mind and the body; we try to apply what we've learned in class." - Cecil Reeves, Psychology Instructor
                </blockquote>
              <p className="text-foreground leading-relaxed">
                Faculty, including those from Stanford and San Jose State, were chosen by students and initially worked without pay, driven by the need and "overwhelming enthusiasm." The low teacher-student ratio (1:3) fostered close relationships, with instructors known on a first-name basis.
              </p>
            </div>
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
                To provide accessible, high-quality online education that empowers students from diverse backgrounds. We foster critical thinking, lifelong learning, and community engagement, inspired by the groundbreaking work of Nairobi College, which sought to make education a relevant, empowering force for its community and "give a sense of community to a shunted group of poor people."
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
                To be a leading online institution recognized for innovative teaching, student success, and continuing the legacy of relevant, transformative education pioneered by Nairobi College. We believe, as they did, that "the centrality of community interests is the formula for minority education," adapted for today's digital world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Users className="w-10 h-10 text-primary" />, title: "Community First", description: "Fostering a supportive, inclusive, and collaborative learning environment." },
            { icon: <BookHeart className="w-10 h-10 text-primary" />, title: "Relevant Education", description: "Offering practical, culturally responsive education addressing real-world needs." },
            { icon: <Home className="w-10 h-10 text-primary" />, title: "Accessible Learning", description: "Removing barriers and making education available to all, inspired by the 'College Without Walls'." },
            { icon: <GraduationCap className="w-10 h-10 text-primary" />, title: "Empowerment & Impact", description: "Equipping students with skills for success, leadership, and positive community change." },
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

    