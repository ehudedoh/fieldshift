import { useEffect, useState } from "react";
import { fetchHealth } from "../api/client.js";

export default function HomePage() {
  const [apiState, setApiState] = useState("loading");
  const [apiDetail, setApiDetail] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetchHealth()
      .then((data) => {
        if (cancelled) {
          return;
        }
        setApiState("ok");
        setApiDetail(`service ${data.service}, status ${data.status}`);
      })
      .catch(() => {
        if (cancelled) {
          return;
        }
        setApiState("error");
        setApiDetail(
          "API unreachable. Start the backend on port 8000, or ignore this message if you are only testing the interface.",
        );
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">FieldShift</p>
        <h1>From Earth Data to Smarter Crop Rotations</h1>
        <p className="lede">
          Agricultural decision-support platform. This version is a technical
          initialization: no business modules and no NASA data.
        </p>
      </header>

      <section className="panel" aria-live="polite">
        <h2>API status</h2>
        {apiState === "loading" && <p>Checking the /api/health route…</p>}
        {apiState === "ok" && <p className="status-ok">API available — {apiDetail}</p>}
        {apiState === "error" && <p className="status-error">{apiDetail}</p>}
      </section>
    </div>
  );
}
