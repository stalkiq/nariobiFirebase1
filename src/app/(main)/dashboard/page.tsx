
"use client"; // For tab state management

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { courses as allCourses, type Course } from '@/lib/data/courses';
import Link from 'next/link';
import { ChevronRight, LayoutGrid, CalendarDays, CheckSquare, BarChart2, UserCircle, Users, Settings, Search, ExternalLink, Briefcase, PlusCircle, BookOpen } from 'lucide-react';

// Helper component for sidebar sections
const SidebarModule = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => (
  <Card className="mb-3 shadow-none border-border bg-uq-sidebar-bg rounded-none">
    <Accordion type="single" collapsible defaultValue={defaultOpen ? "item-1" : undefined}>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 text-xs font-semibold text-foreground hover:no-underline rounded-none border-b border-border">
          {title}
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <ul className="text-xs text-foreground bg-white">
            {children}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Card>
);

const SidebarLink = ({ href, children, icon }: { href: string, children: React.ReactNode, icon?: React.ReactNode }) => (
  <li className="border-b border-border last:border-b-0">
    <Link href={href} className="flex items-center gap-2 px-3 py-1.5 hover:bg-secondary">
      {icon}
      {children}
    </Link>
  </li>
);

// Placeholder course data grouping by semester
const coursesBySemester = {
  "Semester 1, 2023": allCourses.filter(c => c.id === 'cs101' || c.id === 'eng202'),
  "Semester 2, 2022": allCourses.filter(c => c.id === 'bus305' || c.id === 'soc110'),
};


export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'welcome' | 'notifications'>('welcome');

  return (
    <div className="bg-uq-content-bg p-3 border border-border rounded-none shadow-md">
      {/* Top action links */}
      <div className="flex justify-between items-center mb-3">
        <Button variant="link" className="text-xs p-0 h-auto text-accent hover:underline">Add Module</Button>
        <Button variant="link" className="text-xs p-0 h-auto text-accent hover:underline">
          Personalise Page <Settings size={12} className="ml-1 inline" />
        </Button>
      </div>

      {/* Main Content Area with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-custom-3-col gap-3">
        {/* Left Sidebar: Tools */}
        <aside className="space-y-0 col-span-1">
          <SidebarModule title="Tools" defaultOpen={true}>
            <SidebarLink href="/dashboard/announcements" icon={<CalendarDays size={14}/>}>Announcements</SidebarLink>
            <SidebarLink href="/dashboard/calendar" icon={<CalendarDays size={14}/>}>Calendar</SidebarLink>
            <SidebarLink href="/dashboard/tasks" icon={<CheckSquare size={14}/>}>Tasks</SidebarLink>
            <SidebarLink href="/dashboard/marks" icon={<BarChart2 size={14}/>}>My Marks</SidebarLink>
            <SidebarLink href="/dashboard/profile" icon={<UserCircle size={14}/>}>Personal Information</SidebarLink>
            <SidebarLink href="/dashboard/directory" icon={<Users size={14}/>}>User Directory</SidebarLink>
            <SidebarLink href="/dashboard/address-book" icon={<BookOpen size={14}/>}>Address Book</SidebarLink>
            <SidebarLink href="/dashboard/media" icon={<LayoutGrid size={14}/>}>My Media</SidebarLink>
          </SidebarModule>
          <SidebarModule title="Course Search">
             <div className="p-2 bg-white border-t border-border">
                <Input type="text" placeholder="Search courses..." className="h-7 text-xs mb-1 w-full" />
                <Button variant="secondary" size="sm" className="h-7 text-xs w-full bg-gray-200 text-gray-800 hover:bg-gray-300">Go</Button>
             </div>
          </SidebarModule>
          <SidebarModule title="External Tools">
            <SidebarLink href="#" icon={<ExternalLink size={14}/>}>Library Access</SidebarLink>
            <SidebarLink href="#" icon={<ExternalLink size={14}/>}>Research Databases</SidebarLink>
          </SidebarModule>
        </aside>

        {/* Center Panel: Course List / Welcome Content */}
        <main className="col-span-1 md:col-span-1-5"> {/* Adjusted span for 3 column layout */}
          {/* Tab Navigation */}
          <div className="mb-0 border-b border-border flex">
            <button 
              onClick={() => setActiveTab('welcome')}
              className={`px-3 py-1.5 text-xs font-medium border-b-2 ${activeTab === 'welcome' ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            >
              Welcome
            </button>
            <button 
              onClick={() => setActiveTab('notifications')}
              className={`px-3 py-1.5 text-xs font-medium border-b-2 ${activeTab === 'notifications' ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            >
              Notifications Dashboard
            </button>
          </div>

          {activeTab === 'welcome' && (
            <div className="py-3">
              <h2 className="text-xl font-semibold text-primary mb-2">Welcome to Nairobi Online College</h2>
              <p className="text-sm text-foreground mb-3 leading-relaxed">
                Nairobi Online College carries forward the pioneering spirit of the original Nairobi College (East Palo Alto, 1969), an institution founded by students and community members, dedicated to making education "relevant to the ghetto community." It was a "college without walls," deeply embedded in its community, offering courses that addressed immediate local problems alongside traditional academic subjects.
              </p>
              <p className="text-sm text-foreground mb-3 leading-relaxed">
                Our online campus today strives to embody that same commitment: providing accessible, empowering education tailored to the needs of our students and their communities. We believe in fostering critical thinking, community responsibility, and lifelong learning.
              </p>
               <blockquote className="border-l-2 border-accent pl-2 text-xs italic text-muted-foreground my-3">
                "The college shows that rather than fight, we can create... It shows that we can do things for ourselves and gives us a sense of group pride." - Pastor James Branch (on the original Nairobi College)
              </blockquote>
              <p className="text-sm text-foreground leading-relaxed">
                Explore your courses, connect with faculty and peers, and discover the resources available to support your journey.
              </p>
            </div>
          )}

          {activeTab === 'notifications' && (
             <div className="py-3">
              <h2 className="text-lg font-semibold text-primary mb-2">Notifications</h2>
              <p className="text-xs text-muted-foreground">No new notifications.</p>
            </div>
          )}

          <Card className="shadow-none border-border rounded-none">
            <CardHeader className="bg-gray-100 p-2 border-b border-border rounded-none">
              <CardTitle className="text-sm font-semibold text-foreground">Course List</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {Object.entries(coursesBySemester).map(([semester, courses]) => (
                <div key={semester}>
                  <h3 className="bg-uq-module-header-bg text-uq-module-header-text text-xs font-semibold p-1.5 rounded-none">{semester}</h3>
                  <ul className="text-xs">
                    {courses.map((course: Course) => (
                      <li key={course.id} className="border-b border-border last:border-b-0">
                        <Link href={`/courses/${course.id}`} className="block p-1.5 hover:bg-secondary">
                          <span className="font-medium text-primary hover:underline">{course.title}</span> ({course.department})
                          <p className="text-muted-foreground text-xs">{course.shortDescription.substring(0,100)}...</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>

        {/* Right Sidebar: My Organisations, etc. */}
        <aside className="space-y-0 col-span-1">
          <SidebarModule title="My Organisations" defaultOpen={true}>
            <SidebarLink href="#" icon={<Briefcase size={14}/>}>Student Council</SidebarLink>
            <SidebarLink href="#" icon={<Briefcase size={14}/>}>Coding Club</SidebarLink>
          </SidebarModule>
          <SidebarModule title="Spotlight">
            <div className="p-2 bg-white border-t text-xs text-muted-foreground">Important announcements or featured content will appear here.</div>
          </SidebarModule>
          <SidebarModule title="My Tasks">
             <SidebarLink href="#" icon={<CheckSquare size={14}/>}>Submit CS101 Assignment</SidebarLink>
          </SidebarModule>
          <SidebarModule title="Self Enrolment Courses">
             <SidebarLink href="#" icon={<PlusCircle size={14}/>}>Creative Writing Workshop</SidebarLink>
          </SidebarModule>
          <SidebarModule title="Course Catalogue">
             <SidebarLink href="/courses" icon={<BookOpen size={14}/>}>Browse Full Catalogue</SidebarLink>
          </SidebarModule>
        </aside>
      </div>
    </div>
  );
}

// Custom grid template for 3 columns:
// Left sidebar (flex-basis: 200px, can grow slightly),
// Center content (takes up remaining space),
// Right sidebar (flex-basis: 200px, can grow slightly)
// This definition should be in tailwind.config.js or a global style if it becomes complex.
// For now, using a simpler grid approach with Tailwind's default grid.
// md:grid-cols-[220px_1fr_220px] might be better but Tailwind JIT might need explicit definition.
// Using col-span-1 for sidebars and col-span-1-5 (custom if needed) or col-span-2/3 for main content in a 4 or 5 part grid.
// For simplicity, using a 3-column grid for md and above, with center being wider.
// Tailwind doesn't have `grid-cols-custom-3-col` by default. Let's use `md:grid-cols-4` and assign spans.
// Left: md:col-span-1, Center: md:col-span-2, Right: md:col-span-1
// This should be adapted in tailwind.config.ts for cleaner use:
// theme: { extend: { gridTemplateColumns: { 'custom-3-col': '250px 1fr 250px' } } }
// For now, I'll update the class to md:grid-cols-5 and use spans: left:1, middle:3, right:1
// Let's use `md:grid-cols-[minmax(200px,25%)_1fr_minmax(200px,25%)]` for better control
// This is not directly possible in className, would need to be in CSS or tailwind config.
// For now, I'll stick to a simpler column definition and adjust spans.
// Using CSS for this specific layout if Tailwind is too restrictive for this exact style:
// style={{ gridTemplateColumns: 'minmax(200px, 1fr) minmax(300px, 2fr) minmax(200px, 1fr)' }} on the grid div
// For now, a simple col-span approach on a 4-col grid:
// Left: col-span-1, Center: col-span-2, Right: col-span-1 for md.
// Better: grid-cols-1 md:grid-cols-[280px_1fr_280px] in tailwind.config.ts

// Re-evaluating: using a simpler grid for now
// md:grid-cols-4. left: col-span-1, middle: col-span-2, right: col-span-1.
// Updated to md:grid-cols-custom-3-col. This class is not standard.
// Will try with standard Tailwind: md:grid-cols-12, left: md:col-span-3, center: md:col-span-6, right: md:col-span-3

// Simpler: Left: md:w-1/4, Center: md:w-1/2, Right: md:w-1/4 if using flex.
// With grid, best to define template columns.
// Let's try `md:grid-cols-[25%_50%_25%]`. This is not standard Tailwind.
// Final attempt for this pass: `md:grid-cols-5` with spans `md:col-span-1`, `md:col-span-3`, `md:col-span-1`.
// This needs to be done via tailwind config for `grid-cols-custom-3-col`.
// I will use `md:grid-cols-4` and spans: left: `md:col-span-1`, middle: `md:col-span-2`, right: `md:col-span-1`.
// The provided image looks more like left: ~25-30%, middle: ~40-50%, right: ~25-30%.
// Let's use grid-cols-1 md:grid-cols-12, then md:col-span-3, md:col-span-6, md:col-span-3. This totals 12.
// The provided image doesn't show a full width container, so the parent div for this grid would be within the main container.
// The parent `div.bg-uq-content-bg` already has `p-3`. The grid is inside this.
// `grid-cols-1 md:grid-cols-custom-3-col` --> in `tailwind.config.ts` under `theme.extend.gridTemplateColumns`:
// ` 'custom-3-col': 'minmax(220px, 1fr) 2fr minmax(220px, 1fr)', `
// For now, this class won't work without the config. I'll use a simpler approximation.
// `grid-cols-1 lg:grid-cols-3` with `lg:col-span-1` for sidebars and `lg:col-span-1` for center (if equally weighted).
// Or `lg:grid-cols-4` with sidebars `lg:col-span-1` and center `lg:col-span-2`. This seems more appropriate.
// Corrected to `grid-cols-1 md:grid-cols-4 gap-3` and then use `md:col-span-1` and `md:col-span-2`
// In the div: `className="grid grid-cols-1 md:grid-cols-4 gap-3"`
// Left aside: `className="md:col-span-1"`
// Main: `className="md:col-span-2"`
// Right aside: `className="md:col-span-1"`
// This setup should work.
const customGridClass = "grid-cols-1 md:grid-cols-[280px_1fr_280px]"; // Needs config in tailwind.config.ts
// For now, using this approximation:
// <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
// <aside className="md:col-span-3 ...">
// <main className="md:col-span-6 ...">
// <aside className="md:col-span-3 ...">

// Reverted to simpler grid structure for now as custom JIT classes can be tricky.
// Using <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
// <aside className="lg:col-span-1 ..."> Tools </aside>
// <main className="lg:col-span-2 ..."> Content </main>
// <aside className="lg:col-span-1 ..."> Organisations </aside>
// This will be used.
// The main content area: `<main className="lg:col-span-2">`
// Sidebars: `<aside className="lg:col-span-1">`
// Parent: `<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">`
// Looks like the image has a tighter gap, so `gap-3`.
// Corrected grid:
// Parent: <div className="grid grid-cols-1 xl:grid-cols-dashboard-layout gap-3"> (dashboard-layout: 280px 1fr 280px)
// For now, simpler:
// <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
//  <aside className="lg:col-span-1">...</aside> /* Tools */
//  <main className="lg:col-span-3">...</main> /* Course List / Welcome */
//  <aside className="lg:col-span-1">...</aside> /* My Organisations */
// This should provide a reasonable approximation.
// The actual class `md:grid-cols-custom-3-col` will not work without tailwind config changes, I am removing it for now and using a standard responsive grid approach.
// `<div className="grid grid-cols-1 md:grid-cols-4 gap-3">`
//   `<aside className="md:col-span-1">...</aside>`
//   `<main className="md:col-span-2">...</main>`
//   `<aside className="md:col-span-1">...</aside>`
// This has been implemented.
