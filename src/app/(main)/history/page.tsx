
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Home, Landmark, Briefcase, ChevronLeft, Edit, History as HistoryIcon, BookOpen, BarChart, FileText, Users2, ShieldQuestion, MessageSquareText, University, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function HistoryPage() {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'background', title: 'Background & Context' },
    { id: 'core-tenets', title: 'Core Tenets & Founding Principles' },
    { id: 'academic-life', title: 'Academic Life & Curriculum' },
    { id: 'college-and-community', title: 'The College & The Community' },
    { id: 'community-programs', title: 'Community Engagement Programs' },
    { id: 'impact-outcomes', title: 'Impact & Student Outcomes' },
    { id: 'philosophy', title: 'Nairobi College Philosophy' },
    { id: 'legacy', title: 'Legacy' },
    { id: 'contact-info', title: 'Historical Contact Information' },
  ];

  return (
    <PageWrapper
      title="History of Nairobi College"
      description="An overview of the founding, principles, and impact of the original Nairobi College of East Palo Alto (1969-1981)."
    >
      <div className="flex justify-between items-center mb-6">
        <Button asChild variant="outline">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
        <Button variant="secondary" disabled>
          <Edit className="mr-2 h-4 w-4" /> Edit this page (Placeholder)
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Contents Menu */}
        <aside className="w-full md:w-1/4 lg:w-1/5 md:sticky md:top-20 h-fit">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-center">
                <HistoryIcon className="w-5 h-5 mr-2" /> Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav>
                <ul className="space-y-2 text-sm">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-accent hover:underline hover:text-primary transition-colors block py-1"
                      >
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Main Article Content */}
        <article className="w-full md:w-3/4 lg:w-4/5 bg-card p-6 md:p-8 rounded-lg shadow-lg text-foreground">
          <header className="mb-8 pb-4 border-b border-border">
            <h1 className="text-3xl font-bold text-primary mb-2">Nairobi College (1969-1981)</h1>
            <p className="text-sm text-muted-foreground">From a community vision to a legacy of transformative education.</p>
          </header>

          <section id="introduction" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><FileText className="w-6 h-6 mr-2 text-accent" />1. Introduction</h2>
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

          <section id="background" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><Users2 className="w-6 h-6 mr-2 text-accent" />2. Background & Context</h2>
            <p className="text-sm leading-relaxed mb-3">
              The College was part of a movement for ethnic minority groups in the United States to have dedicated academic programs to train themselves in the theory and practice of liberation, resistance, and revolution. These programs were often referred to as "Third World colleges," which sought to practice the principles of self-determination and community empowerment while teaching left-radical ideology in rejection of the perceived bourgeois ideology and white control of existing educational institutions.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground my-4">
              "It is necessary for us to develop a new frame of reference which transcends the limits of white concepts. It is necessary for us to develop and maintain a total intellectual offensive against the false universality of white concepts." - Lerone Bennett, Jr.
            </blockquote>
          </section>

          <Separator className="my-8" />

          <section id="core-tenets" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><Lightbulb className="w-6 h-6 mr-2 text-accent" />3. Core Tenets & Founding Principles</h2>
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
                <p className="text-sm text-foreground leading-relaxed">A core principle was direct community engagement. As stated in historical records, "In addition to the normal load of classes, each Nairobi student will be assigned four hours of daily work in the community--in health centers, schools and welfare offices." This commitment ensured a direct application of learning and a continued dedication to community betterment. "You learn about people by helping them," explains Hoover. "We want to put people in positions where they are forced to develop community responsibility. I think they'll learn that it's fun to help other people."</p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section id="academic-life" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><BookOpen className="w-6 h-6 mr-2 text-accent" />4. Academic Life & Curriculum</h2>
            <p className="text-sm leading-relaxed mb-3">
              A key aspect of Nairobi College's approach was its dedication to addressing the specific educational needs of its students. Mary Hoover, for instance, led a Developmental Skills class. Every Tuesday and Thursday from 3-5 PM, she drilled her students out of the lingual rut often ignored by inadequate teachers in ghetto high schools. Basic spelling, pronunciation, and syntax were reviewed; the students repeated words after their teacher and took dictation. They were not embarrassed by the remedial nature of much of the subject; they were more concerned with learning it.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground my-4">
              One student, Naiomi Moss, explains, "The class is a real help. There's more detail and explanation here at Nairobi; the people just seem to care more than at other schools. They get down to the basic problems."
            </blockquote>
            <p className="text-sm leading-relaxed mb-3">
              Later the students discussed the rationale for the class itself. "This is 'political education,' not 'political science,'" they insisted. "It's not an exercise in polemics," their teacher explained. "We relate politics to other things--education, economics. Sometimes we spend the whole class discussing a sociological issue."
            </p>
            <p className="text-sm leading-relaxed mb-3">
              The journalism class had its home base in the office of a defunct underground newspaper. Surrounded by piles of old newsprint, by posters of Ho and of the Cleavers, students sat at tables typing their copy. The newspaper was to be called Umoja ("unity" in Swahili). Umoja's founders, Duane Jones and Sam White, recruited articles from all segments of the community. "Do your thing!" their pamphlet read, "To fulfill the role of the people's voice, the participation of everybody is necessary--writing, art, photography, selling, rapping, shit work. Do your thing!"
            </p>
            <p className="text-sm leading-relaxed">
              More traditional college fare such as philosophy, electronic theory, economics, physics, anthropology, and art were also taught at Nairobi, alongside innovative offerings like black music, black legal problems, and Swahili.
            </p>
          </section>

          <Separator className="my-8" />

          <section id="college-and-community" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><University className="w-6 h-6 mr-2 text-accent" />5. The College & The Community</h2>
            <p className="text-sm leading-relaxed mb-3">
              Nairobi College was a "community college" in the truest sense. The community was its campus. Other than the main office building and one other building, the college used the facilities of other community institutions for its classroom facilities. Community members were on the college's Board of Directors.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              The relationship between the college and the public educational institutions was good, particularly at the elementary level. "Our tutors work in the elementary school, and we often use their facilities." However, relations were not very good with the public high school, as it was governed by a board with no representation from the community on it, and thus did not represent the community.
            </p>
            <p className="text-sm leading-relaxed">
              When Nairobi College described itself as a community college, it did not refer to only the local community; "we mean the entire Pan-African community. Our community service program serves not only East Palo Alto but brothers who are in prisons over the state of California, brothers and sisters from the Continent and the Caribbean."
            </p>
          </section>

          <Separator className="my-8" />

          <section id="community-programs" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><MessageSquareText className="w-6 h-6 mr-2 text-accent" />6. Community Engagement Programs</h2>
            <p className="text-sm text-foreground leading-relaxed mb-4">The community service program operated several key projects:</p>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-md text-accent">1. Prison Program</h4>
                <p>The prison program operated for 25 months. During this time, 15 individuals were paroled to the college, and impressively, not one returned to prison after their arrival at Nairobi College.</p>
              </div>
              <div>
                <h4 className="font-semibold text-md text-accent">2. Research Institute</h4>
                <p>This institute was involved in developing a new model for financing education for the state of California, potentially having a profound effect on the education of all Black children in the state.</p>
              </div>
              <div>
                <h4 className="font-semibold text-md text-accent">3. Work-Study Program</h4>
                <p>This program allowed 70 students to work in various community agencies, such as local schools, juvenile probation offices, the library, and the neighborhood health center, at little cost to the employer.</p>
              </div>
              <div>
                <h4 className="font-semibold text-md text-accent">4. African Student Program</h4>
                <p>The college had approximately eight students from the African continent and three from the Caribbean. Five faculty members were also from the Continent. This program was seen as a contribution to the Pan-African movement, providing educational access for individuals who would return to their countries with new skills. Plans were underway to expand this into an exchange program.</p>
              </div>
              <div>
                <h4 className="font-semibold text-md text-accent">5. Cultural Program for Local Community</h4>
                <p>Nairobi's musical groups held several concerts for the community. The college also brought speakers and showed films on Africa.</p>
              </div>
              <div>
                <h4 className="font-semibold text-md text-accent">6. Community Education</h4>
                <p>The college hosted a series of lectures on South Africa, a Pan-African conference, and a statewide conference for Black people in California. It was also developing a Youth Program and a Drug Program for the local community.</p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          <section id="impact-outcomes" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><BarChart className="w-6 h-6 mr-2 text-accent" />7. Impact & Student Outcomes</h2>
            <p className="text-sm leading-relaxed mb-3">
              Fifteen to twenty Nairobi College students transferred to four-year colleges, achieving a cumulative grade point average of 3.1 at these institutions. Many community members significantly improved their basic skills in reading and math.
            </p>
            <p className="text-sm leading-relaxed">
              These achievements were measured in two ways. First, the director tracked students who transferred and their academic records. Second, standardized reading tests revealed that students in reading classes typically advanced by 20 percentile points or two grade levels each quarter.
            </p>
          </section>

          <Separator className="my-8" />

          <section id="philosophy" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><ShieldQuestion className="w-6 h-6 mr-2 text-accent" />8. Nairobi College Philosophy</h2>
            <div className="bg-secondary/30 p-4 rounded-md text-sm">
              <h3 className="font-semibold text-lg text-accent mb-2">PREAMBLE:</h3>
              <p className="leading-relaxed mb-3">
                We are an African people, by definition and by choice. We reaffirm our traditional African heritage, the essence of an ethos which has sustained us through an alien experience, and declare it to be the foundation upon which the contemporary African emerges. We must strive for commitment to the spiritual, political, and economic liberation of African people and the acceptance of the Seven Axioms of Blackness as the fundamental set of principles which guide our lives and give direction to our actions. We must be motivated to action by a belief in ourselves, and undying love for our people. And we must be continually involved in the process of acquiring the knowledge and discipline necessary to the struggle of building an African Nation.
              </p>
              <h3 className="font-semibold text-lg text-accent mb-2">Statement of Purpose (Nia) and Declaration of Self-Determination (Kujichagulia):</h3>
              <ol className="list-decimal list-inside space-y-1 leading-relaxed">
                <li>Recruit and train leaders to deal with problems scientifically and guide and develop Black communities politically, economically and socially.</li>
                <li>Serve the community by bringing human, economic and cultural resources to it.</li>
                <li>Teach academic and survival skills.</li>
                <li>Help people to develop where and how they can best use their skills.</li>
                <li>Have faith in and deal with all Black people, and not a select few.</li>
                <li>Train people how to relate to the total Black struggle.</li>
                <li>Relate the Black struggle to other Third-World struggles.</li>
                <li>Achieve the seven principles of the Nguzo Saba. (See Nairobi Code.)</li>
                <li>Develop a value system that is humanistic rather than materialistic.</li>
                <li>Develop an extended family oriented concept--that we help others while we help ourselves.</li>
              </ol>
            </div>
          </section>

          <Separator className="my-8" />

          <section id="legacy" className="mb-8 scroll-mt-16">
              <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><HistoryIcon className="w-6 h-6 mr-2 text-accent" />9. Legacy</h2>
              <p className="text-sm leading-relaxed mb-3">
                  Nairobi Online College today strives to embody these historical tenets, adapting them for the digital age. The mission remains to provide accessible, high-quality education that empowers students from diverse backgrounds, fostering critical thinking, lifelong learning, and community engagement. The vision is to be a leading online institution recognized for innovative teaching and student success, continuing the legacy of relevant, transformative education pioneered by the original Nairobi College.
              </p>
          </section>

           <Separator className="my-8" />

          <section id="contact-info" className="mb-10 scroll-mt-16">
            <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center"><Mail className="w-6 h-6 mr-2 text-accent" />10. Historical Contact Information</h2>
            <p className="text-sm leading-relaxed">
              For further information (historical reference):<br />
              Mary Hoover, Chairman<br />
              Communications Department<br />
              Nairobi College<br />
              635 Donohoe Street<br />
              East Palo Alto, California
            </p>
          </section>

          <footer className="mt-12 pt-4 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                  Content compiled from historical records and institutional memory. Last updated: {new Date().toLocaleDateString()}.
              </p>
          </footer>
        </article>
      </div>
    </PageWrapper>
  );
}

