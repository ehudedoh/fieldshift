import { Link } from "react-router-dom";
import { t } from "../i18n/index.js";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="landing-header">
        <p className="eyebrow">{t("product")}</p>
        <p className="landing-kicker">{t("landing.kicker")}</p>
      </header>

      <section className="landing-hero">
        <h1>{t("tagline")}</h1>
        <p className="lede">{t("landing.intro")}</p>
        <Link className="button-primary" to="/overview">
          {t("landing.cta")}
        </Link>
      </section>

      <section className="landing-grid" aria-label={t("product")}>
        <article className="info-card">
          <h2>{t("landing.pointFarm")}</h2>
          <p>{t("landing.pointFarmDetail")}</p>
        </article>
        <article className="info-card">
          <h2>{t("landing.pointEarth")}</h2>
          <p>{t("landing.pointEarthDetail")}</p>
        </article>
        <article className="info-card">
          <h2>{t("landing.pointCrop")}</h2>
          <p>{t("landing.pointCropDetail")}</p>
        </article>
      </section>

      <section className="panel">
        <h2>{t("landing.statusTitle")}</h2>
        <p>{t("landing.statusBody")}</p>
      </section>
    </div>
  );
}
