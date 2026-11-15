import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App.jsx";

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

  it("renders the product name", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("FieldShift")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /from earth data to smarter crop rotations/i,
      }),
    ).toBeInTheDocument();
  });
});
