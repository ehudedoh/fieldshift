import { useEffect, useState } from "react";
import { fetchHealth } from "../api/client.js";

export function useApiHealth() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    fetchHealth()
      .then(() => {
        if (!cancelled) {
          setStatus("ok");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return status;
}
