# Architecture and topology

```mermaid
flowchart LR
    A[Student / Candidate] --> B[VS Code + GitHub Copilot]
    B --> C[Learning App]
    C --> D[Study Plan + Prompt Practice]
    C --> E[Unit Tests]
    C --> F[GitHub Repo]
    F --> G[Pull Requests / Reviews]
    D --> H[Responsible AI Guardrails]
    E --> H
    H --> I[Exam readiness]
```

## Topology summary
- Source of truth: this workspace and its GitHub repository.
- Daily workflow: write code, ask Copilot, validate output, and commit changes.
- Quality loop: tests, review, and documentation support continuous learning.
- Exam preparation: prompts, theory notes, and practice scenarios are all in one place.
