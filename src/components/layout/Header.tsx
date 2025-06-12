
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react'; // Removed School, Search

export default function Header() {
  // Placeholder course tabs, in a real app this would be dynamic
  const courseTabs = ['COMP3400', 'CS101', 'ENG202', 'BUS305']; 

  return (
    <div className="bg-uq-header-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section - Main title should be "Nairobi College" */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-sm">
            {/* Custom SVG icon for a person with an afro */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="text-uq-header-bg" // This will make currentColor black
              fill="currentColor" // Ensures the paths are filled with the color from className
            >
              <path d="M12 2C9.27 2 7.02 3.64 6 6c-1.57 3.59-1.57 7.39.01 10.99C7.03 20.36 9.27 22 12 22s4.97-1.64 6-5.01c1.58-3.6 1.58-7.39-.01-10.99C16.98 3.64 14.73 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 13c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold">Nairobi College</h1>
          </div>
        </Link>

        {/* Top right section - This area should be clear */}
        <div className="text-sm">
          {/* Intentionally empty. Space for future user-specific links. */}
        </div>
      </div>
      
      {/* Main Navigation Tabs */}
      <nav className="bg-uq-nav-bg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground rounded-t-sm" data-active={true}>
              Welcome
            </Link>
            {courseTabs.map(course => (
              <Link key={course} href={`/courses/${course.toLowerCase()}`} className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 rounded-t-sm">
                {course}
              </Link>
            ))}
            {/* Bell icon for notifications */}
            <Button asChild variant="ghost" className="p-2.5 hover:bg-black/20 rounded-t-sm data-[active=true]:bg-accent data-[active=true]:text-accent-foreground">
              <Link href="/dashboard/notifications"> 
                <Bell size={18} />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          </div>

          {/* Course Search */}
          <div className="flex items-center gap-1 py-1.5">
            <Button variant="ghost" className="text-primary-foreground hover:bg-black/20 text-sm px-3 py-1.5 h-auto">
              Course Search
            </Button>
            <Input 
              type="search" 
              placeholder="" 
              className="h-7 text-xs w-32 bg-white text-gray-900 border-gray-400 focus:ring-ring focus:border-ring"
            />
            <Button variant="secondary" size="sm" className="h-7 text-xs bg-gray-200 text-gray-800 hover:bg-gray-300 px-2.5">
              Go
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
