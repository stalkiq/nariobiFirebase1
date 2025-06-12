import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { faculty, type FacultyMember } from '@/lib/data/faculty';
import { Mail, Briefcase, ArrowRight } from 'lucide-react';

export default function FacultyDirectoryPage() {
  return (
    <PageWrapper
      title="Faculty Directory"
      description="Meet our dedicated and experienced faculty members committed to your academic success."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member: FacultyMember) => (
          <Card key={member.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-64 bg-muted">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                data-ai-hint="professional portrait academic"
              />
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
              <CardDescription className="text-accent">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-1">
                <Briefcase size={16} /> {member.department}
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Mail size={16} /> {member.email}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                <Link href={`/faculty/${member.id}`}>
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
