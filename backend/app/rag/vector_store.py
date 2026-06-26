import chromadb

from app.core.settings import settings


client = chromadb.PersistentClient(
    path=settings.CHROMA_DB_DIR
)

collection = client.get_or_create_collection(
    name="study_buddy_documents"
)


def store_chunks(
    document_name: str,
    chunks: list[str],
    embeddings
):
    """
    Store document chunks and embeddings.
    """

    ids = [
        f"{document_name}_chunk_{i}"
        for i in range(len(chunks))
    ]

    metadatas = [
        {
            "document": document_name,
            "chunk_index": i
        }
        for i in range(len(chunks))
    ]

    collection.add(
        ids=ids,
        documents=chunks,
        embeddings=embeddings.tolist(),
        metadatas=metadatas
    )


def search_chunks(
    query_embedding,
    n_results: int = 5
):
    results = collection.query(
        query_embeddings=[
            query_embedding.tolist()
        ],
        n_results=n_results
    )

    return results