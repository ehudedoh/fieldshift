import { CloudSun, FileText, GitCompare, LayoutDashboard, Map } from "lucide-react";
import { t } from "./i18n/index.js";

export function getWorkspaceNav() {
  return [
    { to: "/overview", label: t("nav.overview"), icon: LayoutDashboard },
    { to: "/farms", label: t("nav.farms"), icon: Map },
    { to: "/monitoring", label: t("nav.monitoring"), icon: CloudSun },
    { to: "/cropshift", label: t("nav.cropshift"), icon: GitCompare },
    { to: "/reports", label: t("nav.reports"), icon: FileText },
  ];
}
