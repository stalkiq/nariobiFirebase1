import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { courses, type Course } from '@/lib/data/courses';
import { getFacultyByIds, type FacultyMember } from '@/lib/data/faculty';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, UserCircle, CalendarDays, BookCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return (
      <PageWrapper title="Course Not Found">
        <p>The course you are looking for does not exist.</p>
        <Button asChild variant="link">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Link>
        </Button>
      </PageWrapper>
    );
  }

  const courseFaculty = getFacultyByIds(course.instructorIds);

  return (
    <PageWrapper>
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-6">
          <Link href="/courses">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Link>
        </Button>
        <Badge variant="secondary" className="mb-2">{course.department}</Badge>
        <h1 className="text-4xl font-headline font-bold text-primary mb-3">{course.title}</h1>
        <p className="text-lg text-muted-foreground">{course.shortDescription}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={course.image}
                alt={course.title}
                width={800}
                height={400}
                className="rounded-md mb-6 object-cover w-full max-h-96"
                data-ai-hint="classroom lecture notes"
              />
              <p className="text-foreground leading-relaxed">{course.longDescription}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Learning Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {course.prerequisites && course.prerequisites.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl">Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <BookCheck className="h-5 w-5 text-primary" />
                <span><strong>Credit Hours:</strong> {course.creditHours}</span>
              </div>
              <Separator />
              <div>
                <h3 className="text-md font-semibold mb-2 text-primary flex items-center gap-2">
                  <UserCircle className="h-5 w-5" />
                  Instructors
                </h3>
                {courseFaculty.length > 0 ? (
                  courseFaculty.map((faculty: FacultyMember) => (
                    <Link key={faculty.id} href={`/faculty/${faculty.id}`} className="block hover:underline text-foreground mb-1">
                      {faculty.name}
                    </Link>
                  ))
                ) : (
                  <p className="text-muted-foreground">To be announced</p>
                )}
              </div>
              <Separator />
               {/* Placeholder for enrollment / payment */}
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                Enroll Now (Placeholder)
              </Button>
               <Button variant="outline" className="w-full mt-2">
                Add to Wishlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
