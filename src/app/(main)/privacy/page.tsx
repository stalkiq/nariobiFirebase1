import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper
      title="Privacy Policy"
      description="Your privacy is important to us at Nairobi Online College."
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground leading-relaxed">
          <p>This is a placeholder for the Privacy Policy of Nairobi Online College. In a real application, this page would detail how we collect, use, protect, and share personal information of our students, faculty, and website visitors.</p>
          
          <h3 className="font-semibold text-xl text-primary pt-4">Information We Collect</h3>
          <p>We would typically collect information such as:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Personal identification information (name, email, address, etc.)</li>
            <li>Academic records and course progress</li>
            <li>Payment information for tuition and fees</li>
            <li>Technical data from website usage (IP address, browser type, etc.)</li>
          </ul>

          <h3 className="font-semibold text-xl text-primary pt-4">How We Use Your Information</h3>
          <p>Your information would be used to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide and improve our educational services</li>
            <li>Process applications and enrollments</li>
            <li>Communicate with you about courses and college updates</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 className="font-semibold text-xl text-primary pt-4">Data Security</h3>
          <p>We would implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

          <h3 className="font-semibold text-xl text-primary pt-4">Your Rights</h3>
          <p>You would have rights regarding your personal data, such as the right to access, correct, or delete your information, subject to applicable laws.</p>
          
          <h3 className="font-semibold text-xl text-primary pt-4">Contact Us</h3>
          <p>If you have any questions about this placeholder privacy policy, please contact us at <a href="mailto:privacy@nairobi.online" className="text-accent hover:underline">privacy@nairobi.online</a>.</p>
          
          <p className="pt-6 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
