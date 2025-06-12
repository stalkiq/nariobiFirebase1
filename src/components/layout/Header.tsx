
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { School, Search, ChevronDown } from 'lucide-react'; // ChevronDown for dropdowns

export default function Header() {
  // Placeholder course tabs, in a real app this would be dynamic
  const courseTabs = ['COMP3400', 'CS101', 'ENG202', 'BUS305']; // Added CS101, ENG202, BUS305 as examples

  return (
    <div className="bg-uq-header-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/dashboard" className="flex items-center gap-2">
          {/* Using School icon as a placeholder for UQ logo style */}
          <div className="bg-white p-1 rounded-sm">
            <School size={28} className="text-uq-header-bg" />
          </div>
          <div>
            <h1 className="text-lg font-bold">NAIROBI ONLINE COLLEGE</h1>
            <p className="text-xs">AUSTRALIA</p> {/* Mimicking the subtext */}
          </div>
        </Link>

        {/* Placeholder for top right links if any (e.g., user profile) */}
        <div className="text-sm">
          {/* User Name / Profile link could go here */}
        </div>
      </div>
      
      {/* Main Navigation Tabs */}
      <nav className="bg-uq-nav-bg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground rounded-t-sm" data-active={true}> {/* Assuming Welcome is active */}
              Welcome
            </Link>
            {courseTabs.map(course => (
              <Link key={course} href={`/courses/${course.toLowerCase()}`} className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 rounded-t-sm">
                {course}
              </Link>
            ))}
            <Link href="/dashboard" className="px-3 py-2.5 text-sm font-medium hover:bg-black/20 rounded-t-sm">
              Notifications Dashboard
            </Link>
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
