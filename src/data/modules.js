import { C } from "../theme.js";

export const MODULES = [
  {
    id: "m1",
    title: "Enterprise Systems",
    subtitle: "Bachelor-Modul",
    phase: "🌱 Von der Idee zum Mittelstand",
    color: C.accent,
    description: "NEXUS Corp wächst rasant. Prozesse sind manuell und chaotisch. Helfen Sie dabei, die ersten Unternehmenssysteme einzuführen.",
    levels: [
      { id: 1, title: "Willkommen bei NEXUS Corp",               topic: "Unternehmensvorstellung", unlocked: true },
      { id: 2, title: "Grundbegriffe & Definitionen",             topic: "Theoriefundament" },
      { id: 3, title: "Komponenten von Enterprise Systems",       topic: "ERP, CRM, SCM, SRM, BI" },
      { id: 4, title: "User Interface & User Experience",         topic: "Usability & UX" },
      { id: 5, title: "ES und Unternehmensstrategie",             topic: "Strategie & Alignment" },
      { id: 6, title: "Prozessmanagement & BPMN",                 topic: "Prozessmodellierung" },
      { id: 7, title: "Fallunterscheidung bei der ES-Einführung", topic: "Standard vs. Individual" },
      { id: 8, title: "Vorgehensmodell der ES-Einführung",        topic: "Projektphasen" },
      { id: 9, title: "Eigenschaften des Cloud Computings",       topic: "Cloud-Grundlagen" },
    ],
  },
  {
    id: "m3",
    title: "Management großer Enterprise-Systeme",
    subtitle: "Master-Modul",
    phase: "🌐 Globaler Konzern",
    color: C.secondDark,
    description: "NEXUS Corp ist zum Global Player geworden. Legacy-Systeme, Komplexität, KI-Agenten und Governance dominieren die Agenda.",
    locked: true,
    lockReason: "🎓 Wird mit dem Bachelorabschluss freigeschaltet!",
    levels: [
      { id: 1, title: "Komplexität großer ES",          topic: "Landschaftsanalyse" },
      { id: 2, title: "Integrationsmanagement",         topic: "IS-Integration" },
      { id: 3, title: "Enterprise Architecture Mgmt",   topic: "EA-Frameworks" },
      { id: 4, title: "Große IT-Projekte managen",      topic: "Programmmanagement" },
      { id: 5, title: "KI im Unternehmen",              topic: "KI-Strategie" },
      { id: 6, title: "KI-Agenten & Automatisierung",   topic: "Agentische Systeme" },
      { id: 7, title: "Cloud-Strategie im Großmaßstab", topic: "Multi-Cloud" },
      { id: 8, title: "Legacy & Technische Schulden",   topic: "Modernisierung" },
      { id: 9, title: "IS-Strategie & Wertbeitrag",     topic: "Business Case" },
    ],
  },
];

// Raise this as new levels get content
export const MAX_PLAYABLE_LEVEL = 9;
