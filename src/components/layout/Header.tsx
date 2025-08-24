
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const courseTabs = ['COMP3400', 'CS101', 'ENG202', 'BUS305'];

  const headerPatternStyle = {
    backgroundColor: 'hsl(35, 25%, 88%)', // Theme background (light warm beige)
    backgroundImage: `
      repeating-linear-gradient(
        45deg,
        transparent 0px, transparent 19px, hsl(120, 60%, 25%) 19px, hsl(120, 60%, 25%) 20px, /* Dark Green line */
        transparent 20px, transparent 39px, hsl(50, 80%, 50%) 39px, hsl(50, 80%, 50%) 40px, /* Gold line */
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
          {/* Apply new styles for "Nairobi College" text */}
          <div>
            <h1 className="font-arial text-4xl font-black text-primary uppercase tracking-widest">Nairobi College</h1>
          </div>
        </Link>

        <div className="text-sm">
          {/* Intentionally empty. Space for future user-specific links. */}
        </div>
      </div>

      {/* Navigation bar section */}
      <nav className="bg-uq-nav-bg text-accent-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Tabs - hidden on mobile, shown on md and up */}
          <div className="hidden md:flex items-center">
            <Link
              href="/"
              className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 data-[active=true]:bg-background data-[active=true]:text-foreground rounded-t-sm flex items-center justify-center"
              data-active={pathname === '/'}
              aria-label="Home"
            >
              <HomeIcon size={18} />
            </Link>
            {courseTabs.map(course => (
              <Link
                key={course}
                href={`/courses/${course.toLowerCase()}`}
                className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 data-[active=true]:bg-background data-[active=true]:text-foreground rounded-t-sm"
                data-active={pathname === `/courses/${course.toLowerCase()}` || (pathname.startsWith(`/courses/${course.toLowerCase()}/`) )}
              >
                {course}
              </Link>
            ))}

          </div>

          <div className="md:hidden flex-1"> {/* This empty div ensures search doesn't jump if it were visible and tabs weren't */}
          </div>
        </div>
      </nav>
    </div>
  );
}
