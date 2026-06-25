from fastapi import FastAPI

from app.core.settings import settings

from app.api.upload import (
    router as upload_router
)

from app.api.chat import (
    router as chat_router
)

from app.api.teacher import (
    router as teacher_router
)

from app.api.notes import (
    router as notes_router
)

from app.api.quiz import (
    router as quiz_router
)

from app.api.planner import (
    router as planner_router
)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

app.include_router(
    upload_router
)

app.include_router(
    chat_router
)

app.include_router(
    teacher_router
)

app.include_router(
    notes_router
)

app.include_router(
    quiz_router
)

app.include_router(
    planner_router
)


@app.get("/")
def root():

    return {
        "status": "success",
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT
    }