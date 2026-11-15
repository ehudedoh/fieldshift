# FIELDSHIFT 3.0
## FUNCTIONAL AND TECHNICAL SPECIFICATION

**Project name:** FieldShift  
**Challenge:** Field Shift: Adapting Farms with NASA Data  
**Event:** NASA Space Apps Challenge 2026  
**Version:** 3.0 — Reference version for development  
**Type:** Responsive web application and Progressive Web App (PWA)  
**Demonstration area:** Togo  
**Technical scope:** International  
**Main technologies:** React, Vite, JavaScript, Python, FastAPI, Supabase.

---

# 1. PROJECT OVERVIEW

## 1.1. Context and problem

World agriculture faces growing difficulties linked to climate change, irregular rainfall, extreme temperatures, water availability, and progressive soil degradation.

These difficulties make farm decisions more complex, especially when choosing which crops to grow and how to sequence them over several seasons.

Crop rotation is an important strategy to preserve soil resources, diversify production, limit some biological pressures, and improve farm resilience.

Farmers rarely have a simple tool that combines:
- Satellite observations.
- Historical climate information.
- Soil characteristics.
- Crop requirements.
- Previously grown crops.
- Farm constraints and priorities.

The information exists, but it is often scattered and hard to interpret.

## 1.2. Proposed solution

FieldShift is an intelligent agricultural decision-support platform that uses NASA Earth observations and available agronomic data to help farmers understand their environment and explore crop-rotation strategies.

The platform will create a digital representation of a farm, analyze its environmental conditions, and compare several agricultural scenarios.

It must explain why a rotation may be relevant, its potential benefits, its constraints, and associated risks.

FieldShift does not replace farmers or agronomists. It provides structured information to support their decisions.

## 1.3. Vision

Make FieldShift an international, accessible, and transparent tool that turns scientific Earth data into understandable, usable agricultural information.

## 1.4. Value proposition

**FieldShift — From Earth Data to Smarter Crop Rotations.**

Understand the farm. Anticipate risks. Compare rotations. Build more resilient agriculture.

---

# 2. PROJECT OBJECTIVES

## 2.1. General objective

Develop a decision-support platform that combines NASA satellite observations, climate data, soil information, crop characteristics, and farmer priorities in order to compare rotation strategies suited to their environment.

## 2.2. Specific objectives

- Locate and register a farm.
- Delineate plots on an interactive map.
- Retrieve climate and environmental observations.
- Analyze rainfall and temperature trends.
- Use satellite vegetation and soil-moisture indicators when data is available.
- Collect soil and crop information.
- Account for the farm’s agricultural history.
- Let the farmer define priorities.
- Compare several rotations over several seasons.
- Identify advantages, constraints, and risks of each scenario.
- Generate explainable recommendations.
- Produce a diagnostic report that can be viewed and exported.

---

# 3. TARGET USERS

## 3.1. Farmers and operators

They must be able to register plots, record crops, understand environmental conditions, and compare rotations.

## 3.2. Agricultural cooperatives

They will gradually be able to follow several farms, compare conditions, and support collective decisions.

## 3.3. Agricultural advisors

They will be able to inspect indicators, review scenarios, check justifications, and support farmers.

## 3.4. Researchers and students

They will be able to explore indicators, consult scientific sources, and understand processing methods.

The interface must stay simple for farmers while still allowing technical details to be examined.

---

# 4. FUNCTIONAL ORGANIZATION

The platform is organized around five main spaces.

1. Overview — Dashboard.
2. My farms — Plot management.
3. Monitoring — Climate, vegetation, and risks.
4. CropShift — Crop and rotation comparison.
5. Reports — Diagnostics and history.

Secondary features are available from settings or from the relevant spaces.

## 4.1. Overview — Dashboard

The dashboard must present an immediate summary of the selected farm.

Information:
- Farm name.
- Country and location.
- Total area.
- Current crop.
- Recent climate conditions.
- Main environmental indicators.
- Important alerts.
- Last update date.
- Last analysis performed.

The dashboard must prioritize information that supports decisions.

It must not be overloaded with charts.

## 4.2. AgriTwin — Farm management

This module represents a farm digitally.

Features:

- Create a farm.
- Select country and region.
- Locate on a Leaflet map.
- Search for a locality.
- Draw a polygon representing the plot.
- Automatic area calculation.
- Edit and delete plots.
- Record crop type.
- Record cropping history.
- Add soil information.
- Record irrigation information.

Each farm must have a structured record.

Unknown information may remain empty. The system must never invent soil characteristics.

## 4.3. Earth Intelligence — Environmental data

This module connects FieldShift to scientific data.

It retrieves and presents environmental information for the selected location and period.

Requested data:

- Mean, minimum, and maximum temperatures.
- Precipitation.
- Precipitation trends.
- Soil-moisture indicators.
- Solar radiation.
- Vegetation indicators.
- Environmental anomalies.

Every displayed datum must state its source, unit, period, and spatial resolution.

## 4.4. HarvestVision — Vegetation monitoring

This module uses satellite imagery to follow vegetation.

Features:

- Search available images.
- Select a period.
- Compute NDVI when the required bands are available.
- Display a vegetation map.
- Compare several periods.
- Identify unusual variations.
- Display plot statistics.

NDVI is computed from red and near-infrared bands:

NDVI = (NIR - Red) / (NIR + Red)

Clouds, shadows, and invalid pixels must be taken into account.

An NDVI decrease must never be automatically interpreted as disease, deficiency, or soil degradation.

## 4.5. FarmGuardian — Risk analysis

This module identifies potentially unfavorable environmental situations.

Risks to monitor:

- Precipitation deficit.
- Prolonged sequences without rain.
- High temperatures.
- Excess precipitation.
- Water-stress indicators.
- Vegetation anomalies.
- Climate conditions unfavorable to certain crops.

Each alert must contain:
- Risk type.
- Period concerned.
- Area concerned.
- Data used.
- Confidence level.
- A clear explanation.
- A conceivable preventive measure.

Detection thresholds must be documented and adapted to crops and regions.

## 4.6. WaterWise — Water-resource analysis

This module helps understand the farm’s water conditions.

Features:

- Precipitation analysis.
- Comparison of totals across periods.
- Identification of dry periods.
- Soil-moisture indicator analysis.
- Comparison with historical water conditions.
- Presentation of potential water constraints.

Satellite soil-moisture data must not be presented as exact measurements of water available in each plot.

## 4.7. CropShift — Crop and rotation comparison

**CropShift is the central module and FieldShift’s main differentiating feature.**

It lets a farmer explore crop sequences according to farm characteristics.

### A. Farm profile

Before comparing rotations, the user must be able to record:

- Current crop.
- Crops from previous seasons.
- Area.
- Soil type, if known.
- Irrigation availability.
- Geographic zone.
- Production period.
- Specific constraints.

### B. Farmer priorities

The user may define priorities:

- Preserve soil health.
- Reduce water needs.
- Improve climate resilience.
- Diversify crops.
- Limit agricultural risks.
- Prefer crops suited to local conditions.
- Favor crops that contribute to soil cover.

These priorities must influence scenario comparison.

### C. Rotation comparison

The user must be able to compare at least three scenarios:

1. Current or usual rotation.
2. Alternative rotation.
3. Alternative rotation optimized according to stated priorities.

Rotations are organized over several seasons.

Example scenarios to study in Togo:

- Maize → Maize → Maize.
- Maize → Cowpea → Maize.
- Sorghum → Cowpea → Sorghum.

These examples are not universal recommendations. Their relevance must be checked against calendars, crop characteristics, and local conditions.

### D. Comparison criteria

The engine must examine:

- Climate suitability.
- Crop water requirements.
- Cycle duration.
- Compatibility with agricultural calendars.
- Crop diversity.
- Alternation between botanical families.
- Potential contribution of legumes to the cropping system.
- Soil cover.
- Climate risks.
- Soil constraints.
- Farmer priorities.

### E. Scoring system

Each scenario may receive an indicative score out of 100.

The score is computed from documented criteria, weighted by user priorities.

The engine must:
- Present the criteria used.
- Explain positive and negative contributions.
- Display missing information.
- Present assumptions.
- Flag uncertainties.
- Avoid scores when minimum data is insufficient.

The score must never be presented as a success probability, a guaranteed yield, or a direct fertility measure.

### F. Comparison result

For each rotation, the interface must present:

- Indicative overall score.
- Strengths.
- Weaknesses.
- Estimated water needs.
- Climate constraints.
- Compatibility with available soil information.
- Potential risks.
- Missing information.
- Scientific justification.

The user must understand why one scenario ranks higher than another.

## 4.8. Global Farm Resilience — Final diagnosis

This module gathers results from the different analyses.

The diagnosis must contain:

- Farm information.
- Climate summary.
- Status of environmental indicators.
- Water analysis.
- Available vegetation indicators.
- Known soil constraints.
- Identified risks.
- Rotation comparison.
- Proposed strategy.
- Justifications.
- Limits and uncertainties.
- Observation sources and dates.

A PDF report must be generable.

## 4.9. History

The user may consult:
- Registered farms.
- Previous analyses.
- Compared rotations.
- Generated reports.
- Indicator trends.

---

# 5. DATA SOURCES

Sources must be open, documented, and used in accordance with their terms of use.

## 5.1. Priority NASA sources

**NASA POWER**
- Temperatures.
- Precipitation.
- Solar radiation.
- Historical climate series.

Use: climate-context analysis.

**NASA GPM IMERG**
- Satellite precipitation estimates.
- Comparison of rainy periods.
- Rainfall-deficit analysis.

Use: precipitation monitoring.

**NASA SMAP**
- Surface soil moisture.
- Land moisture indicators.

Use: regional water analysis.

**NASA/USGS Landsat**
- Multispectral images.
- Surface reflectance.
- Red and near-infrared bands.
- NDVI calculation.

Use: vegetation monitoring.

**NASA ECOSTRESS**
- Surface temperature.
- Evapotranspiration.
- Thermal and water-stress indicators.

Use: extension of environmental analysis.

## 5.2. Complementary sources

**ISRIC SoilGrids**
- pH.
- Organic carbon.
- Texture.
- Clay, sand, and silt.
- Total nitrogen.
- Cation exchange capacity.

These values are spatial estimates and do not replace a laboratory analysis.

**FAO**
- Agronomic information.
- Agricultural calendars.
- Crop characteristics.
- References on farming practices.

**National and regional agricultural sources**
- Local agricultural calendars.
- Information on main crops.
- Agronomic references specific to Togo.

ESA and FAO data must be clearly distinguished from NASA-produced data.

## 5.3. Resolution handling

The system must record the spatial and temporal resolution of each source.

It must never claim that kilometre-scale data precisely describes every square metre of a small plot.

Data of different resolutions must not be mixed without methodological precautions.

## 5.4. Handling unavailability

When a source is unavailable:
- The application must show an explicit state.
- The last valid data may be viewed with its date.
- An alternative source may be used if it is documented.
- No fictional value may silently replace missing data.

---

# 6. SCIENTIFIC PROCESSING AND ANALYSIS

## 6.1. Processing chain

1. The user selects a farm.
2. The system retrieves its position and geometry.
3. Connectors query data sources.
4. Responses are checked.
5. Units and periods are harmonized.
6. Indicators are computed.
7. Results are linked to farm information.
8. The rules engine analyzes constraints.
9. Rotation scenarios are compared.
10. The system produces an explainable diagnosis.

## 6.2. Climate indicators

- Mean temperature.
- Minimum temperature.
- Maximum temperature.
- Precipitation total.
- Number of dry days according to a documented definition.
- Precipitation variability.
- Anomalies relative to a reference period.
- Duration of dry spells.

Reference periods must be clearly stated.

## 6.3. Vegetation indicators

- NDVI.
- Mean NDVI.
- Temporal evolution.
- Spatial variability.
- Area showing unusual variations.

## 6.4. Water indicators

- Estimated soil moisture.
- Cumulative precipitation.
- Precipitation anomalies.
- Water-deficit indicators.

## 6.5. Decision engine

The first version relies on a transparent rules engine.

It uses:
- Environmental observations.
- Documented crop characteristics.
- Farm information.
- Farmer priorities.
- Agricultural calendars.
- Available constraints.

Each rule must have a justification and a source.

No generative AI is required for the engine to function.

An explanatory AI may be added later, provided it never invents data or conclusions.

---

# 7. USER EXPERIENCE AND DESIGN

## 7.1. Art direction

FieldShift must present a professional, elegant, scientific identity.

Art direction should favor:
- Deep green.
- Off-white.
- Neutral greys.
- Secondary green for positive actions.
- Orange and red reserved for alerts.

The interface must not look like a generic dashboard produced automatically.

## 7.2. Visual organization

On desktop:
- Discreet sidebar.
- Compact header.
- Main central area.
- Sober information cards.
- Useful charts.
- Integrated mapping.

On mobile:
- Adapted navigation.
- Short forms.
- Resized maps.
- Readable charts.
- No unnecessary horizontal scrolling.

## 7.3. Design principles

- Clear visual hierarchy.
- Professional typography.
- Consistent spacing.
- Light animations.
- Smooth transitions.
- Professional Lucide icons.
- Careful loading states.
- Understandable error messages.
- Well-designed empty and unavailable-data states.

No emoji may be used in the application interface.

## 7.4. Languages

English is the primary language of the public repository and the initial interface.

The architecture must allow additional languages later, including French.

---

# 8. TECHNICAL ARCHITECTURE

## 8.1. Frontend

Technologies:
- React.
- Vite.
- JavaScript.
- HTML5.
- CSS3.
- React Router.
- Leaflet.
- Recharts.
- Turf.js.
- Vite PWA.

TypeScript will not be used.

Responsibilities:
- User interface.
- Navigation.
- Forms.
- Mapping.
- Result visualization.
- Communication with the backend.
- Loading and error states.

## 8.2. Backend

Technologies:
- Python.
- FastAPI.
- HTTPX.
- Pandas.
- NumPy.
- GeoPandas when needed.
- Rasterio when needed.

Responsibilities:
- Communication with external sources.
- Request validation.
- Data processing.
- Indicator calculation.
- Decision-engine execution.
- Rotation comparison.
- Report generation.
- Error handling.

Heavy geospatial processing must not run unnecessarily for every user request.

## 8.3. Database

Supabase PostgreSQL will store:

- Users.
- Farms.
- Fields.
- Agricultural information.
- Previous crops.
- Priorities.
- Analyses.
- Rotation scenarios.
- Reports.

Large satellite volumes must not be stored directly in ordinary tables.

Prefer storing useful results, metadata, and file references.

Data access must be protected with suitable security rules, including Row Level Security.

## 8.4. Backend organization

Indicative structure:

backend/
- app/
  - api/
  - core/
  - database/
  - models/
  - schemas/
  - services/
    - nasa_power.py
    - nasa_gpm.py
    - nasa_smap.py
    - landsat.py
    - soil_data.py
  - engines/
    - climate_engine.py
    - vegetation_engine.py
    - water_engine.py
    - risk_engine.py
    - rotation_engine.py
  - reports/
  - main.py

Modules must be independent and testable.

## 8.5. Overall architecture

USER  
↓  
REACT + VITE  
↓  
FASTAPI API  
↓  
DATA SERVICES  
↓  
PYTHON SCIENTIFIC PROCESSING  
↓  
ROTATION COMPARISON ENGINE  
↓  
SUPABASE  
↓  
RESULTS AND REPORTS

---

# 9. DATA ORGANIZATION

Main entities:

**User**
- id
- email
- created_at

**Farm**
- id
- user_id
- name
- country
- region
- location
- geometry
- area
- created_at

**Field**
- id
- farm_id
- name
- geometry
- area
- soil_information

**Crop**
- id
- name
- botanical_family
- crop_type
- water_requirements
- temperature_requirements
- growth_duration
- source

**CropHistory**
- id
- field_id
- crop_id
- season
- start_date
- end_date

**FarmerPreferences**
- id
- farm_id
- priorities
- irrigation_available
- constraints

**Analysis**
- id
- farm_id
- period
- sources
- indicators
- uncertainties
- status
- created_at

**RotationScenario**
- id
- farm_id
- name
- seasons
- score
- criteria
- explanations
- assumptions

Final structures must be designed before Supabase migrations.

Geometries must use a consistent geospatial format, notably GeoJSON for frontend exchanges.

---

# 10. SECURITY AND RELIABILITY

The platform must include:

- Input validation.
- Secure authentication.
- Separation of user data.
- Protection of secrets and API keys.
- External error handling.
- Request limiting.
- Traceability of analyses.
- Protected access to reports.
- Backup of important data.

Private keys must never be exposed in the frontend or in the Git repository.

Responses from external services must be validated before processing.

---

# 11. MVP SCOPE

The first version must be complete enough to demonstrate real FieldShift behavior.

## 11.1. Required features

1. Professional landing page.
2. Responsive interface.
3. Dashboard.
4. Farm creation.
5. Interactive map.
6. Plot delineation.
7. Recording of agricultural information.
8. Real connection to NASA POWER.
9. Temperature and precipitation analysis.
10. Comparison of several climate periods.
11. Integration of at least one complementary NASA Earth-observation source, preferably GPM or SMAP depending on access feasibility.
12. First Landsat vegetation analysis when data is accessible.
13. Identification of some climate risks.
14. Comparison of at least three rotation scenarios.
15. Transparent scoring engine.
16. Justification of results.
17. Diagnostic report generation.

## 11.2. Secondary features

- Full authentication.
- Advanced history.
- Several farms per user.
- Deeper SMAP integration.
- Advanced Landsat processing.
- SoilGrids integration.
- Enriched PDF export.
- Installable PWA.

## 11.3. Future features

- Predictive analysis.
- Advanced agronomic models.
- Climate simulations.
- Cooperative management.
- Notifications.
- Multilingual assistance.
- Analysis of many farms.
- Integration of national agricultural data.

Secondary features must not compromise delivery of the main journey.

---

# 12. DEMONSTRATION AREA: TOGO

Togo is the first real or representative FieldShift use case.

The application must demonstrate operation on a farm in a Togolese agricultural zone.

Northern and southern zones must not automatically share the same agricultural calendars.

## 12.1. Priority crops to study

- Maize.
- Sorghum.
- Cowpea.
- Soybean.
- Groundnut.

Other crops may be added progressively.

## 12.2. Local data

The system must be able to integrate:
- Regional agricultural calendars.
- Crop requirements.
- Cycle durations.
- Soil information.
- Water constraints.
- Information provided by farmers.

## 12.3. Demonstration case

A user selects a plot in Togo.

They record:
- Area.
- Previous crops.
- Irrigation conditions.
- Priorities.

FieldShift retrieves environmental observations and runs an analysis.

The user then compares several rotations over several seasons.

The system explains results, risks, and limits of each scenario.

The demonstration must use actually retrieved data and clearly display simulated or missing information.

---

# 13. DEVELOPMENT METHODOLOGY WITH CURSOR

Development is done progressively with Cursor.

Cursor must respect the defined architecture and not generate the entire application in a single operation.

## Phase 1 — Initialization

- Environment check.
- Frontend creation.
- Backend creation.
- Folder organization.
- Git configuration.
- Environment variable configuration.

## Phase 2 — Interface and navigation

- Visual identity.
- Landing page.
- Sidebar.
- Navigation.
- Dashboard.
- Responsive design.

## Phase 3 — Farm management

- Leaflet map.
- Geographic selection.
- Plot drawing.
- Area calculation.
- Forms.
- Data persistence.

## Phase 4 — NASA integration

- NASA POWER connection.
- Data retrieval.
- Response checks.
- Climate processing.
- Caching.
- Source display.

## Phase 5 — Environmental analysis

- Climate indicators.
- Precipitation.
- First complementary NASA source.
- Vegetation analysis according to availability.
- Risk detection.

## Phase 6 — CropShift

- Crop catalogue.
- Agronomic information.
- Farmer profile.
- Priority management.
- Rotation creation.
- Comparison engine.
- Score explanation.

## Phase 7 — Diagnosis and reports

- Analysis aggregation.
- Global diagnosis.
- PDF generation.
- Result storage.

## Phase 8 — Finalization

- Functional tests.
- API tests.
- Calculation checks.
- Tests on several locations.
- Mobile tests.
- Fixes.
- Deployment.

Each phase must be tested before moving to the next.

---

# 14. ACCEPTANCE CRITERIA

The MVP is considered functional if:

1. The application starts correctly.
2. A user can create a farm.
3. A plot can be drawn on a map.
4. Area is calculated correctly.
5. The backend retrieves real NASA POWER data.
6. Climate data is processed correctly.
7. Sources and periods are visible.
8. A complementary NASA source is integrated and documented.
9. Missing data is correctly reported.
10. The user can record agricultural history.
11. The user can define priorities.
12. Three rotation scenarios can be compared.
13. Scores are explainable.
14. Scientific limits are displayed.
15. A diagnosis can be generated.
16. A report can be exported.
17. The interface works on desktop and smartphone.

No feature is considered done merely because its interface is visible.

It must be connected to a real processing pipeline or data source.

---

# 15. MANDATORY SCIENTIFIC PRINCIPLES

FieldShift must respect the following rules:

1. Never present a satellite estimate as a direct measurement taken on a plot.
2. Never invent soil characteristics.
3. Do not automatically infer a disease from an NDVI drop.
4. Do not confuse surface moisture with total water available in the root zone.
5. Do not mix data of different resolutions without precautions.
6. Always state the source, period, and unit of data.
7. Present uncertainties.
8. Do not present scores as yield probabilities.
9. Do not guarantee an improvement in fertility or yields.
10. Do not propose a rotation without considering calendars and local constraints.
11. Report missing information.
12. Provide for human validation of important agronomic decisions.

---

# 16. EXPECTED FINAL RESULT

FieldShift must be a working agricultural decision-support platform that concretely shows how NASA Earth observations can be combined with local information and farmer priorities to explore more resilient rotation strategies.

The project must stand out through four qualities:

**Science:** real scientific data, documented and correctly interpreted.

**Intelligence:** a transparent decision engine able to compare several agricultural strategies.

**Accessibility:** a simple, understandable interface suited to farming realities.

**Impact:** a tool that helps farmers anticipate risks and explore more sustainable practices.

FieldShift’s priority is not to accumulate features, but to turn Earth data into better-informed farm decisions.

**FIELDSHIFT — From Earth Data to Smarter Crop Rotations.**
