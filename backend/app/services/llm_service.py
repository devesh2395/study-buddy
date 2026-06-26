from app.services.ollama_provider import (
    OllamaProvider
)


provider = OllamaProvider()


def generate_response(
    prompt: str
) -> str:
    return provider.generate(
        prompt
    )