
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export default function Header() {
  const courseTabs = ['COMP3400', 'CS101', 'ENG202', 'BUS305']; 

  const headerPatternStyle = {
    background: `repeating-linear-gradient(
      135deg,
      hsl(0, 0%, 8%),
      hsl(0, 0%, 8%) 10px,
      hsl(45, 90%, 55%) 10px,
      hsl(45, 90%, 55%) 15px,
      hsl(0, 70%, 50%) 15px,
      hsl(0, 70%, 50%) 25px,
      hsl(45, 90%, 55%) 25px,
      hsl(45, 90%, 55%) 30px,
      hsl(0, 0%, 8%) 30px,
      hsl(0, 0%, 8%) 40px,
      hsl(120, 50%, 40%) 40px,
      hsl(120, 50%, 40%) 50px
    )`,
    backgroundSize: '50px 50px', // Controls the size of the repeating unit
  };

  const collegeNameStyle = {
    color: 'white',
    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.8)', // Subtle shadow for readability
  };

  return (
    <div style={headerPatternStyle}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div>
            <h1 className="text-lg font-bold" style={collegeNameStyle}>Nairobi College</h1>
          </div>
        </Link>

        <div className="text-sm">
          {/* Intentionally empty. Space for future user-specific links. */}
        </div>
      </div>
      
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
          {/* Placeholder for mobile menu toggle if course tabs were in a menu */}
          <div className="md:hidden">
            {/* Example: <Button variant="ghost" size="icon"><MenuIcon /></Button> */}
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
           {/* Ensure there's a balanced element for flexbox if left side is hidden and right side is present, or vice-versa
               Or ensure the parent justifies to one side if one child is hidden.
               Current setup: if tabs are hidden, and search is hidden, it's fine.
               If tabs are shown (desktop), and search is shown (desktop), it's fine.
               On mobile, both are hidden, the nav bar will appear empty but maintain height.
            */}
            {/* If only one side of nav items might be shown on mobile, add a div here to balance flex, or adjust justify-content of parent */}
             <div className="md:hidden flex-1"> {/* This empty div ensures search doesn't jump if it were visible and tabs weren't */}
             </div>
        </div>
      </nav>
    </div>
  );
}
