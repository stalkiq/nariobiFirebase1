import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { courses, type Course } from '@/lib/data/courses';
import { faculty, getFacultyByIds } from '@/lib/data/faculty'; // Assuming faculty data is available
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function CourseCatalogPage() {
  return (
    <PageWrapper
      title="Course Catalog"
      description="Explore our diverse range of online courses designed to empower your learning journey."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course: Course) => {
          const courseFaculty = getFacultyByIds(course.instructorIds);
          return (
            <Card key={course.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="online learning education"
                />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{course.department}</Badge>
                <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                <CardDescription className="text-sm h-16 overflow-hidden text-ellipsis">
                  {course.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-sm text-muted-foreground">
                  <p><strong>Credit Hours:</strong> {course.creditHours}</p>
                  <p><strong>Instructors:</strong> {courseFaculty.map(f => f.name).join(', ') || 'TBA'}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/courses/${course.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </PageWrapper>
  );
}
