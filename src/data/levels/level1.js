export const L1 = {
  intro: {
    charKey: "maya",
    message: "Herzlich willkommen bei NEXUS Corp! Ich bin Maya Chen, Gründerin und CEO. Es freut mich sehr, dass Sie uns als externes Beraterteam unterstützen. In den letzten acht Jahren sind wir von einer Idee zu einem mittelständischen Unternehmen mit 120 Mitarbeitenden gewachsen. Nur leider sind unsere Systeme und Prozesse dabei nicht mitgewachsen. Bevor wir gemeinsam Lösungen entwickeln, möchte ich Ihnen zunächst unser Unternehmen und mein Team vorstellen, denn nur wer die Menschen und ihre Herausforderungen kennt, kann wirklich helfen.",
  },
  scenes: [
    {
      id: "1_1", type: "company", title: "NEXUS Corp: Das Unternehmen",
      content: {
        description: "NEXUS Corp wurde 2018 als Hardware-Startup in Essen gegründet und hat sich zu einem mittelständischen Unternehmen mit 120 Mitarbeitenden, drei Lagerstandorten in Deutschland und einem wachsenden europäischen Kundenstamm mit über 850 aktiven Kunden entwickelt. Das jährliche Umsatzwachstum von rund 30 % klingt nach Erfolg, birgt aber eine gefährliche Kehrseite.",
        metrics: [
          { label: "Mitarbeitende", value: "120", icon: "👥" },
          { label: "Jahresumsatz", value: "18 Mio. €", icon: "📈" },
          { label: "Lagerstandorte", value: "3", icon: "🏭" },
          { label: "Aktive Kunden", value: "850+", icon: "🤝" },
          { label: "Gegründet", value: "2018", icon: "🗓️" },
          { label: "Wachstum p.a.", value: "~30 %", icon: "🚀" },
        ],
        problem: "Jede Abteilung arbeitet mit eigenen Tabellen, Prozessen und Datensilos. Es gibt keine integrierte Sicht auf das Unternehmen. Das kostet NEXUS Corp täglich Geld, Kunden und reduziert die Wettbewerbsfähigkeit.",
        systems: [
          { name: "Buchhaltung", tool: "DATEV + Excel", status: "⚠️" },
          { name: "Vertrieb", tool: 'Outlook + "Carlos-CRM" (Excel)', status: "⚠️" },
          { name: "Lagerverwaltung", tool: "Eigenentwicklung (MS Access)", status: "🔴" },
          { name: "Einkauf", tool: "Excel + E-Mail", status: "🔴" },
          { name: "Reporting", tool: "Manuelle Excel-Berichte", status: "🔴" },
        ],
      },
    },
    {
      id: "1_2", type: "persona", charKey: "tom",
      intro: "Ich bin von Anfang an bei NEXUS dabei. Die Lagerhaltung läuft über ein Access-System, das ich selbst programmiert habe. Es tut, was es soll. Meistens. Ich habe schon zwei große IT-Projekte miterlebt. Beide sind gescheitert und haben Millionen gekostet. Also verstehen Sie meine Skepsis.",
      dailyRoutine: "Tom beginnt jeden Morgen um 6:30 Uhr mit einer manuellen Bestandsprüfung per Handscanner. Die Daten trägt er in eine Excel-Tabelle ein. Bei Lieferengpässen bemerkt er das Problem oft erst, wenn ein Kunde bereits angerufen und sich beschwert hat.",
      question: "Toms Skepsis gegenüber neuen IT-Systemen basiert auf konkreten Erfahrungen. Was ist die wahrscheinlich tiefste Ursache für seine Haltung?",
      answers: [
        { text: "Er versteht moderne Technologie nicht und möchte das verbergen. Schließlich hat Tom nie eine IT-Ausbildung gemacht und arbeitet lieber mit bewährten analogen Methoden als mit neuen digitalen Systemen.", correct: false, feedback: "Das ist eine voreilige Fehlannahme. Tom hat selbst ein Access-System entwickelt. Seine Skepsis ist strategisch, nicht technisch." },
        { text: "Er hat erlebt, dass teure IT-Projekte oft mehr Probleme schaffen als lösen, und will Bewährtes nicht leichtfertig riskieren.", correct: true, feedback: "Genau. Toms Skepsis ist empirisch fundiert: Er hat gesehen, wie Systeme eingeführt wurden, die die Arbeit schwerer statt leichter machten. Diese Erfahrung zu respektieren, statt sie zu übergehen, ist der erste Schritt, ihn zum Partner zu machen." },
        { text: "Er hat Angst, durch Automatisierung seinen Job zu verlieren. Tom befürchtet, dass neue Systeme seine jahrelange Expertise überflüssig machen und seine Stellung im Unternehmen gefährden könnten.", correct: false, feedback: "Das greift zu kurz. Tom ist erfahren, wertvoll und weiß das auch. Seine Skepsis ist rational begründet, nicht existenziell motiviert." }
      ],
    },
    {
      id: "1_3", type: "persona", charKey: "carlos",
      intro: "Ich leite ein 40-köpfiges Vertriebsteam. Unsere Kundendaten? Verteilt über Outlook-Ordner, persönliche Notizbücher und eine selbstgebastelte Excel-Tabelle. Ich nenne sie liebevoll 'Carlos-CRM'. Klappt ganz gut, solange ich im Haus bin.",
      dailyRoutine: "Carlos verbringt täglich ein bis zwei Stunden damit, Informationen aus verschiedenen Quellen zusammenzusuchen, bevor er Kundengespräche führen kann. Wenn ein Vertriebsmitarbeiter das Unternehmen verlässt, gehen häufig alle Kundeninformationen und die gesamte Beziehungsgeschichte verloren.",
      question: "Welchen strategischen Nachteil verursacht dieser Zustand für NEXUS Corp?",
      answers: [
        { text: "Kundeninformationen sind personengebunden statt organisationsgebunden. Dadurch verliert NEXUS Corp wertvolles Wissen bei jedem Personalwechsel.", correct: true, feedback: "Exzellent! Das nennt sich 'implizites Wissen': Es lebt in den Köpfen der Mitarbeitenden, nicht im Unternehmen. Ein CRM-System transformiert implizites in explizites, organisationales Wissen, das unabhängig von Personen erhalten bleibt." },
        { text: "Carlos hat zu viele Mitarbeitende im Team, was die Datenkomplexität erhöht. Ein größeres Team bedeutet mehr Datenpunkte, komplexere Beziehungen und damit einen höheren Bedarf an strukturierten Verwaltungswerkzeugen.", correct: false, feedback: "Das ist keine Frage der Teamgröße. Das Problem ist strukturell: Wissen und Daten gehören dem Unternehmen, nicht einzelnen Personen." },
        { text: "Die Mitarbeitenden sind nicht gut genug ausgebildet, um Kundendaten richtig zu dokumentieren. Ohne geeignete Schulungen und klare Prozesse kann selbst das beste System nicht effektiv genutzt werden.", correct: false, feedback: "Das verfehlt das eigentliche Problem. Selbst hochqualifizierte Mitarbeitende können ohne geeignete Systemunterstützung kein nachhaltiges institutionelles Wissen aufbauen." }
      ],
    },
    {
      id: "1_4", type: "persona", charKey: "lena",
      intro: "Ich erstelle für Maya Berichte, und zwar wöchentlich, manchmal sogar täglich. Dafür kombiniere ich Daten aus DATEV, drei Excel-Tabellen von Tom, zwei von Carlos und einer Access-Datenbank, die niemand mehr wirklich versteht. Ich bin Data Scientist, verbringe aber 60 % meiner Zeit mit Datenpflege statt mit Analyse.",
      dailyRoutine: "Lena verbringt täglich mehrere Stunden damit, Daten aus sieben verschiedenen Quellen zu sammeln, zu bereinigen und in ein Gesamtbild zu fügen. Ihre Berichte an Maya sind beim Versenden oft bereits zwei bis drei Tage alt und damit für operative Entscheidungen kaum noch nutzbar.",
      question: "Wie bezeichnet man die Situation, in der Daten in getrennten, nicht verbundenen Systemen verschiedener Abteilungen gespeichert werden?",
      answers: [
        { text: "Datensilo", correct: true, feedback: "Richtig! Ein Datensilo bezeichnet isolierte Datenspeicher innerhalb einer Organisation, die nicht mit anderen Systemen verbunden sind. Datensilos entstehen organisch, wenn Abteilungen eigenständig Lösungen entwickeln. Genau das macht Enterprise Systems notwendig." },
        { text: "Datenredundanz", correct: false, feedback: "Datenredundanz (mehrfaches Speichern derselben Daten) ist oft eine Folge von Datensilos, aber nicht der Begriff für die Grundsituation selbst." },
        { text: "Datenfragmentierung", correct: false, feedback: "Datenfragmentierung beschreibt eher die physische Aufteilung von Dateien. Der treffendere Begriff für das strukturelle Problem bei NEXUS ist ein anderer." }
      ],
    },
    {
      id: "1_5", type: "persona", charKey: "priya",
      intro: "Ich bin seit sechs Monaten bei NEXUS und habe in dieser Zeit die gesamte IT-Landschaft kartiert. Mein Ergebnis: 23 verschiedene Softwaresysteme, kaum Dokumentation, fast keine durchgängigen Schnittstellen. Jede Abteilung hat über die Jahre ihre eigenen Insellösungen gebaut, pragmatisch, aber aus IT-Architektur-Perspektive ein Albtraum.",
      dailyRoutine: "Priya verbringt ihre Zeit damit, die bestehende Systemlandschaft zu verstehen und gleichzeitig akute Probleme zu lösen: Serverausfälle, Datenverluste durch manuelle Fehler, eine kritische Sicherheitslücke in der selbst entwickelten Lagerverwaltung.",
      question: "Wie beschreibt man den Zustand einer IT-Landschaft, die sich über viele Jahre ohne zentrale Planung durch eigenständige Abteilungsentscheidungen entwickelt hat?",
      answers: [
        { text: "Eine schlecht verwaltete IT, deren Mitarbeitende keine technischen Kompetenzen haben. Inkompetenz auf allen Ebenen, von der Führung bis zu den Mitarbeitenden, ist die häufigste Ursache für dysfunktionale IT-Landschaften in mittelständischen Unternehmen.", correct: false, feedback: "Das wäre eine unfaire Bewertung. NEXUS-Mitarbeitende haben pragmatische Lösungen für reale Probleme entwickelt. Das ist menschlich verständlich. Das Problem ist strukturell, nicht personell." },
        { text: "Eine organisch gewachsene IT-Landschaft mit historisch bedingter Heterogenität und fehlender übergreifender Architekturstrategie.", correct: true, feedback: "Sehr treffend! Man spricht von 'historisch gewachsener IT' oder auch 'Shadow IT'. Dieser Zustand ist bei mittelständischen Unternehmen extrem häufig. Er entsteht, wenn lokale Optimierung (jede Abteilung löst ihr Problem) globale Effizienz verhindert." },
        { text: "Eine veraltete IT, die vollständig neu gebaut werden muss. Ein kompletter Neustart auf der grünen Wiese ermöglicht es, alle technischen Schulden loszuwerden und eine moderne, zukunftssichere Infrastruktur aufzubauen.", correct: false, feedback: "Das ist oft die erste Intuition. In der Praxis ist ein Komplettaustausch jedoch selten sinnvoll oder möglich. Meist geht es um gezielte Integration, Modernisierung und schrittweise Ablösung." }
      ],
    },
    {
      id: "1_6", type: "reflection", charKey: "maya",
      message: "Sie haben jetzt alle fünf Schlüsselpersonen bei NEXUS Corp kennengelernt. Jede Person repräsentiert eine andere Perspektive auf dieselbe Realität, und das ist kein Zufall. Enterprise Information Systems existieren immer im sozialen Kontext einer Organisation. Bevor wir Lösungen diskutieren, möchte ich Ihre erste Einschätzung hören.",
      question: "Was ist die fundamentalste Ursache für die Probleme bei NEXUS Corp?",
      answers: [
        { text: "Fehlendes Management: Die Führungskräfte treffen schlechte strategische Entscheidungen.", correct: false, feedback: "Das wäre eine voreilige und falsche Schlussfolgerung. Maya, Tom, Carlos, Lena und Priya handeln rational innerhalb ihrer Rahmenbedingungen. Das Problem ist strukturell, nicht personell." },
        { text: "Fehlende Integration: Daten, Prozesse und Menschen arbeiten in isolierten Silos statt als verbundenes System.", correct: true, feedback: "Ausgezeichnet! Sie denken bereits systemisch. Das Kernproblem ist fehlende Integration auf drei Ebenen: Daten (Silos), Prozesse (Medienbrüche) und Menschen (Abteilungsdenken). Enterprise Systems sind im Kern Integrationsplattformen." },
        { text: "Fehlende Technologie: NEXUS Corp hat schlicht die falschen oder zu wenige Softwaresysteme.", correct: false, feedback: "Technologie ist Teil der Antwort, greift aber zu kurz. Neue Software allein löst keine Probleme, wenn Prozesse unklar und Menschen nicht eingebunden sind." }
      ],
    },
  ],
  outro: {
    charKey: "maya",
    message: "Sehr gut! Sie haben ein fundiertes Bild von NEXUS Corp und unseren Herausforderungen. Im nächsten Level erarbeiten wir das begriffliche Fundament.",
    xp: 200,
    badge: "🏅 NEXUS-Kenner",
  },
};
