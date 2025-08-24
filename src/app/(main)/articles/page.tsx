import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';

export default function ArticlesPage() {
  const articles = [
    {
      id: 'nairobi-college-history',
      title: "Nairobi College History",
      author: "Nairobi College Alumni",
      publication: "Nairobi College Alumni",
      date: "2023",
      excerpt: "In mid-April 1969, a CALL TO ACTION was issued to San Francisco Bay Area educators in response to an educational crisis in local colleges and universities. The crisis stemmed from the inappropriateness and inadequacy of existing educational programs for members of ethnic communities on the San Francisco Peninsula.",
      content: `
        <p class="mb-4">This is the official history of Nairobi College, documenting its founding and mission from the perspective of the institution itself and its alumni community.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">The Call to Action</h3>
        
        <p class="mb-4">In mid-April 1969, a CALL TO ACTION was issued to San Francisco Bay Area educators in response to an educational crisis in local colleges and universities. The crisis stemmed from the inappropriateness and inadequacy of existing educational programs for members of ethnic communities on the San Francisco Peninsula. There was a critical need for a community/student-oriented college designed to serve ethnic communities and to educate people of color.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">College Founding and Growth</h3>
        
        <p class="mb-4">In the fall of 1969, Nairobi College opened as a Third World College in the communities of Nairobi (East Palo Alto) and Redwood City, California. The members of the Third World communities committed themselves, at the time, to establishing an educational system to meet the needs of people of color. On July 1, 1971, the two campuses became legally independent and were established as separate colleges.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">The Nairobi Concept of Education</h3>
        
        <p class="mb-4">The Nairobi concept of education is a family oriented concept. Consistent with our belief that the family unit is the basis for, and is essential to, the educational process; and founded on our cultural heritage of living in an extended family, the Nairobi concept is a natural consequence of the African experience. The primary concern of Nairobi College is to facilitate the emergence of the contemporary African person.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">Purpose and Mission</h3>
        
        <p class="mb-4">Nairobi College is designed to develop those skills so desperately needed within Black communities: leadership skills as well as knowledge and awareness for general survival for all people of the community.</p>
        
        <p class="mb-4">In order to get quality education, we must provide it for ourselves. In order to build strong communities, we must have the skills and knowledge to build them ourselves.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">Innovative Programs</h3>
        
        <p class="mb-4">Many programs initiated by Nairobi College in the late 60's and early 70's are now being replicated in communities across the country, some of which include:</p>
        
        <ul class="list-disc list-inside mb-4 ml-4">
          <li>Nairobi College Prisoner Community Re-Entry Project</li>
          <li>Nairobi College Development Centers (Children's and Infant Center)</li>
          <li>Nairobi Teen Summer Project</li>
        </ul>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">Legacy and Continuing Impact</h3>
        
        <p class="mb-4">Although the college closed in the early 1980's, the Board of Trustees is still active and making a contribution to the community in the name of the college. Some of the efforts include:</p>
        
        <ul class="list-disc list-inside mb-4 ml-4">
          <li>The Wilhelmenia Anthony Scholar Endowment</li>
          <li>Support for the Summer Algebra Academy</li>
          <li>College Scholarships</li>
        </ul>
        
        <p class="mb-4">The Board is planning to have a documentary video developed to preserve the Nairobi College Legacy.</p>
      `,
      tags: ['History', 'Nairobi College', 'East Palo Alto', 'Education', 'Community', 'Legacy'],
      url: "https://nairobicollege.org/nairobi-college-history/",
      readTime: "8 min read"
    },
    {
      id: 'east-palo-alto-eden',
      title: "East Of Palo Alto's Eden: Race And The Formation Of Silicon Valley",
      author: "Kim-Mai Cutler",
      publication: "TechCrunch",
      date: "January 10, 2015",
      excerpt: "What if Silicon Valley had emerged from a racially integrated community? Would the technology industry be different? Would we? And what can the technology industry do now to avoid repeating the mistakes of the past?",
      content: `
        <p class="mb-4">This groundbreaking article explores the racial and economic history of East Palo Alto, the community where Nairobi College was founded in 1969. The piece examines how residential segregation shaped Silicon Valley's development and continues to impact the tech industry today.</p>
        
        <p class="mb-4">East Palo Alto has been portrayed as a haven of affordability for a low-income and primarily black and Latino community and alternately as a stubbornly intractable core of poverty and violence amid Silicon Valley's glittering wealth. In 1992, the city earned the moniker "Murder Capital of the U.S.A." after having the highest homicide per capita rate in the country.</p>
        
        <p class="mb-4">The article reveals how seemingly small policy choices can have enduring, multi-generational consequences. It tells the story of how two neighboring communities followed entirely different trajectories in post-war California — one of enormous wealth and power, and the other of resilience amid deprivation.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">Key Historical Context for Nairobi College</h3>
        
        <p class="mb-4">The piece documents how East Palo Alto's existence as a predominantly black community probably began around 1954, when a man named William A. Bailey and his family became the first blacks to move into a new subdivision called Palo Alto Gardens. The Bailey family's arrival touched off protests from neighboring white homeowners, leading to a "gentlemen's agreement" requiring that all prospective buyers be approved by the association.</p>
        
        <p class="mb-4">This historical context is crucial for understanding why Nairobi College was founded in 1969 as a community-run college for "people of color," dedicated to making education "relevant to the ghetto community." The college emerged as a response to the systemic barriers and segregation that the TechCrunch article documents.</p>
        
        <h3 class="text-lg font-semibold mb-2 mt-6">Relevance to Modern Tech Industry</h3>
        
        <p class="mb-4">The article concludes with a powerful observation: "It's also a huge reason contributing to why there are so few minorities in the tech industry." It notes that Silicon Valley loves to celebrate exceptional black and Latino entrepreneurs, but fails to see the structural problems that make these people the exceptions.</p>
        
        <p class="mb-4">This historical perspective helps explain why Nairobi College's mission remains relevant today, as the tech industry continues to struggle with diversity and inclusion issues that stem from decades of residential segregation and systemic inequality.</p>
      `,
      tags: ['History', 'East Palo Alto', 'Silicon Valley', 'Race', 'Education', 'Social Justice'],
      url: "https://techCrunch.com/2015/01/10/east-of-palo-altos-eden/",
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary/80">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Relevant Articles</h1>
              <p className="text-primary-foreground/80">Insights and perspectives relevant to Nairobi College's mission</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article) => (
            <Card key={article.id} className="shadow-lg">
              <CardHeader className="bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.publication}</span>
                      <span>•</span>
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-2xl leading-tight">{article.title}</CardTitle>
                    <p className="text-muted-foreground text-lg">{article.excerpt}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {article.readTime}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={article.url} target="_blank" rel="noopener noreferrer">
                        Read Full Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Call to Action */}
          <Card className="bg-accent/10 border-accent">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Contribute to Our Knowledge Base</h3>
              <p className="text-muted-foreground mb-4">
                Have an article or resource that would be valuable to the Nairobi College community? 
                We're always looking for relevant content that supports our mission of accessible education.
              </p>
              <Button variant="outline">
                Suggest an Article
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
