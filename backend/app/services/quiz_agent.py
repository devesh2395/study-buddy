import json

from app.rag.rag_pipeline import (
    retrieve_context
)

from app.services.llm_service import (
    generate_response
)


class QuizAgent:

    def generate_quiz(
        self,
        topic: str,
        question_count: int = 5,
        difficulty: str = "Mixed"
    ) -> dict:

        context = retrieve_context(
            query=topic,
            n_results=10
        )

        prompt = f"""
You are Study Buddy, an expert teacher.

Generate a multiple-choice quiz using ONLY the provided context.

STRICT RULES:

- Use ONLY information from the context.
- Do NOT invent facts.
- Do NOT include explanations.
- Do NOT include markdown.
- Do NOT include code fences.
- Do NOT include any text before or after the JSON.
- Return ONLY valid JSON.

Each question must contain:

- id
- difficulty
- question
- options (exactly 4)
- correct_option (0-3)

Difficulty requested:
{difficulty}

Number of questions:
{question_count}

JSON Schema:

{{
    "questions": [
        {{
            "id": 1,
            "difficulty": "Easy",
            "question": "Question text",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "correct_option": 2
        }}
    ]
}}

Context:

{context}

Topic:

{topic}
"""

        response = generate_response(
            prompt
        ).strip()

        print("\n========== RAW QUIZ RESPONSE ==========\n")
        print(response)
        print("\n======================================\n")

        cleaned_response = response

        if cleaned_response.startswith("```json"):
            cleaned_response = cleaned_response[7:]

        if cleaned_response.startswith("```"):
            cleaned_response = cleaned_response[3:]

        if cleaned_response.endswith("```"):
            cleaned_response = cleaned_response[:-3]

        cleaned_response = cleaned_response.strip()

        try:

            quiz = json.loads(
                cleaned_response
            )

            print(
                "\nSuccessfully parsed quiz JSON.\n"
            )

            return quiz

        except json.JSONDecodeError as error:

            print(
                "\nJSON PARSE ERROR:"
            )
            print(error)

            print(
                "\nCLEANED RESPONSE:\n"
            )
            print(cleaned_response)

            return {
                "questions": []
            }