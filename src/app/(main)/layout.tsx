
import Header from '@/components/layout/Header';
// Footer removed as per new design

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-4"> {/* Added padding to main content area */}
        {children}
      </main>
      {/* Footer component removed */}
    </div>
  );
}
