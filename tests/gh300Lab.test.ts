import test from 'node:test';
import assert from 'node:assert/strict';

import { getStudyPlan, generatePrompt, evaluateResponse } from '../src/gh300Lab';

test('getStudyPlan returns the official GH-300 learning areas', () => {
  const plan = getStudyPlan();

  assert.ok(plan.length >= 5);
  assert.ok(plan.some((item) => item.title.includes('Responsible AI')));
  assert.ok(plan.some((item) => item.title.includes('Prompt Engineering')));
});

test('generatePrompt includes context, constraints, and validation instructions', () => {
  const prompt = generatePrompt('refactor a function', 'Add tests and explain the risks');

  assert.match(prompt, /context/i);
  assert.match(prompt, /constraints/i);
  assert.match(prompt, /validate/i);
  assert.match(prompt, /refactor a function/i);
});

test('evaluateResponse rewards clear validation and risk awareness', () => {
  const result = evaluateResponse('I will validate output, include tests, and mention privacy and security risks before applying the suggestion.');

  assert.ok(result.score >= 80);
  assert.match(result.feedback, /validation/i);
});
