'use server';

/**
 * @fileOverview Provides AI-generated answers to investor questions about the financial viability of the Agua Nueva Esparta project.
 *
 * - askInvestmentQuestion - A function that takes an investment question and returns an AI-generated answer.
 * - InvestmentQuestionInput - The input type for the askInvestmentQuestion function.
 * - InvestmentQuestionOutput - The return type for the askInvestmentQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InvestmentQuestionInputSchema = z.object({
  question: z
    .string()
    .describe(
      'The investment question about the financial projections and investment viability of the Agua Nueva Esparta project.'
    ),
});
export type InvestmentQuestionInput = z.infer<typeof InvestmentQuestionInputSchema>;

const InvestmentQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the investment question.'),
});
export type InvestmentQuestionOutput = z.infer<typeof InvestmentQuestionOutputSchema>;

export async function askInvestmentQuestion(
  input: InvestmentQuestionInput
): Promise<InvestmentQuestionOutput> {
  return investmentViabilityAnalysisFlow(input);
}

const investmentViabilityAnalysisPrompt = ai.definePrompt({
  name: 'investmentViabilityAnalysisPrompt',
  input: {schema: InvestmentQuestionInputSchema},
  output: {schema: InvestmentQuestionOutputSchema},
  prompt: `You are an AI assistant providing information about the financial projections and investment viability of the Agua Nueva Esparta project.

  Answer the following question to the best of your ability:

  Question: {{{question}}}
  `,
});

const investmentViabilityAnalysisFlow = ai.defineFlow(
  {
    name: 'investmentViabilityAnalysisFlow',
    inputSchema: InvestmentQuestionInputSchema,
    outputSchema: InvestmentQuestionOutputSchema,
  },
  async input => {
    const {output} = await investmentViabilityAnalysisPrompt(input);
    return output!;
  }
);
