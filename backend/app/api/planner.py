from fastapi import APIRouter
from pydantic import BaseModel

from app.services.planner_agent import (
    PlannerAgent,
)

router = APIRouter()

agent = PlannerAgent()


class PlannerRequest(BaseModel):
    topic: str
    days: int = 3


@router.post("/planner")
def planner(
    request: PlannerRequest,
):

    plan = agent.create_plan(
        topic=request.topic,
        days=request.days,
    )

    return plan