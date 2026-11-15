"""Health route: checks that the API starts, without calling an external source."""

from fastapi import APIRouter

from app.core.config import settings
from app.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
def get_health() -> HealthResponse:
    """Report that the FastAPI process is responding."""
    return HealthResponse(
        status="ok",
        service="fieldshift-api",
        environment=settings.app_env,
    )
