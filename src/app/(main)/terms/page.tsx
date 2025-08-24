import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <PageWrapper
      title="Terms of Service"
      description="Please read these terms carefully before using Nairobi Online College services."
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground leading-relaxed">
          <p>This is a placeholder for the Terms of Service for Nairobi Online College. By accessing or using our website, courses, and services, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.</p>
          
          <h3 className="font-semibold text-xl text-primary pt-4">Use of Services</h3>
          <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of Nairobi Online College. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.</p>

          <h3 className="font-semibold text-xl text-primary pt-4">Intellectual Property</h3>
          <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Nairobi Online College and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Nairobi Online College.</p>

          <h3 className="font-semibold text-xl text-primary pt-4">User Accounts</h3>
          <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
          
          <h3 className="font-semibold text-xl text-primary pt-4">Termination</h3>
          <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

          <h3 className="font-semibold text-xl text-primary pt-4">Limitation of Liability</h3>
          <p>In no event shall Nairobi Online College, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <h3 className="font-semibold text-xl text-primary pt-4">Changes to Terms</h3>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect.</p>

          <h3 className="font-semibold text-xl text-primary pt-4">Contact Us</h3>
          <p>If you have any questions about these placeholder Terms, please contact us at <a href="mailto:legal@nairobi.online" className="text-accent hover:underline">legal@nairobi.online</a>.</p>
          
          <p className="pt-6 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
