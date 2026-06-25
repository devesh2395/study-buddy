from app.rag.rag_pipeline import (
    retrieve_context
)

from app.services.llm_service import (
    generate_response
)


class TeacherAgent:

    def answer_question(
        self,
        question: str
    ):

        retrieval_result = retrieve_context(
            query=question,
            n_results=3
        )

        context = retrieval_result["context"]

        prompt = f"""
You are Study Buddy, an expert teacher.

Answer the student's question using the provided context.

If the context contains the answer:
- Explain it clearly.
- Use simple language.
- Add examples when possible.

If the answer is not available in the context, say:

"I could not find the answer in the uploaded study material."

Context:
{context}

Question:
{question}

Answer:
"""

        answer = generate_response(
            prompt
        )

        return {
            "answer": answer,
            "sources": retrieval_result["sources"]
        }