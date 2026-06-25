def chunk_text(
    text: str,
    chunk_size: int = 1000,
    chunk_overlap: int = 200
):
    """
    Split text into overlapping chunks.
    """

    chunks = []

    start = 0

    while start < len(text):

        end = start + chunk_size

        chunk = text[start:end]

        chunks.append(chunk)

        start += (
            chunk_size
            - chunk_overlap
        )

    return chunks