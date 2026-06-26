from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.quiz_agent import (
    QuizAgent
)

router = APIRouter()

agent = QuizAgent()


class QuizRequest(BaseModel):
    topic: str

    question_count: int = Field(
        default=5,
        ge=1,
        le=20
    )

    difficulty: str = "Mixed"


@router.post("/quiz")
def generate_quiz(
    request: QuizRequest
):

    quiz = agent.generate_quiz(
        topic=request.topic,
        question_count=request.question_count,
        difficulty=request.difficulty
    )

    return quiz