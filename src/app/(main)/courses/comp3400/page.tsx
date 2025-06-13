
import Link from 'next/link';
import { courses, type Course } from '@/lib/data/courses';
import { getFacultyByIds, type FacultyMember } from '@/lib/data/faculty';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Search, FileText, Pause, Edit3, CheckCircle2, BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator'; // Using Separator for visual breaks

// This function is needed if you want to statically generate this page
// If you are fetching data dynamically in the component, it might not be strictly necessary
// For now, let's assume we can get course data easily.
// export async function generateStaticParams() {
//   return [{ id: 'comp3400' }];
// }

const courseId = 'comp3400';

interface CoursePlayerModule {
  id: string;
  title: string;
  icon: React.ElementType;
  subModules?: CoursePlayerModule[];
  isActive?: boolean; // To highlight the current module
}

const modules: CoursePlayerModule[] = [
  { id: 'intro', title: 'Introduction', icon: FileText },
  { 
    id: 'm1', 
    title: 'Module 1 - Spelling & Pronunciation', 
    icon: FileText,
    isActive: true, // Assuming this is the active section for demo
  },
  { id: 'm2', title: 'Module 2 - Syntax Review', icon: FileText },
  { id: 'm3', title: 'Module 3 - Dictation Practice', icon: FileText },
  { id: 'm4', title: 'Module 4 - Student Voices & Application', icon: FileText },
  { id: 'conclusion', title: 'Conclusion', icon: Pause },
  { id: 'assessment', title: 'Post-Course Reflection', icon: Edit3 },
];


export default function Comp3400CoursePage() {
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-course-page-bg text-course-text-primary p-4">
        <h1 className="text-2xl mb-4">Course Not Found</h1>
        <p className="mb-4">The course "Developmental Skills (COMP3400)" could not be loaded.</p>
        <Button asChild className="bg-course-green-button-bg text-course-green-button-foreground hover:bg-course-green-button-hover-bg">
          <Link href="/courses">Back to Course Catalog</Link>
        </Button>
      </div>
    );
  }

  const courseFaculty = getFacultyByIds(course.instructorIds);
  const instructorName = courseFaculty.length > 0 ? courseFaculty[0].name : 'TBA';

  return (
    <div className="flex flex-col min-h-screen bg-course-page-bg text-course-text-primary">
      {/* Internal Page Header */}
      <header className="bg-course-header-bg p-3 flex justify-between items-center border-b border-course-border-color shadow-md">
        <div className="flex items-center gap-1">
          <Button variant="ghost" className="text-course-text-secondary hover:text-course-text-primary hover:bg-course-active-item-bg p-2 h-auto text-sm">Account</Button>
          <Button variant="ghost" className="text-course-text-secondary hover:text-course-text-primary hover:bg-course-active-item-bg p-2 h-auto text-sm">Home</Button>
          <Button variant="ghost" className="text-course-text-secondary hover:text-course-text-primary hover:bg-course-active-item-bg p-2 h-auto text-sm bg-course-active-item-bg">Outline</Button>
        </div>
        <div className="text-sm font-semibold text-course-text-secondary">
          DEVELOPMENTAL SKILLS - MODULE 1
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
            <span>Search</span>
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
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 p-6 md:p-8 bg-course-content-area-bg overflow-y-auto">
          <h1 className="text-3xl font-bold text-course-text-primary mb-6">{course.title}</h1>
          
          {/* Adapted Info Box */}
          <div className="bg-course-green-info-bg text-course-green-info-foreground p-6 rounded-md mb-8 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Module 1: Spelling & Pronunciation</h2>
              <BookOpen className="h-8 w-8 opacity-70" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">{instructorName}</p>
                <p className="text-sm opacity-80">Instructor</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Tue/Thu 3-5PM</p>
                <p className="text-sm opacity-80">Schedule</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{course.creditHours}</p>
                <p className="text-sm opacity-80">Credit Hours</p>
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center">
            <Button variant="outline" className="text-course-text-secondary border-course-border-color hover:bg-course-active-item-bg hover:text-course-text-primary">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Outline
            </Button>
            <Button className="bg-course-green-button-bg text-course-green-button-foreground hover:bg-course-green-button-hover-bg">
              Next Section <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2">Detailed Description</h3>
              <p className="text-sm leading-relaxed">{course.longDescription}</p>
            </section>

            <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2">Learning Outcomes</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </section>
            
            <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2">Student Perspective</h3>
              <blockquote className="border-l-4 border-course-green-button-bg pl-4 italic">
                <p className="text-sm leading-relaxed">"The class is a real help. There's more detail and explanation here at Nairobi; the people just seem to care more than at other schools. They get down to the basic problems."</p>
                <footer className="mt-2 text-xs not-italic">- Naiomi Moss, Student</footer>
              </blockquote>
            </section>

             {course.prerequisites && course.prerequisites.length > 0 && (
              <section className="bg-course-green-item-bg text-course-green-item-foreground p-5 rounded-md shadow">
                <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    {course.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                    ))}
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
