import { L1 } from "./level1.js";
import { L2 } from "./level2.js";
import { L3 } from "./level3.js";
import { L4 } from "./level4.js";
import { L5 } from "./level5.js";
import { L6 } from "./level6.js";
import { L7 } from "./level7.js";
import { L8 } from "./level8.js";
import { L9 } from "./level9.js";

export const LEVEL_DATA = { 1: L1, 2: L2, 3: L3, 4: L4, 5: L5, 6: L6, 7: L7, 8: L8, 9: L9 };

export const LEARNING_GOALS = {
  1: [
    "Das Unternehmen NEXUS Corp und seine Geschichte",
    "Alle fünf Schlüsselpersonen mit Rollen und Herausforderungen",
    "IS-Grundkonzepte: Datensilo, implizites Wissen, gewachsene IT",
  ],
  2: [
    "Betrieb & Unternehmen nach Nightingale & Srinivasan (2011)",
    "Organisation: Analytisch-gestaltende Perspektive",
    "Aufbauorganisation (statisch) vs. Ablauforganisation (raumzeitlich)",
    "System als Modell einer Ganzheit – offenes System Unternehmen",
    "Informationssystem (IS) vs. Anwendungssystem (AS)",
  ],
  3: [
    "ERP, CRM, SCM, SRM, Shopsystem und BI als Komponenten von Enterprise Systems",
    "Kernaufgaben und Beispiele jeder Komponente",
    "Zuordnung von ES-Komponenten zu konkreten Unternehmensproblemen",
  ],
  4: [
    "Usability nach ISO 9241-11: Effektivität, Effizienz, Zufriedenheit",
    "User Experience nach ISO 9241-210 und ihr Verhältnis zur Usability",
    "Bedürfnispyramide: Safety, Functionality, Usability, Pleasurable Experience, Individuation",
    "Aufgabenbasierte Personas und App-Typen in Enterprise Systems",
  ],
  5: [
    "Porters Five Forces und der Market-Based View",
    "Resource-Based View und SWOT-Analyse",
    "IT-Strategien: Synergie vs. Flexibilität",
    "IT-Business-Alignment als Zustand und Prozess",
  ],
  6: [
    "Prozessmanagement: Erfassung, Analyse, Optimierung, Steuerung",
    "BPMN-Grundelemente: Events, Tasks, Gateways, Swimlanes",
    "Typische Prozessschwachstellen: Medienbruch, Liegezeit, Redundanz",
    "Prozessdokumentation als Voraussetzung für ES-Einführung",
  ],
  7: [
    "Handlungsalternativen: Prozessveränderung vs. Softwareveränderung",
    "Stufen der Softwareanpassung: Customizing, BAPI, Individualentwicklung",
    "Bewertungskriterien: Wirtschaftlichkeit, Aufwand, langfristige Systemauswirkung",
  ],
  8: [
    "Sieben Phasen der ES-Einführung von Anforderung bis Go-Live-Support",
    "Typische Defizite in der Anforderungsdefinition",
    "Blueprint: Inhalte und Abgrenzung Customizing vs. Individualisierung",
  ],
  9: [
    "Cloud Computing: Definition, Mietmodell und IT-Sourcing",
    "Private, Public und Hybrid Cloud im Vergleich",
    "Technische Eigenschaften: Self-Service, Infrastructure-as-Code, Skalierbarkeit",
  ],
};
