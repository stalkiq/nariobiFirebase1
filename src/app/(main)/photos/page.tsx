import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, ArrowLeft, Download } from 'lucide-react';

export default function PhotosPage() {
  const photos = [
    {
      id: '1',
      src: '/images/images.jpg',
      alt: 'Learning Environment',
      title: 'Learning Environment',
      description: 'Students engaging in collaborative learning',
      category: 'Campus Life'
    },
    {
      id: '2',
      src: '/images/download.jpg',
      alt: 'Student Life',
      title: 'Student Community',
      description: 'Diverse community of learners',
      category: 'Student Life'
    },
    {
      id: '3',
      src: '/images/download-1.jpg',
      alt: 'Academic Excellence',
      title: 'Academic Excellence',
      description: 'Building your future with Nairobi College',
      category: 'Academic'
    },
    {
      id: '4',
      src: '/images/images-1.jpg',
      alt: 'Campus Experience',
      title: 'Campus Experience',
      description: 'Vibrant Nairobi College community',
      category: 'Campus Life'
    }
  ];

  const categories = ['All', 'Campus Life', 'Student Life', 'Academic', 'Events'];

  return (
    <div className="bg-uq-content-bg p-3 border border-border rounded-none shadow-md">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <Image className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-primary">College Photos</h1>
        </div>
        <p className="text-sm text-muted-foreground">Explore photos from around Nairobi College</p>
      </div>

      {/* Category Filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className="text-xs border-border hover:bg-secondary"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden border-border shadow-none hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardHeader className="p-3 pb-2">
              <CardTitle className="text-sm font-semibold text-foreground">{photo.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{photo.description}</p>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                  {photo.category}
                </span>
                <Button variant="outline" size="sm" className="h-6 text-xs border-border">
                  View Full Size
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-3">
            More photos will be added as we capture the vibrant life of Nairobi College
          </p>
          <Button asChild variant="outline" className="border-border hover:bg-secondary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
