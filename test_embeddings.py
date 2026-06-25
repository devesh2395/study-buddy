from app.rag.pdf_loader import (
    extract_text_from_pdf
)

from app.rag.chunker import (
    chunk_text
)

from app.rag.embeddings import (
    generate_embeddings
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

print(
    f"Chunks: {len(chunks)}"
)

print(
    f"Embeddings: {len(embeddings)}"
)

print(
    f"Vector Dimension: "
    f"{len(embeddings[0])}"
)