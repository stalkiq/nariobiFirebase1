import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const tuitionFees = [
  { program: "Associate Degree Programs (per credit hour)", fee: "$150" },
  { program: "Certificate Programs (full program)", fee: "$1,200 - $2,500" },
  { program: "Individual Courses (per course)", fee: "$400 - $600" },
];

const paymentOptions = [
  "Online Credit/Debit Card",
  "Bank Transfer",
  "Installment Plans Available",
];

export default function PaymentsPage() {
  return (
    <PageWrapper
      title="Tuition & Fees"
      description="Information about tuition, fees, and payment options at Nairobi Online College."
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <DollarSign className="w-7 h-7" />
              Fee Structure
            </CardTitle>
            <CardDescription>
              We are committed to providing affordable and accessible education.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {tuitionFees.map(item => (
                <li key={item.program} className="flex justify-between items-center text-foreground p-3 border-b">
                  <span>{item.program}</span>
                  <span className="font-semibold">{item.fee}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Note: Fees are subject to change. Please contact admissions for the most current information. Additional fees for specific courses or materials may apply.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Payment Information</CardTitle>
            <CardDescription>
              Secure and convenient payment methods.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground mb-4">
              Nairobi Online College offers several ways to pay for your tuition and fees. We are currently working on integrating a full online payment system.
            </p>
            <h3 className="font-semibold text-lg text-primary mb-2">Accepted Methods:</h3>
            <ul className="list-disc list-inside space-y-1 text-foreground mb-6">
              {paymentOptions.map(option => <li key={option}>{option}</li>)}
            </ul>
            <p className="text-foreground mb-4">
              For detailed payment instructions, financial aid inquiries, or to discuss payment plans, please contact our admissions office.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="mailto:admissions@nairobi.online">
                  <Mail className="mr-2 h-4 w-4" /> Email Admissions
                </Link>
              </Button>
               <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" /> Call Admissions (Placeholder)
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Our online payment portal is coming soon!
            </p>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}
