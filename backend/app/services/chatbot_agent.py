from app.rag.rag_pipeline import (
    retrieve_context
)

from app.services.llm_service import (
    generate_response
)


class ChatbotAgent:

    def answer(
        self,
        question: str,
        history: list[dict]
    ):

        context = retrieve_context(
            query=question,
            n_results=3
        )

        conversation = ""

        for message in history:

            role = message["role"]
            content = message["content"]

            conversation += (
                f"{role}: {content}\n"
            )

        prompt = f"""
You are Study Buddy.

You are a helpful AI tutor.

Use the conversation history and the
retrieved study material to answer
the student's question.

If the answer cannot be found in the
study material, use your own knowledge
and clearly mention that the answer is
not from the uploaded material.

Conversation History:
{conversation}

Study Material:
{context}

Student Question:
{question}

Answer:
"""

        return generate_response(
            prompt
        )