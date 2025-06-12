
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export default function Header() {
  const courseTabs = ['COMP3400', 'CS101', 'ENG202', 'BUS305']; 

  return (
    <div className="bg-uq-header-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          {/* New SVG logo. Removed the wrapping div with bg-white. */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32" // Adjusted size slightly
            height="32"
            viewBox="0 0 100 100" // Adjusted viewBox for more detail
            fill="currentColor" // Inherits text color
            aria-hidden="true"
          >
            {/* Simplified silhouette attempting to capture the essence of the image */}
            <path d="M50 2C27.9 2 10 20.2 10 42.6c0 10.1 4.2 19.3 11.1 26.1-1.5 3.3-6.5 13.5-6.5 13.5s3.9-1.9 8.3-4.9c3.9 1.5 8.2 2.3 12.6 2.3 22.1 0 40-18.2 40-40.6S72.1 2 50 2zm0 10c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm18.5 45.2c-2.8-1.8-6.1-2.9-9.7-3.3-0.8 4.2-2.3 8.1-4.4 11.5 2.6 0.9 5.3 1.4 8.1 1.4 3.7 0 7.3-0.7 10.6-2.1 0.1-0.1 0.2-0.2 0.2-0.3 0-4-3.3-7.2-4.8-7.2zM21.5 57.2c-1.5 0-4.8 3.2-4.8 7.2 0 0.1 0.1 0.2 0.2 0.3 3.3 1.4 6.9 2.1 10.6 2.1 2.8 0 5.5-0.5 8.1-1.4-2.1-3.4-3.6-7.3-4.4-11.5-3.6 0.4-6.9 1.5-9.7 3.3z"/>
            {/* Afro part - more abstract representation */}
            <path d="M50,40 C35,40 30,25 50,15 C70,25 65,40 50,40 M50,15 C40,5 60,5 50,15 M50,40 Q40,55 30,50 C20,45 25,65 40,70 C55,75 60,60 50,55 Q60,55 70,50 C80,45 75,65 60,70 C45,75 40,60 50,40 Z"/>
          </svg>
          <div>
            <h1 className="text-lg font-bold">Nairobi College</h1>
          </div>
        </Link>

        <div className="text-sm">
          {/* Intentionally empty. Space for future user-specific links. */}
        </div>
      </div>
      
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
            <Button asChild variant="ghost" className="p-2.5 hover:bg-black/20 rounded-t-sm data-[active=true]:bg-accent data-[active=true]:text-accent-foreground">
              <Link href="/dashboard/notifications"> 
                <Bell size={18} />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          </div>

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
