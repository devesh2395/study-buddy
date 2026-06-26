import json

from app.rag.rag_pipeline import (
    retrieve_context,
)

from app.services.llm_service import (
    generate_response,
)


class PlannerAgent:

    def create_plan(
        self,
        topic: str,
        days: int = 3,
    ):

        context = retrieve_context(
            query=topic,
            n_results=5,
        )

        prompt = f"""
You are Study Buddy's Planning Agent.

Create a study plan using ONLY the provided context.

IMPORTANT:

Return ONLY valid JSON.

No markdown.

No explanations.

No code fences.

Use exactly this schema:

{{
  "topic": "{topic}",
  "days": [
    {{
      "day": 1,
      "study_time": "2 hours",
      "topics": [
        "Topic 1",
        "Topic 2"
      ],
      "practice": [
        "Practice task"
      ],
      "revision": [
        "Revision task"
      ]
    }}
  ]
}}

Rules:

- Exactly {days} study days.
- Use ONLY the supplied context.
- Do NOT invent information.
- Distribute topics evenly.
- Keep each day balanced.

Context:

{context}
"""

        response = generate_response(
            prompt
        )

        response = response.strip()

        if response.startswith("```"):
            response = (
                response.replace(
                    "```json",
                    ""
                )
                .replace(
                    "```",
                    ""
                )
                .strip()
            )

        print("\n========== RAW PLAN ==========\n")
        print(response)
        print("\n==============================\n")

        try:
            return json.loads(
                response
            )

        except Exception as e:

            print(
                "PLAN JSON ERROR:"
            )
            print(e)

            return {
                "topic": topic,
                "days": [],
            }