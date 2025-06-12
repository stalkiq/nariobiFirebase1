import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { faculty, getFacultyById, type FacultyMember } from '@/lib/data/faculty';
import { courses as allCourses } from '@/lib/data/courses';
import { ChevronLeft, Mail, Phone, Briefcase, BookOpen, Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return faculty.map((member) => ({
    id: member.id,
  }));
}

export default function FacultyDetailPage({ params }: { params: { id: string } }) {
  const member = getFacultyById(params.id);

  if (!member) {
    return (
      <PageWrapper title="Faculty Member Not Found">
        <p>The faculty member you are looking for does not exist.</p>
        <Button asChild variant="link">
          <Link href="/faculty">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Faculty Directory
          </Link>
        </Button>
      </PageWrapper>
    );
  }

  const taughtCourses = allCourses.filter(course => member.coursesTaughtIds.includes(course.id));

  return (
    <PageWrapper>
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-6">
          <Link href="/faculty">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Faculty Directory
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-lg">
            <CardContent className="pt-6 text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 border-4 border-primary/20 shadow-md"
                data-ai-hint="professional headshot"
              />
              <h1 className="text-3xl font-headline font-bold text-primary">{member.name}</h1>
              <p className="text-accent font-medium">{member.title}</p>
              <p className="text-muted-foreground text-sm">{member.department}</p>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm text-left">
                <p className="flex items-center gap-2 text-foreground"><Mail size={16} className="text-primary" /> {member.email}</p>
                {member.phone && <p className="flex items-center gap-2 text-foreground"><Phone size={16} className="text-primary" /> {member.phone}</p>}
                {member.officeHours && <p className="flex items-center gap-2 text-foreground"><Briefcase size={16} className="text-primary" /> Office Hours: {member.officeHours}</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{member.bio}</p>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2"><Award size={24}/> Areas of Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.areasOfExpertise.map((area) => (
                  <Badge key={area} variant="secondary" className="text-sm">{area}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {taughtCourses.length > 0 && (
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><BookOpen size={24}/> Courses Taught</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {taughtCourses.map((course) => (
                    <li key={course.id}>
                      <Link href={`/courses/${course.id}`} className="font-medium text-accent hover:underline">
                        {course.title}
                      </Link>
                      <p className="text-sm text-muted-foreground">{course.shortDescription}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {member.publications && member.publications.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><ExternalLink size={24}/> Selected Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  {member.publications.map((pub, index) => (
                    <li key={index}>{pub}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
