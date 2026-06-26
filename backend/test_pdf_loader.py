from app.rag.pdf_loader import (
    extract_text_from_pdf
)

pdf_path = (
    "app/data/uploads/"
    "reactions and equations.pdf"
)

text = extract_text_from_pdf(
    pdf_path
)

print("\n=== EXTRACTED TEXT ===\n")

print(text[:500])

print("\n======================\n")

print(
    f"Total characters: {len(text)}"
)