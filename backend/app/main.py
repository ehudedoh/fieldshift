"""FastAPI entry point."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    description="FieldShift API. Phase 1: initialization, no data sources.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix="/api")


@app.get("/")
def root() -> dict[str, str]:
    """Shortcut to the API identity."""
    return {"service": "fieldshift-api", "docs": "/docs"}
