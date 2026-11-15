import { Menu, X } from "lucide-react";
import { useApiHealth } from "../../hooks/useApiHealth.js";
import { t } from "../../i18n/index.js";

export default function TopBar({ title, menuOpen, onToggleMenu }) {
  const apiStatus = useApiHealth();
  const apiLabel =
    apiStatus === "ok"
      ? t("shell.apiOk")
      : apiStatus === "error"
        ? t("shell.apiDown")
        : t("shell.apiLoading");

  return (
    <header className="topbar">
      <button
        type="button"
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-controls="workspace-drawer"
      >
        {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        <span className="visually-hidden">
          {menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        </span>
      </button>
      <h1 className="topbar-title">{title}</h1>
      <p className={`api-chip api-chip-${apiStatus}`}>{apiLabel}</p>
    </header>
  );
}
