import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { t } from "../../i18n/index.js";
import Sidebar from "./Sidebar.jsx";
import TopBar from "./TopBar.jsx";

const TITLES = {
  "/overview": t("overview.title"),
  "/farms": t("farms.title"),
  "/monitoring": t("monitoring.title"),
  "/cropshift": t("cropshift.title"),
  "/reports": t("reports.title"),
};

export default function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const title = TITLES[pathname] ?? t("product");

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        {t("nav.skip")}
      </a>
      <div
        className={menuOpen ? "sidebar-wrap is-open" : "sidebar-wrap"}
        id="workspace-drawer"
      >
        <Sidebar onNavigate={() => setMenuOpen(false)} />
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label={t("nav.closeMenu")}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="shell-main">
        <TopBar
          title={title}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
        />
        <main id="main" className="shell-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
