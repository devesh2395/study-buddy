from app.rag.pdf_loader import (
    extract_text_from_pdf
)

from app.rag.chunker import (
    chunk_text
)

pdf_path = (
    "app/data/uploads/"
    "reactions and equations.pdf"
)

text = extract_text_from_pdf(
    pdf_path
)

chunks = chunk_text(text)

print(
    f"Total Chunks: {len(chunks)}"
)

print("\n")

print("First Chunk:\n")

print(chunks[0])

print("\n")

print(
    f"First Chunk Length: "
    f"{len(chunks[0])}"
)