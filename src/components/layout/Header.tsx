import Link from 'next/link';
import { School, Home, BookOpenText, UsersRound, GraduationCap, MapPinned, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: <Home size={18} /> },
  { href: '/courses', label: 'Courses', icon: <BookOpenText size={18} /> },
  { href: '/faculty', label: 'Faculty', icon: <UsersRound size={18} /> },
  { href: '/students', label: 'Students', icon: <GraduationCap size={18} /> },
  { href: '/campus-tour', label: 'Campus Tour', icon: <MapPinned size={18} /> },
  { href: '/ai-tool', label: 'AI Content Tool', icon: <Sparkles size={18} /> },
];

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
          <School size={32} />
          <h1 className="text-2xl font-headline font-semibold">Nairobi Online College</h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent-foreground hover:bg-accent px-3 py-2 rounded-md">
                {item.icon}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        {/* Mobile menu button can be added here */}
      </div>
    </header>
  );
}
