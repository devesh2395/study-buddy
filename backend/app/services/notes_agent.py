from app.rag.rag_pipeline import (
    retrieve_context
)

from app.services.llm_service import (
    generate_response
)


class NotesAgent:

    def generate_notes(
        self,
        topic: str
    ) -> str:

        context = retrieve_context(
            query=topic,
            n_results=10
        )

        prompt = f"""
You are Study Buddy.

Generate revision notes from the provided study material.

STRICT RULES:
- Use ONLY information from the context.
- Do NOT invent facts.
- Do NOT explain your reasoning.
- Do NOT talk to the student.
- Do NOT ask follow-up questions.
- Do NOT add introductions.
- Do NOT add conclusions.
- Do NOT add warnings or disclaimers.
- Return ONLY the notes.

FORMAT:
# Topic Name

## Heading

- Point
- Point
- Point

## Heading

- Point
- Point

Context:
{context}

Topic:
{topic}

Notes:
"""

        return generate_response(
            prompt
        ).strip()