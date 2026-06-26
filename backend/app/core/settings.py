from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    APP_NAME = os.getenv(
        "APP_NAME",
        "Study Buddy"
    )

    APP_VERSION = os.getenv(
        "APP_VERSION",
        "0.1.0"
    )

    ENVIRONMENT = os.getenv(
        "ENVIRONMENT",
        "development"
    )

    BASE_DIR = os.path.dirname(
        os.path.dirname(__file__)
    )

    DATA_DIR = os.path.join(
        BASE_DIR,
        "data"
    )

    UPLOAD_DIR = os.path.join(
        DATA_DIR,
        "uploads"
    )

    CHROMA_DB_DIR = os.path.join(
        DATA_DIR,
        "chroma_db"
    )


settings = Settings()