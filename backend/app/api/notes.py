from fastapi import APIRouter
from pydantic import BaseModel

from app.services.notes_agent import (
    NotesAgent
)

router = APIRouter()

agent = NotesAgent()


class NotesRequest(BaseModel):
    topic: str


@router.post("/notes")
def generate_notes(
    request: NotesRequest
):

    notes = agent.generate_notes(
        request.topic
    )

    return {
        "notes": notes
    }