import requests

from app.services.provider_interface import LLMProvider


class OllamaProvider(LLMProvider):

    def __init__(
        self,
        model: str = "gemma3:4b"
    ):
        self.model = model
        self.url = "http://localhost:11434/api/generate"

    def generate(
        self,
        prompt: str
    ) -> str:

        response = requests.post(
            self.url,
            json={
                "model": self.model,
                "prompt": prompt,
                "stream": False
            },
            timeout=300
        )

        response.raise_for_status()

        data = response.json()

        return data["response"]