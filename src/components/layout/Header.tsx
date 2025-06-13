
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
        <Link href="/" className="flex items-center gap-2">
          {/* New SVG logo. Removed the wrapping div with bg-white. */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32" 
            height="32"
            viewBox="0 0 100 100" 
            fill="currentColor" 
            aria-hidden="true"
          >
            <path d="M50 25 C 40 25 35 30 30 40 S 25 60 30 70 S 40 85 50 85 S 70 80 70 70 S 75 50 70 40 S 60 25 50 25 Z M 50 10 C 30 10 20 30 20 50 S 30 90 50 90 S 80 70 80 50 S 70 10 50 10 Z M 50 15 C 35 15 25 35 25 50 S 35 85 50 85 S 75 65 75 50 S 65 15 50 15 Z" />
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
            <Link href="/" className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground rounded-t-sm" data-active={true}>
              Welcome
            </Link>
            {courseTabs.map(course => (
              <Link key={course} href={`/courses/${course.toLowerCase()}`} className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 rounded-t-sm">
                {course}
              </Link>
            ))}
            <Button asChild variant="ghost" className="p-2.5 hover:bg-black/20 rounded-t-sm data-[active=true]:bg-accent data-[active=true]:text-accent-foreground">
              <Link href="/"> 
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
