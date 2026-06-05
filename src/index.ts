import { evaluateResponse, generatePrompt, getStudyPlan } from './gh300Lab';

// Main function that starts the learning app.
function main(): void {
  const environment = process.env.APP_ENV ?? 'dev';

  console.log(`Active environment: ${environment}`);
  console.log('GitHub Copilot GH-300 learning lab is ready.');

  const plan = getStudyPlan();
  console.log('\nStudy plan:');
  plan.forEach((item, index) => {
    console.log(`${index + 1}. ${item.title} - ${item.focus}`);
  });

  const samplePrompt = generatePrompt(
    'Refactor a TypeScript function and add unit tests',
    'Use Copilot responsibly, validate suggestions, and mention privacy and security checks.',
  );

  console.log('\nSample prompt for Copilot practice:');
  console.log(samplePrompt);

  const result = evaluateResponse(
    'I will validate the output, add tests, and check privacy and security risks before applying the suggestion.',
  );

  console.log(`\nSample evaluation score: ${result.score}`);
  console.log(`Feedback: ${result.feedback}`);
}

main();
