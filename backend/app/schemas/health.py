"""Health-route response."""

from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(description="Service status, for example ok.")
    service: str = Field(description="Service identifier.")
    environment: str = Field(description="Runtime environment (development, and so on).")
