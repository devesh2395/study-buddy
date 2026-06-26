from app.services.llm_service import (
    generate_response
)

prompt = """
Explain what a chemical reaction is
in simple language.
"""

response = generate_response(
    prompt
)

print("\n=== RESPONSE ===\n")
print(response)
print("\n================\n")