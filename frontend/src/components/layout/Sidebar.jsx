import { NavLink } from "react-router-dom";
import { getWorkspaceNav } from "../../navigation.js";
import { t } from "../../i18n/index.js";

export default function Sidebar({ onNavigate }) {
  const items = getWorkspaceNav();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <NavLink to="/" className="sidebar-logo" onClick={onNavigate}>
          {t("product")}
        </NavLink>
        <p className="sidebar-kicker">{t("shell.workspace")}</p>
      </div>
      <nav className="sidebar-nav" aria-label={t("shell.workspace")}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "sidebar-link is-active" : "sidebar-link"
              }
              onClick={onNavigate}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
