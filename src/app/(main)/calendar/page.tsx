"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: string[];
  category: 'academic' | 'social' | 'administrative' | 'community';
  color: string;
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);

  // Sample events - you can easily add more here
  useEffect(() => {
    const sampleEvents: Event[] = [
      {
        id: '1',
        title: 'Nairobi College Welcome Day',
        description: 'Annual welcome event for new students and faculty',
        date: '2024-01-15',
        time: '10:00 AM',
        location: 'Main Campus Hall',
        attendees: ['New Students', 'Faculty', 'Staff'],
        category: 'social',
        color: 'bg-blue-500'
      },
      {
        id: '2',
        title: 'Community Service Workshop',
        description: 'Workshop on community engagement and service learning',
        date: '2024-01-20',
        time: '2:00 PM',
        location: 'Community Center',
        attendees: ['Students', 'Community Members'],
        category: 'community',
        color: 'bg-green-500'
      },
      {
        id: '3',
        title: 'Academic Planning Session',
        description: 'Course planning and academic advising for spring semester',
        date: '2024-01-25',
        time: '11:00 AM',
        location: 'Academic Office',
        attendees: ['Students', 'Advisors'],
        category: 'academic',
        color: 'bg-purple-500'
      }
    ];
    setEvents(sampleEvents);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-purple-500';
      case 'social': return 'bg-blue-500';
      case 'administrative': return 'bg-orange-500';
      case 'community': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic': return 'Academic';
      case 'social': return 'Social';
      case 'administrative': return 'Administrative';
      case 'community': return 'Community';
      default: return 'Other';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                <Link href="/">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Nairobi College Calendar</h1>
                <p className="text-primary-foreground/80">Stay updated with college events and activities</p>
              </div>
            </div>
            <div className="text-sm text-primary-foreground/80 bg-primary/20 px-3 py-2 rounded">
              Events are managed by administrators
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="container mx-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-2xl font-semibold">{formatDate(currentDate)}</h2>
              <Button
                variant="outline"
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentDate(new Date())}
            >
              Today
            </Button>
          </div>

          {/* Calendar Grid */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Monthly Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {/* Day headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center font-semibold text-sm bg-muted/50 rounded">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {days.map((day, index) => {
                  const dayEvents = day ? getEventsForDate(day) : [];
                  const isToday = day && day.toDateString() === new Date().toDateString();
                  const isCurrentMonth = day && day.getMonth() === currentDate.getMonth();
                  
                  return (
                    <div
                      key={index}
                      className={`min-h-[120px] p-2 border border-border ${
                        isToday ? 'bg-accent/20 border-accent' : ''
                      } ${!isCurrentMonth ? 'bg-muted/30' : ''}`}
                    >
                      {day && (
                        <>
                          <div className={`text-sm font-medium mb-1 ${
                            isToday ? 'text-accent-foreground' : 'text-foreground'
                          }`}>
                            {day.getDate()}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map(event => (
                              <div
                                key={event.id}
                                className={`text-xs p-1 rounded ${event.color} text-white truncate`}
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {events
                .filter(event => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .slice(0, 6)
                .map(event => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Badge className={event.color}>{getCategoryLabel(event.category)}</Badge>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        {event.attendees.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{event.attendees.join(', ')}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
