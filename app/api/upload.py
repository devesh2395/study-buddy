from pathlib import Path

from fastapi import APIRouter
from fastapi import File
from fastapi import UploadFile

from app.core.settings import settings
from app.services.document_ingestion import (
    ingest_document
)

router = APIRouter()


@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...)
):
    upload_path = Path(
        settings.UPLOAD_DIR
    ) / file.filename

    contents = await file.read()

    with open(upload_path, "wb") as f:
        f.write(contents)

    ingestion_result = ingest_document(
        pdf_path=str(upload_path),
        document_name=Path(
            file.filename
        ).stem
    )

    return {
        "status": "success",
        "filename": file.filename,
        "saved_to": str(upload_path),
        "indexed": True,
        "chunks": ingestion_result["chunks"]
    }