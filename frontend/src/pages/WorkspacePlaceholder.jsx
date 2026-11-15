import EmptyState from "../components/EmptyState.jsx";
import { t } from "../i18n/index.js";

export default function WorkspacePlaceholder({ introKey }) {
  return (
    <div className="page-stack">
      <p className="page-intro">{t(introKey)}</p>
      <EmptyState title={t("empty.noDataTitle")} body={t("empty.comingPhase")} />
      <EmptyState title={t("empty.noFarmTitle")} body={t("empty.noFarmBody")} />
    </div>
  );
}
