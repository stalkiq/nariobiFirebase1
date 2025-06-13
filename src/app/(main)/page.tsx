
"use client"; // For tab state management

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { courses as allCourses, type Course } from '@/lib/data/courses';
import Link from 'next/link';
import { ChevronRight, LayoutGrid, CalendarDays, CheckSquare, BarChart2, UserCircle, Users, Settings, Search, ExternalLink, Briefcase, PlusCircle, BookOpen, Library, BookMarked, History as HistoryIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

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

const SidebarLink = ({ href, children, icon, target, centered, anchorClassName }: { href: string, children: React.ReactNode, icon?: React.ReactNode, target?: string, centered?: boolean, anchorClassName?: string }) => (
  <li className="border-b border-border last:border-b-0">
    <Link
      href={href}
      className={cn(
        `flex items-center px-3 py-1.5 hover:bg-secondary`,
        icon ? 'gap-2' : '',
        centered && !icon ? 'justify-center' : '',
        anchorClassName
      )}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {icon}
      {children}
    </Link>
  </li>
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'welcome' | 'notifications'>('welcome');

  return (
    <div className="bg-uq-content-bg p-3 border border-border rounded-none shadow-md">
      {/* Top action links removed */}

      {/* Main Content Area with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Left Sidebar: Tools */}
        <aside className="md:col-span-1 space-y-0">
          <SidebarModule title="Tools" defaultOpen={true}>
            <SidebarLink href="/history" centered anchorClassName="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground rounded-[var(--radius)] transition-all duration-150 ease-in-out">History</SidebarLink>
            <SidebarLink href="/announcements" icon={<CalendarDays size={14}/>}>Announcements</SidebarLink>
            <SidebarLink href="/calendar" icon={<CalendarDays size={14}/>}>Calendar</SidebarLink>
            <SidebarLink href="/address-book" icon={<BookOpen size={14}/>}>Address Book</SidebarLink>
          </SidebarModule>
          <SidebarModule title="Course Search">
             <div className="p-2 bg-white border-t border-border">
                <Input type="text" placeholder="Search courses..." className="h-7 text-xs mb-1 w-full" />
                <Button variant="secondary" size="sm" className="h-7 text-xs w-full bg-gray-200 text-gray-800 hover:bg-gray-300">Go</Button>
             </div>
          </SidebarModule>
           <SidebarModule title="External Tools">
            <SidebarLink href="https://scholar.google.com" target="_blank" icon={<BookMarked size={14}/>}>Research Databases</SidebarLink>
            {/* Add other external tool links here */}
          </SidebarModule>
        </aside>

        {/* Center Panel: Course List / Welcome Content */}
        <main className="md:col-span-2">
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
              Notifications/Courses
            </button>
          </div>

          {activeTab === 'welcome' && (
            <div className="py-3">
              <h2 className="text-xl font-semibold text-primary mb-2">Welcome to Nairobi Online College</h2>
              <p className="text-sm text-foreground mb-3 leading-relaxed">
                Nairobi Online College, inspired by the original Nairobi College founded in 1969, is not in East Africa, but in East Palo Alto, California. It was a community-run college for "people of color," dedicated to making education "relevant to the ghetto community." This pioneering institution was a "college without walls," deeply embedded in its surroundings, offering courses addressing local problems alongside traditional studies. Students and teachers pitch in: "Nails are banged into walls; desks painted; screens must be installed." This hands-on, community-built ethos is a core part of our heritage. A key component of this philosophy is that each student is assigned four hours of work in a community organization to graduate, ensuring learning is directly applied and benefits the community.
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
              <ul className="text-xs">
                {allCourses.map((course: Course) => (
                  <li key={course.id} className="border-b border-border last:border-b-0">
                    <Link href={`/courses/${course.id}`} className="block p-1.5 hover:bg-secondary">
                      <span className="font-medium text-primary hover:underline">{course.title}</span> ({course.department})
                      <p className="text-muted-foreground text-xs">{course.shortDescription.substring(0,100)}...</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </main>

        {/* Right Sidebar: My Organisations, etc. */}
        <aside className="md:col-span-1 space-y-0">
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
    
