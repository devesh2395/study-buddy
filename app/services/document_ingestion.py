from app.rag.pdf_loader import (
    extract_text_from_pdf
)

from app.rag.chunker import (
    chunk_text
)

from app.rag.embeddings import (
    generate_embeddings
)

from app.rag.vector_store import (
    store_chunks
)


def ingest_document(
    pdf_path: str,
    document_name: str
):
    """
    Complete ingestion pipeline:
    PDF -> Text -> Chunks -> Embeddings -> ChromaDB
    """

    text = extract_text_from_pdf(
        pdf_path
    )

    chunks = chunk_text(
        text
    )

    embeddings = generate_embeddings(
        chunks
    )

    store_chunks(
        document_name=document_name,
        chunks=chunks,
        embeddings=embeddings
    )

    return {
        "document": document_name,
        "chunks": len(chunks)
    }