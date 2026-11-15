# FieldShift

Agricultural analysis and climate-adaptation platform. The product core is **CropShift**: compare crop-rotation scenarios using real environmental data and local farm information.

> **Current status:** project initialization. No business modules yet. No NASA or Supabase connection.

Functional reference: `CAHIER_DES_CHARGES.md`  
Development rules: `AGENTS.md`

## Requirements

- Node.js 20 or later (includes npm)
- Python 3.11 or later
- Git

## Structure

```
FieldShift/
├── frontend/     React + Vite app (JavaScript)
└── backend/      Python + FastAPI API
```

## Configuration

1. Copy the environment templates (no secrets are required to start):

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

2. Documented variables:

| Variable | Location | Role |
|---|---|---|
| `VITE_API_BASE_URL` | frontend | API URL. Empty = `/api` calls through the Vite proxy. Optional: `http://localhost:8000` |
| `APP_ENV` | backend | Environment (`development`, `production`) |
| `APP_NAME` | backend | Service name |
| `CORS_ORIGINS` | backend | Allowed origins, comma-separated |

Supabase and NASA variables are listed as comments in `.env.example`. They are **not used** in this phase.

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

- API health: [http://localhost:8000/api/health](http://localhost:8000/api/health)
- Interactive docs: [http://localhost:8000/docs](http://localhost:8000/docs)

Tests:

```bash
cd backend
source .venv/bin/activate
pytest
```

## Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Tests:

```bash
cd frontend
npm test
```

Production build check:

```bash
cd frontend
npm run build
```

## Scientific principles (reminder)

- NASA or agricultural data is never invented.
- Missing data is reported, never silently replaced.
- Rotation scores are not yield probabilities.

## Planned next steps

1. Visual identity, navigation, landing page, and dashboard (phase 2).
2. Farm management and map (phase 3).
3. NASA POWER integration (phase 4).
