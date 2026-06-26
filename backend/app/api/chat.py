from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chatbot_agent import (
    ChatbotAgent
)

router = APIRouter()

agent = ChatbotAgent()


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    question: str
    history: list[Message] = []


@router.post("/chat")
def chat(
    request: ChatRequest
):

    answer = agent.answer(
        question=request.question,
        history=[
            message.model_dump()
            for message in request.history
        ]
    )

    return {
        "answer": answer
    }