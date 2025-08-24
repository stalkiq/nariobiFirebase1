"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image, ArrowLeft } from 'lucide-react';
import { photos } from '@/lib/data/photos';

export default function PhotosPage() {

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
            </div>
            <CardContent className="p-3">
              <p className="text-xs text-muted-foreground mb-3">{photo.description}</p>
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-6 text-xs border-border"
                  onClick={() => window.open(photo.src, '_blank')}
                >
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
