
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
          <div className="bg-white p-1 rounded-sm">
            {/* New simplified side profile icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="text-uq-header-bg"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c2.97 0 5.46 1.57 6.5 3.76-.23.63-.58 1.2-1.02 1.69-1.22 1.38-3.08 2.25-5.18 2.25s-3.96-.87-5.18-2.25c-.44-.49-.79-1.06-1.02-1.69C6.54 15.07 9.03 13.5 12 13.5z"/>
            </svg>
          </div>
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
