from app.rag.rag_pipeline import (
    retrieve_context
)

from app.services.llm_service import (
    generate_response
)


class PlannerAgent:

    def create_plan(
        self,
        topic: str,
        days: int = 3
    ) -> str:

        context = retrieve_context(
            query=topic,
            n_results=5
        )

        prompt = f"""
You are Study Buddy's Planning Agent.

Create a study plan based ONLY on the provided context.

Rules:

- Do NOT introduce topics that are not present in the context.
- Do NOT invent examples, equations, exercises, or facts.
- Break the material into {days} study days.
- Each day should contain:
  - Topics to study
  - Revision tasks
  - Practice tasks based on the material
- Keep the plan practical and concise.
- Return the plan in markdown format.

Context:
{context}

Topic:
{topic}

Study Plan:
"""

        return generate_response(prompt)