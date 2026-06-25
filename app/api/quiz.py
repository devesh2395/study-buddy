from fastapi import APIRouter
from pydantic import BaseModel

from app.services.quiz_agent import (
    QuizAgent
)

router = APIRouter()

agent = QuizAgent()


class QuizRequest(BaseModel):
    topic: str


@router.post("/quiz")
def generate_quiz(
    request: QuizRequest
):

    quiz = agent.generate_quiz(
        request.topic
    )

    return {
        "quiz": quiz
    }