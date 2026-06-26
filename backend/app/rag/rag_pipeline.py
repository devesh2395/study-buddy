from app.rag.embeddings import (
    generate_embeddings
)

from app.rag.vector_store import (
    search_chunks
)


def retrieve_context(
    query: str,
    n_results: int = 3
):
    """
    Retrieve relevant context and source metadata.
    """

    query_embedding = generate_embeddings(
        [query]
    )[0]

    results = search_chunks(
        query_embedding,
        n_results=n_results
    )

    documents = results["documents"][0]
    metadatas = results["metadatas"][0]

    context = "\n\n".join(
        documents
    )

    return {
        "context": context,
        "sources": metadatas
    }