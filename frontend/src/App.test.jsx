import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App.jsx";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              status: "ok",
              service: "fieldshift-api",
              environment: "test",
            }),
        }),
      ),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the landing page", () => {
    renderAt("/");

    expect(
      screen.getByRole("heading", {
        name: /from earth data to smarter crop rotations/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open workspace/i })).toHaveAttribute(
      "href",
      "/overview",
    );
  });

  it("shows the overview empty states without invented data", () => {
    renderAt("/overview");

    expect(screen.getByRole("heading", { name: "Overview" })).toBeInTheDocument();
    expect(screen.getByText("No farm selected")).toBeInTheDocument();
    expect(screen.getByText(/NASA observations are not connected/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "CropShift" })).toHaveAttribute(
      "href",
      "/cropshift",
    );
  });
});
