import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User, AlertCircle, Info, CheckCircle } from 'lucide-react';

export default function AnnouncementsPage() {
  // Coming soon announcement
  const announcements = [
    {
      id: '1',
      title: 'Announcements Coming Soon',
      content: 'We\'re working on bringing you the latest news and updates from Nairobi College. Check back soon for important announcements about courses, events, and campus news.',
      author: 'Nairobi College',
      date: '2024-08-24',
      category: 'general'
    }
  ];



  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <Info className="h-4 w-4" />;
      case 'community': return <CheckCircle className="h-4 w-4" />;
      case 'facilities': return <Info className="h-4 w-4" />;
      case 'safety': return <AlertCircle className="h-4 w-4" />;
      case 'student-life': return <User className="h-4 w-4" />;
      case 'general': return <Info className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic': return 'Academic';
      case 'community': return 'Community';
      case 'student-life': return 'Student Life';
      case 'facilities': return 'Facilities';
      case 'safety': return 'Safety';
      case 'general': return 'General';
      default: return 'General';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };



  return (
    <div className="bg-uq-content-bg p-3 border border-border rounded-none shadow-md">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold text-primary">Announcements</h1>
          </div>

        </div>
        <p className="text-sm text-muted-foreground mt-1">Stay updated with important college news and updates</p>
      </div>



      {/* Announcements List */}
      <div className="space-y-3">
        {announcements.map((announcement) => (
          <Card 
            key={announcement.id} 
            className="shadow-none border-border rounded-none hover:bg-secondary transition-colors"
          >
            <CardHeader className="bg-gray-100 p-2 border-b border-border rounded-none">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-accent text-white">
                    {getCategoryIcon(announcement.category)}
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold text-foreground">{announcement.title}</CardTitle>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {announcement.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(announcement.date)}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </CardHeader>
            <CardContent className="p-2">
              <p className="text-xs text-foreground mb-3 leading-relaxed">
                {announcement.content}
              </p>
              <div className="flex items-center justify-start">
                <Badge variant="outline" className="text-xs border-border">
                  {getCategoryLabel(announcement.category)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-2">
            Important announcements are posted here regularly. Check back often for updates.
          </p>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" className="h-7 text-xs border-border">
              <Bell className="mr-1 h-3 w-3" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs border-border">
              <Calendar className="mr-1 h-3 w-3" />
              Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
