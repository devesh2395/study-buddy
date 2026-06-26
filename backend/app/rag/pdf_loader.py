from pathlib import Path

from pypdf import PdfReader


def extract_text_from_pdf(
    pdf_path: str
) -> str:
    """
    Extract all text from a PDF file.
    """

    path = Path(pdf_path)

    if not path.exists():
        raise FileNotFoundError(
            f"PDF not found: {pdf_path}"
        )

    reader = PdfReader(path)

    pages_text = []

    for page in reader.pages:
        text = page.extract_text()

        if text:
            pages_text.append(text)

    return "\n".join(pages_text)