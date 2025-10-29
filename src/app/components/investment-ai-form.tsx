'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { askInvestmentQuestion } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Loader, Bot } from 'lucide-react';

const initialState = {
  answer: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      Ask Question
    </Button>
  );
}

export function InvestmentAIForm() {
  const [state, formAction] = useFormState(askInvestmentQuestion, initialState);
  const [question, setQuestion] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.answer) {
      setQuestion('');
      formRef.current?.reset();
    }
  }, [state]);

  const handleFormAction = (formData: FormData) => {
    setQuestion(formData.get('question') as string);
    formAction(formData);
  };
  
  return (
    <div className="space-y-4">
      <form ref={formRef} action={handleFormAction} className="space-y-4">
        <Textarea
          name="question"
          placeholder="e.g., 'What is the projected payback period for the initial investment?'"
          required
          rows={3}
        />
        <SubmitButton />
      </form>
      {state?.answer && (
        <Card className="bg-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <p className="font-semibold text-muted-foreground">Answer to: "{question}"</p>
                <div className="prose prose-sm max-w-none text-foreground">
                  {state.answer}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
