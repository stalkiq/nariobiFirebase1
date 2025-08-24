
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ExternalLink } from 'lucide-react';

interface Library {
  name: string;
  website?: string;
  address?: string;
}

const sanMateoLibraries: Library[] = [
  { name: "San Mateo County Libraries Main (Foster City)", website: "https://smcl.org/locations/2W/" },
  { name: "Redwood City Public Library", website: "https://www.redwoodcity.org/departments/library" },
  { name: "Daly City Public Library", website: "https://www.dalycity.org/169/Library" },
  { name: "South San Francisco Public Library", website: "https://www.ssf.net/departments/library" },
  { name: "Menlo Park Library", website: "https://www.menlopark.gov/city-services/library" }
];

const santaClaraLibraries: Library[] = [
  { name: "San Jose Public Library (Dr. Martin Luther King, Jr. Library)", website: "https://www.sjpl.org/locations-hours/king" },
  { name: "Santa Clara County Library District (Various Locations)", website: "https://sccld.org/locations/" },
  { name: "Palo Alto City Library", website: "https://library.cityofpaloalto.org/" },
  { name: "Mountain View Public Library", website: "https://www.mountainview.gov/depts/library/default.asp" },
  { name: "Sunnyvale Public Library", website: "https://sunnyvale.ca.gov/community/library/default.htm" },
];

export default function LibraryAccessPage() {
  return (
    <PageWrapper
      title="Public Library Access"
      description="Find public libraries in San Mateo and Santa Clara counties. This is a sample list; please check official library websites for the most current information."
    >
      <Button asChild variant="outline" className="mb-6">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">San Mateo County Libraries</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {sanMateoLibraries.map(lib => (
                <li key={lib.name} className="pb-2 border-b last:border-b-0">
                  <h3 className="font-semibold text-foreground">{lib.name}</h3>
                  {lib.website && (
                    <a
                      href={lib.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline flex items-center gap-1"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  )}
                  {lib.address && <p className="text-xs text-muted-foreground">{lib.address}</p>}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Santa Clara County Libraries</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {santaClaraLibraries.map(lib => (
                <li key={lib.name} className="pb-2 border-b last:border-b-0">
                  <h3 className="font-semibold text-foreground">{lib.name}</h3>
                  {lib.website && (
                    <a
                      href={lib.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline flex items-center gap-1"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  )}
                  {lib.address && <p className="text-xs text-muted-foreground">{lib.address}</p>}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <p className="mt-8 text-sm text-muted-foreground text-center">
        This is a sample list. For comprehensive information, hours, and services, please visit the official library websites.
      </p>
    </PageWrapper>
  );
}
