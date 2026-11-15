import EmptyState from "../components/EmptyState.jsx";
import { t } from "../i18n/index.js";

export default function OverviewPage() {
  return (
    <div className="page-stack">
      <p className="page-intro">{t("overview.subtitle")}</p>

      <div className="summary-grid">
        <article className="summary-card">
          <h2>{t("overview.farm")}</h2>
          <p className="summary-value">{t("overview.none")}</p>
        </article>
        <article className="summary-card">
          <h2>{t("overview.climate")}</h2>
          <p className="summary-value">{t("overview.unavailable")}</p>
        </article>
        <article className="summary-card">
          <h2>{t("overview.alerts")}</h2>
          <p className="summary-value">{t("overview.none")}</p>
        </article>
        <article className="summary-card">
          <h2>{t("overview.analysis")}</h2>
          <p className="summary-value">{t("overview.never")}</p>
        </article>
      </div>

      <EmptyState title={t("empty.noFarmTitle")} body={t("empty.noFarmBody")} />
      <EmptyState title={t("empty.noDataTitle")} body={t("empty.noNasa")} />
    </div>
  );
}
