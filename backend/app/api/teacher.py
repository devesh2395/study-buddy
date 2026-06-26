from fastapi import APIRouter
from pydantic import BaseModel

from app.services.teacher_agent import (
    TeacherAgent
)

router = APIRouter()

agent = TeacherAgent()


class TeacherRequest(BaseModel):
    question: str


@router.post("/teacher")
def ask_teacher(
    request: TeacherRequest
):

    answer = agent.answer_question(
        request.question
    )

    return {
        "answer": answer
    }