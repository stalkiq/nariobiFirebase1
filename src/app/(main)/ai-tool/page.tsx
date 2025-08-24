"use client";

import { useFormState, useFormStatus } from 'react-dom';
import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { generateContentAction } from './actions';
import { Sparkles, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Generate Content
    </Button>
  );
}

export default function AiToolPage() {
  const initialState = { success: false, message: '', data: '', errors: {} };
  const [state, formAction] = useFormState(generateContentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && !state.success && state.message !== "Validation failed.") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);


  return (
    <PageWrapper
      title="AI Course Content Tool"
      description="Generate introductory course content using AI. Enter a topic to get started."
    >
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <form action={formAction}>
            <CardHeader>
              <CardTitle>Content Generator</CardTitle>
              <CardDescription>
                Provide a topic, and our AI will help draft an introductory paragraph for your course.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic">Course Topic</Label>
                <Input
                  id="topic"
                  name="topic"
                  placeholder="e.g., Introduction to Quantum Physics, History of Jazz Music"
                  required
                  className={state?.errors?.topic ? "border-destructive" : ""}
                />
                {state?.errors?.topic && (
                  <p className="text-sm text-destructive">{state.errors.topic.join(', ')}</p>
                )}
              </div>
              
              {state?.data && state.success && (
                <div className="space-y-2">
                  <Label htmlFor="generatedContent">Generated Content</Label>
                  <Textarea
                    id="generatedContent"
                    value={state.data}
                    readOnly
                    rows={8}
                    className="bg-muted/50"
                  />
                </div>
              )}
               {state?.message && !state.success && state.message !== "Validation failed." && (
                 <p className="text-sm text-destructive p-3 bg-destructive/10 rounded-md">{state.message}</p>
               )}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
    </PageWrapper>
  );
}
