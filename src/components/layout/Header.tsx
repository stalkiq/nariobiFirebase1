
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export default function Header() {
  const courseTabs = ['COMP3400', 'CS101', 'ENG202', 'BUS305']; 

  const headerPatternStyle = {
    backgroundColor: 'hsl(35, 25%, 88%)', // Theme background (light warm beige)
    backgroundImage: `
      repeating-linear-gradient(
        45deg,
        transparent 0px, transparent 19px, hsl(120, 60%, 25%) 19px, hsl(120, 60%, 25%) 20px, /* Dark Green line */
        transparent 20px, transparent 39px, hsl(45, 70%, 50%) 39px, hsl(45, 70%, 50%) 40px, /* Gold line */
        transparent 40px, transparent 59px, hsl(0, 70%, 50%) 59px, hsl(0, 70%, 50%) 60px,  /* Red line */
        transparent 60px, transparent 79px, hsl(0, 0%, 10%) 79px, hsl(0, 0%, 10%) 80px    /* Black line */
      )
    `,
    backgroundSize: '80px 80px', // Repeats the full 4-color pattern every 80px
  };

  return (
    // Top section of the header with the new pattern
    <div style={headerPatternStyle}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div>
            <h1 className="text-lg font-bold text-primary">Nairobi College</h1>
          </div>
        </Link>

        <div className="text-sm">
          {/* Intentionally empty. Space for future user-specific links. */}
        </div>
      </div>
      
      {/* Navigation bar section */}
      <nav className="bg-uq-nav-bg text-accent-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Tabs and Bell Icon - hidden on mobile, shown on md and up */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 data-[active=true]:bg-black/20 rounded-t-sm" data-active={true}>
              Home
            </Link>
            {courseTabs.map(course => (
              <Link key={course} href={`/courses/${course.toLowerCase()}`} className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 rounded-t-sm">
                {course}
              </Link>
            ))}
            <Button asChild variant="ghost" className="p-2.5 hover:bg-black/20 rounded-t-sm data-[active=true]:bg-black/20">
              <Link href="/"> 
                <Bell size={18} />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden flex-1"> {/* This empty div ensures search doesn't jump if it were visible and tabs weren't */}
          </div>

          {/* Search bar - hidden on mobile, shown on md and up */}
          <div className="hidden md:flex items-center gap-1 py-1.5">
            <Button variant="ghost" className="text-accent-foreground hover:bg-black/20 text-sm px-3 py-1.5 h-auto">
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
