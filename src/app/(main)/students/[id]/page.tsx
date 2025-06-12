import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { students, getStudentById, type Student } from '@/lib/data/students';
import { courses as allCourses } from '@/lib/data/courses';
import { ChevronLeft, Mail, GraduationCap, Star, BarChart3, Users, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return students.map((student) => ({
    id: student.id,
  }));
}

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  const student = getStudentById(params.id);

  if (!student) {
    return (
      <PageWrapper title="Student Not Found">
        <p>The student profile you are looking for does not exist.</p>
        <Button asChild variant="link">
          <Link href="/students">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Student Life
          </Link>
        </Button>
      </PageWrapper>
    );
  }

  const enrolledCourses = allCourses.filter(course => student.enrolledCourseIds.includes(course.id));

  return (
    <PageWrapper>
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-6">
          <Link href="/students">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Student Life
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-lg">
            <CardContent className="pt-6 text-center">
              <Image
                src={student.image}
                alt={student.name}
                width={180}
                height={180}
                className="rounded-full mx-auto mb-4 border-4 border-accent/30 shadow-md"
                data-ai-hint="student headshot diverse"
              />
              <h1 className="text-3xl font-headline font-bold text-primary">{student.name}</h1>
              <p className="text-accent font-medium">{student.program}</p>
              <p className="text-muted-foreground text-sm">Year {student.year}</p>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm text-left">
                <p className="flex items-center gap-2 text-foreground"><Mail size={16} className="text-primary" /> {student.email}</p>
                <Button variant="outline" className="w-full mt-3">
                    <Users size={16} className="mr-2"/> Connect (Placeholder)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{student.bio}</p>
            </CardContent>
          </Card>

          {student.interests && student.interests.length > 0 && (
            <Card className="mb-8 shadow-lg">
                <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><Star size={24}/> Interests</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex flex-wrap gap-2">
                    {student.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="text-sm bg-accent/20 text-accent-foreground hover:bg-accent/30">{interest}</Badge>
                    ))}
                </div>
                </CardContent>
            </Card>
          )}

          {enrolledCourses.length > 0 && (
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><GraduationCap size={24}/> Enrolled Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {enrolledCourses.map((course) => (
                    <li key={course.id} className="p-3 border rounded-md hover:bg-secondary/50 transition-colors">
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

          {student.achievements && student.achievements.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2"><BarChart3 size={24}/> Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  {student.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
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
