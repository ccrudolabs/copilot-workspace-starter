// Public contract for the GH-300 learning topics displayed by the app.
export interface StudyTopic {
  title: string;
  focus: string;
  whyItMatters: string;
}

// Result returned after evaluating a sample Copilot response.
export interface EvaluationResult {
  score: number;
  feedback: string;
}

// Official GH-300 themes summarized for the learning app.
export function getStudyPlan(): StudyTopic[] {
  return [
    {
      title: 'Responsible AI and safety',
      focus: 'Validate suggestions, respect privacy, and explain limitations.',
      whyItMatters: 'This is a core exam area and a real-world usage guardrail.',
    },
    {
      title: 'Prompt Engineering',
      focus: 'Craft precise instructions with context, constraints, and examples.',
      whyItMatters: 'Better prompts improve suggestion quality and reduce rework.',
    },
    {
      title: 'Copilot in the IDE',
      focus: 'Use inline chat, edit mode, and agent-style workflows responsibly.',
      whyItMatters: 'This is the day-to-day developer experience the exam evaluates.',
    },
    {
      title: 'GitHub workflow and collaboration',
      focus: 'Use issues, pull requests, reviews, and repository context with Copilot.',
      whyItMatters: 'Copilot works best when the repository and team workflow are clear.',
    },
    {
      title: 'Testing and quality',
      focus: 'Generate unit tests, edge cases, and validation checks.',
      whyItMatters: 'Good testing reduces risk and improves trust in AI-generated output.',
    },
  ];
}

// Build a structured prompt that teaches responsible Copilot behavior.
export function generatePrompt(task: string, scenario: string): string {
  return [
    'You are preparing for GH-300 with a responsible AI workflow.',
    `Task: ${task}`,
    `Scenario: ${scenario}`,
    'Context: Use repository context, existing tests, and the user intent.',
    'Constraints: Keep the response safe, concise, and reviewable.',
    'Validation: validate the output, test edge cases, and explain how you would avoid privacy risks.',
  ].join('\n');
}

// Evaluate a practice answer using simple, explainable rules.
export function evaluateResponse(response: string): EvaluationResult {
  const normalized = response.toLowerCase();
  const hasValidation = normalized.includes('validate') || normalized.includes('test');
  const hasRiskAwareness = normalized.includes('privacy') || normalized.includes('security') || normalized.includes('risk');
  const hasAction = normalized.includes('will') || normalized.includes('should');

  const score = Math.min(
    100,
    40 + (hasValidation ? 25 : 0) + (hasRiskAwareness ? 20 : 0) + (hasAction ? 15 : 0),
  );

  return {
    score,
    feedback: hasValidation
      ? 'Good answer: it shows validation and responsible AI behavior.'
      : 'Add more validation guidance and explicit review steps.',
  };
}
