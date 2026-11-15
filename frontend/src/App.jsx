import { Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import OverviewPage from "./pages/OverviewPage.jsx";
import WorkspacePlaceholder from "./pages/WorkspacePlaceholder.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AppShell />}>
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/farms" element={<WorkspacePlaceholder introKey="farms.subtitle" />} />
        <Route
          path="/monitoring"
          element={<WorkspacePlaceholder introKey="monitoring.subtitle" />}
        />
        <Route
          path="/cropshift"
          element={<WorkspacePlaceholder introKey="cropshift.subtitle" />}
        />
        <Route path="/reports" element={<WorkspacePlaceholder introKey="reports.subtitle" />} />
      </Route>
    </Routes>
  );
}
