from sentence_transformers import SentenceTransformer


MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

model = SentenceTransformer(
    MODEL_NAME
)


def generate_embeddings(
    chunks: list[str]
):
    """
    Generate embeddings for a list of text chunks.
    """

    embeddings = model.encode(
        chunks,
        convert_to_numpy=True
    )

    return embeddings