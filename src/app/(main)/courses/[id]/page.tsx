
import Link from 'next/link';
import { courses, type Course } from '@/lib/data/courses';
import { getFacultyByIds, type FacultyMember } from '@/lib/data/faculty';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Search, FileText, Pause, Edit3, BookOpen, UserCircle, CalendarDays, BookCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  // Exclude comp3400 as it has its own dedicated page
  return courses.filter(course => course.id !== 'comp3400').map((course) => ({
    id: course.id,
  }));
}

interface CoursePlayerModule {
  id: string;
  title: string;
  icon: React.ElementType;
  isActive?: boolean;
}

// Placeholder modules - adapt as needed or make dynamic if course data supports it
const modules: CoursePlayerModule[] = [
  { id: 'intro', title: 'Introduction', icon: FileText, isActive: true }, // Assume intro is active by default
  { id: 'm1', title: 'Module 1', icon: FileText },
  { id: 'm2', title: 'Module 2', icon: FileText },
  { id: 'm3', title: 'Module 3', icon: FileText },
  { id: 'conclusion', title: 'Conclusion & Next Steps', icon: Pause },
  { id: 'assessment', title: 'Self-Assessment (Optional)', icon: Edit3 },
];

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-course-page-bg text-course-text-primary p-4">
        <h1 className="text-2xl mb-4">Course Not Found</h1>
        <p className="mb-4">The course you are looking for does not exist.</p>
        <Button asChild className="bg-course-green-button-bg text-course-green-button-foreground hover:bg-course-green-button-hover-bg">
          <Link href="/courses">Back to Course Catalog</Link>
        </Button>
      </div>
    );
  }

  const courseFaculty = getFacultyByIds(course.instructorIds);
  const instructorNames = courseFaculty.map(f => f.name).join(', ') || 'TBA';

  return (
    <div className="flex flex-col min-h-screen bg-course-page-bg text-course-text-primary">
      {/* Internal Page Header */}
      <header className="bg-course-header-bg p-3 flex justify-between items-center border-b border-course-border-color shadow-md">
        <div className="flex items-center gap-1">
          <Button variant="ghost" className="text-course-text-primary bg-course-active-item-bg p-2 h-auto text-sm">Outline</Button>
        </div>
        <div className="text-sm font-semibold text-course-text-secondary truncate px-2" title={course.title}>
          {course.title.toUpperCase()} - OVERVIEW
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-course-text-tertiary hover:text-course-text-primary hover:bg-course-active-item-bg">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-course-green-button-bg hover:text-course-green-button-foreground hover:bg-course-green-button-hover-bg">
            <Play className="h-5 w-5 fill-current" />
          </Button>
        </div>
      </header>

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-col md:flex-row flex-1 min-h-0"> {/* Adjusted for mobile stacking */}
        {/* Left Sidebar */}
        <aside className="w-full md:w-72 bg-course-sidebar-bg p-4 space-y-4 border-b md:border-b-0 md:border-r border-course-border-color overflow-y-auto md:shrink-0"> {/* Adjusted for mobile */}
          <div className="flex items-center gap-2 text-course-text-secondary p-2 border border-course-border-color rounded-md">
            <Search className="h-4 w-4" />
            <span>Search Modules...</span>
          </div>
          <nav>
            <ul className="space-y-1">
              {modules.map(mod => (
                <li key={mod.id}>
                  <Link href="#" className={`flex items-center gap-3 p-2.5 rounded-md text-sm hover:bg-course-active-item-bg transition-colors ${mod.isActive ? 'bg-course-active-item-bg text-course-text-primary font-medium' : 'text-course-text-secondary'}`}>
                    <mod.icon className={`h-5 w-5 ${mod.isActive ? 'text-course-green-button-bg': ''}`} />
                    <span>{mod.title}</span>
                     {mod.id !== 'intro' && mod.id !== 'conclusion' && mod.id !== 'assessment' && (
                        <ChevronRight className="h-4 w-4 ml-auto text-course-text-tertiary" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
           <Separator className="border-course-border-color my-4"/>
            <Button asChild variant="outline" className="w-full text-course-text-secondary border-course-border-color hover:bg-course-active-item-bg hover:text-course-text-primary">
                <Link href="/courses">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back to Catalog
                </Link>
            </Button>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 p-6 md:p-8 bg-course-content-area-bg overflow-y-auto">
          <Badge variant="secondary" className="mb-2 bg-course-active-item-bg text-course-text-secondary border-course-border-color">{course.department}</Badge>
          <h1 className="text-3xl font-bold text-course-text-primary mb-1">{course.title}</h1>
          <p className="text-course-text-secondary mb-6">{course.shortDescription}</p>
          
          <div className="bg-course-green-info-bg text-course-green-info-foreground p-6 rounded-md mb-8 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Course Details</h2>
              <BookOpen className="h-8 w-8 opacity-70" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">{instructorNames}</p>
                <p className="text-sm opacity-80">Instructor(s)</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Online</p> {/* Schedule placeholder */}
                <p className="text-sm opacity-80">Schedule</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{course.creditHours}</p>
                <p className="text-sm opacity-80">Credit Hours</p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-end items-center">
            {/* <Button variant="outline" className="text-course-text-secondary border-course-border-color hover:bg-course-active-item-bg hover:text-course-text-primary">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Outline
            </Button> */}
            <Button className="bg-course-green-button-bg text-course-green-button-foreground hover:bg-course-green-button-hover-bg">
              Next Module <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><FileText size={20}/> Detailed Description</h3>
              <p className="text-sm leading-relaxed">{course.longDescription}</p>
            </section>

            <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><BookCheck size={20}/> Learning Outcomes</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </section>
            
            {course.prerequisites && course.prerequisites.length > 0 && (
              <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Edit3 size={20}/> Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    {course.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                    ))}
                </ul>
              </section>
            )}

            <Separator className="border-course-border-color my-6"/>
            
            <div className="flex gap-4">
                 <Button className="flex-1 bg-course-green-button-bg text-course-green-button-foreground hover:bg-course-green-button-hover-bg py-3 text-base">
                    Enroll Now (Placeholder)
                </Button>
                <Button variant="outline" className="flex-1 text-course-text-secondary border-course-border-color hover:bg-course-active-item-bg hover:text-course-text-primary py-3 text-base">
                    Add to Wishlist
                </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
