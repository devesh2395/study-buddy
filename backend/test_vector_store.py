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

DOCUMENT_NAME = (
    "reactions_and_equations"
)

pdf_path = (
    "app/data/uploads/"
    "reactions and equations.pdf"
)

text = extract_text_from_pdf(
    pdf_path
)

chunks = chunk_text(text)

embeddings = generate_embeddings(
    chunks
)

store_chunks(
    DOCUMENT_NAME,
    chunks,
    embeddings
)

print(
    f"Stored {len(chunks)} chunks."
)