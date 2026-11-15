"""Load settings from environment variables."""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """API runtime settings. No secrets are required in phase 1."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "FieldShift API"
    app_env: str = "development"
    cors_origins: str = "http://localhost:5173"

    def cors_origin_list(self) -> list[str]:
        """Split CORS_ORIGINS (comma-separated values)."""
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


settings = Settings()
