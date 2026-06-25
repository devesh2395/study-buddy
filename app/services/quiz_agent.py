from app.rag.rag_pipeline import (
    retrieve_context
)

from app.services.llm_service import (
    generate_response
)


class QuizAgent:

    def generate_quiz(
        self,
        topic: str
    ) -> str:

        context = retrieve_context(
            query=topic,
            n_results=10
        )

        prompt = f"""
You are Study Buddy, an expert teacher.

Create a high-quality quiz using ONLY the provided context.

STRICT RULES:
- Use only information found in the context.
- Do not invent facts.
- Do not create questions whose answers are not present in the context.
- Do not copy textbook exercise questions verbatim.
- Do not ask students to write equations.
- Do not ask open-ended questions.
- Every question must be a multiple-choice question.
- Each question must have exactly 4 options.
- Exactly one option must be correct.
- Mark the correct answer.
- Do not provide explanations.
- Output only the quiz.

QUIZ REQUIREMENTS:
- Create exactly 5 questions.
- Include:
  - 2 Easy questions
  - 2 Medium questions
  - 1 Hard question
- Cover different concepts when possible.
- Prefer conceptual understanding over memorization.
- Include a mix of:
  - Definitions
  - Chemical equations
  - Reaction types
  - Applications
  - Reasoning-based questions

FORMAT:

EASY

Question 1:
<Question>

A. <Option>
B. <Option>
C. <Option>
D. <Option>

Answer: <Letter>

Question 2:
...

MEDIUM

Question 3:
...

Question 4:
...

HARD

Question 5:
...

Context:
{context}

Topic:
{topic}

Quiz:
"""

        return generate_response(
            prompt
        ).strip()