from app.rag.embeddings import (
    generate_embeddings
)

from app.rag.vector_store import (
    search_chunks
)

query = (
    "What is a chemical reaction?"
)

query_embedding = generate_embeddings(
    [query]
)[0]

results = search_chunks(
    query_embedding,
    n_results=3
)

documents = results["documents"][0]
metadatas = results["metadatas"][0]

for i, (doc, meta) in enumerate(
    zip(documents, metadatas),
    start=1
):
    print("\n")
    print("=" * 80)
    print(f"RESULT {i}")
    print("=" * 80)

    print(
        f"Document: "
        f"{meta['document']}"
    )

    print(
        f"Chunk Index: "
        f"{meta['chunk_index']}"
    )

    print("\n")

    print(doc[:500])

    print("\n")