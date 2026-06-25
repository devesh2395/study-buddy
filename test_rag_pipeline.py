from app.rag.rag_pipeline import (
    retrieve_context
)

query = (
    "What is a chemical reaction?"
)

context = retrieve_context(
    query
)

print("\n=== RETRIEVED CONTEXT ===\n")

print(context[:2000])

print("\n=========================\n")