export const L3 = {
  intro: {
    charKey: "maya",
    message: "Wir haben verstanden, dass NEXUS Corp ein Integrationsproblem hat. Aber bevor wir entscheiden, welche Systeme wir einführen, müssen wir wissen, was es überhaupt gibt. Enterprise Systems sind keine monolithischen Blöcke — sie bestehen aus spezialisierten Komponenten, die jeweils einen bestimmten Bereich des Unternehmens abdecken. Lassen Sie mich Ihnen die wichtigsten vorstellen.",
  },
  scenes: [
    {
      id: "3_1", type: "definition", charKey: "maya",
      charMessage: "Fangen wir mit dem Herzstück an. Wenn Unternehmen von 'dem System' sprechen, meinen sie meistens das hier.",
      definition: {
        term: "ERP – Enterprise Resource Planning",
        summary: "Ein ERP-System ist ein integriertes Anwendungspaket, das die operativen Prozesse in allen wesentlichen betrieblichen Funktionsbereichen unterstützt — Finanz- und Rechnungswesen, Personalwirtschaft, Materialwirtschaft, Produktion, Vertrieb. Die Integration wird von einer zentralen Datenbank getragen, wodurch Datenredundanzen vermieden und integrierte Geschäftsprozesse ermöglicht werden (Hansen & Neumann, 2009).",
        aspects: [
          { icon: "🗄️", title: "Zentrale Datenbank",      text: "Alle Bereiche greifen auf dieselben Daten zu — keine Silos, keine Redundanzen" },
          { icon: "🔗", title: "Integration",              text: "Finanz-, Personal-, Lager-, Produktions- und Vertriebsprozesse sind miteinander verknüpft" },
          { icon: "⚙️", title: "Operative Unterstützung", text: "ERP deckt das Tagesgeschäft ab — Bestellungen, Rechnungen, Lagerabbuchungen, Gehaltsläufe" },
          { icon: "🏷️", title: "Beispiele",               text: "SAP S/4HANA Cloud, Oracle Fusion Cloud ERP, Microsoft Dynamics 365, Workday" },
        ],
        nexusContext: "NEXUS Corp hat kein ERP. Tom führt Lagerbestände in Access, die Buchhaltung läuft über DATEV, der Einkauf über Excel. Ein ERP würde alle diese Inseln auf einer zentralen Datenbank zusammenführen.",
      },
      question: "Was ist der entscheidende technische Vorteil eines ERP-Systems gegenüber einer Sammlung von Einzellösungen?",
      answers: [
        { text: "ERP-Systeme sind günstiger in der Anschaffung als mehrere Einzellösungen.", correct: false, feedback: "Das stimmt in der Regel nicht — ERP-Einführungen sind oft sehr kostspielig. Der Vorteil liegt woanders." },
        { text: "Eine zentrale Datenbank verhindert Datenredundanzen und ermöglicht integrierte Geschäftsprozesse über alle Funktionsbereiche hinweg.", correct: true, feedback: "Genau. Wenn Vertrieb, Lager und Buchhaltung auf denselben Daten arbeiten, entfallen manuelle Übertragungen, Inkonsistenzen und Medienbrüche — das ist der Kernvorteil der Integration." },
        { text: "ERP-Systeme sind einfacher zu bedienen als spezialisierte Einzellösungen.", correct: false, feedback: "Tatsächlich gelten ERP-Systeme historisch eher als komplex in der Bedienung. Das ist sogar ein bekanntes Problem — dazu kommen wir noch in einem späteren Level." },
      ],
    },
    {
      id: "3_2", type: "definition", charKey: "maya",
      charMessage: "Carlos hat mir letzte Woche wieder erklärt, dass er keine Ahnung hat, was sein Kollege dem Kunden versprochen hat. Genau dafür gibt es dieses System.",
      definition: {
        term: "CRM – Customer Relationship Management",
        summary: "CRM umfasst den Aufbau und die Festigung langfristig profitabler Kundenbeziehungen durch abgestimmte und kundenindividuelle Marketing-, Sales- und Servicekonzepte mit Hilfe moderner Informations- und Kommunikationstechnologien.",
        aspects: [
          { icon: "📞", title: "Operatives CRM",    text: "Unterstützt den direkten Kundenkontakt — z.B. Weiterleitung von Beschwerden per definiertem Workflow" },
          { icon: "📡", title: "Kollaboratives CRM", text: "Synchronisation aller Kommunikationskanäle zum Kunden: Telefon, E-Mail, Internet" },
          { icon: "📊", title: "Analytisches CRM",  text: "Erhebung und Auswertung von Kundendaten — z.B. für Kampagnengestaltung und Marktsegmentierung" },
          { icon: "🏷️", title: "Beispiele",         text: "Salesforce, Microsoft Dynamics, Oracle, ServiceNow" },
        ],
        nexusContext: "Carlos' 'Carlos-CRM' ist eine Excel-Tabelle. Kundendaten sind personengebunden — verlässt ein Mitarbeitender das Unternehmen, gehen alle Informationen verloren. Ein CRM macht Kundenbeziehungen zur Ressource des Unternehmens.",
      },
      question: "Carlos' bester Vertriebsmitarbeiter kündigt. Was wäre mit einem CRM-System anders als heute?",
      answers: [
        { text: "Der Mitarbeitende könnte nicht kündigen, weil das CRM seine Arbeit übernimmt.", correct: false, feedback: "CRM-Systeme ersetzen keine Menschen — sie sichern das Wissen, das Menschen aufgebaut haben, für die Organisation." },
        { text: "Alle Kundenhistorien, Notizen und Angebote bleiben im System erhalten und sind für das gesamte Team zugänglich.", correct: true, feedback: "Genau das ist der Kern. CRM überführt implizites, personengebundenes Wissen in explizites, organisationales Wissen." },
        { text: "Das CRM würde automatisch einen Nachfolger für den Mitarbeitenden suchen.", correct: false, feedback: "Das ist keine Funktion eines CRM-Systems. CRM verwaltet Kundenbeziehungen, keine Personalentscheidungen." },
      ],
    },
    {
      id: "3_3", type: "definition", charKey: "maya",
      charMessage: "Tom hat mir heute Morgen gesagt, dass wir einen wichtigen Kunden nicht beliefern konnten — weil ein Lieferant drei Wochen zu spät geliefert hat und wir das nicht haben kommen sehen.",
      definition: {
        term: "SCM – Supply Chain Management",
        summary: "SCM erfüllt die Aufgabe, betriebswirtschaftliche Handlungsempfehlungen zur Gestaltung von Lieferketten zu generieren. Ziel ist es, Effizienz, Qualität und Reaktionsfähigkeit der Lieferkette zu maximieren (Zelewski et al., 2008; Chopra & Meindl, 2007).",
        aspects: [
          { icon: "📋", title: "Bedarfsplanung",              text: "Analyse benötigter Materialien, Bestimmung optimaler Bestellmengen, Prognosemethoden" },
          { icon: "📦", title: "Lagerhaltung & Bestandsmgmt", text: "Materialverfügbarkeit sicherstellen bei gleichzeitiger Minimierung der Lagerkosten" },
          { icon: "🚚", title: "Bestellabwicklung",           text: "Erstellung und Platzierung von Bestellungen, Koordination von Lieferterminen" },
          { icon: "🏷️", title: "Beispiele",                  text: "SAP SCM, Oracle SCM, Blue Yonder" },
        ],
        nexusContext: "Tom erkennt Lieferengpässe heute erst, wenn der Kunde bereits angerufen hat. Ein SCM-System würde Bedarfe vorausplanen und Engpässe Wochen im Voraus sichtbar machen.",
      },
      question: "Was unterscheidet SCM grundlegend von einer einfachen Lagerverwaltungssoftware?",
      answers: [
        { text: "SCM verwaltet nur den Lagerbestand, während eine Lagerverwaltungssoftware auch Bestellungen auslöst.", correct: false, feedback: "Das ist verkehrt herum gedacht. SCM ist das umfassendere Konzept." },
        { text: "SCM betrachtet die gesamte Lieferkette — von der Beschaffung über Produktion bis zur Auslieferung — und optimiert sie als Gesamtsystem.", correct: true, feedback: "Richtig. SCM denkt in Netzwerken und Flüssen, nicht in Lagern. Es koordiniert Lieferanten, interne Prozesse und Kunden als zusammenhängendes System." },
        { text: "SCM ist nur für Produktionsunternehmen relevant, nicht für Handelsunternehmen wie NEXUS.", correct: false, feedback: "SCM ist für jedes Unternehmen relevant, das Waren beschafft, bewegt oder ausliefert." },
      ],
    },
    {
      id: "3_4", type: "definition", charKey: "maya",
      charMessage: "Wir kaufen bei über 40 Lieferanten ein. Priya hat mir letzte Woche gezeigt, dass wir keine einheitlichen Kriterien haben — jede Abteilung wählt Lieferanten nach eigenen Maßstäben aus.",
      definition: {
        term: "SRM – Supplier Relationship Management",
        summary: "SRM bezeichnet die IT-gestützte Gestaltung der strategischen und operativen Beschaffungsprozesse und des Lieferantenmanagements, ausgehend von einer Beschaffungsgesamtstrategie (Appelfeller & Buchholz, 2011).",
        aspects: [
          { icon: "🔍", title: "Lieferantenauswahl",    text: "Systematische Identifikation geeigneter Lieferanten nach Preis, Qualität, Zuverlässigkeit und Nachhaltigkeit" },
          { icon: "🤝", title: "Lieferanten- entwicklung", text: "Aufbau langfristiger Partnerschaften durch strategische Allianzen und Entwicklungs- programme" },
          { icon: "💡", title: "Innovationspartner",    text: "Identifikation von Lieferanten als Quellen für Innovationen — nicht nur als Warenlieferanten" },
          { icon: "🏷️", title: "Beispiele",             text: "SAP Ariba, Ivalua, Coupa" },
        ],
        nexusContext: "NEXUS kauft heute nach Bauchgefühl ein. SRM würde alle Lieferantenbeziehungen zentral steuern — mit einheitlichen Kriterien und einer strategischen Perspektive.",
      },
      question: "Worin liegt der strategische Unterschied zwischen SRM und reiner Einkaufsverwaltung?",
      answers: [
        { text: "SRM automatisiert lediglich die Bestellvorgänge und spart dadurch Zeit.", correct: false, feedback: "Automatisierung ist ein mögliches Feature, aber nicht der strategische Kern." },
        { text: "SRM betrachtet Lieferanten als strategische Partner und steuert die Beziehung aktiv nach Gesamtstrategie.", correct: true, feedback: "Genau. SRM überführt den Einkauf von einer operativen Funktion in eine strategische: Lieferanten werden langfristig ausgewählt, entwickelt und als Innovationsquellen genutzt." },
        { text: "SRM ist nur für sehr große Unternehmen mit hunderten Lieferanten relevant.", correct: false, feedback: "Auch mittelständische Unternehmen wie NEXUS profitieren von strukturiertem Lieferantenmanagement." },
      ],
    },
    {
      id: "3_5", type: "definition", charKey: "maya",
      charMessage: "Carlos hat mich gefragt, ob wir unsere Produkte auch online verkaufen könnten. Dafür bräuchten wir eine ganz eigene Kategorie von System.",
      definition: {
        term: "Shopsystem / E-Commerce",
        summary: "Ein Shopsystem steht für den elektronischen Verkauf von Produkten bzw. Dienstleistungen über digitale Netzwerke (Kollmann, 2019).",
        aspects: [
          { icon: "🖼️", title: "Content-Management",      text: "Bereitstellung von Produktinformationen in Texten, Bildern, Videos" },
          { icon: "🎯", title: "Marketing Automation",     text: "Personalisierte Marketingkampagnen auf Basis von Datenauswertungen" },
          { icon: "🔄", title: "Cross-Channel-Integration", text: "Store-to-Web und Web-to-Store: Online und stationär als verbundene Kanäle" },
          { icon: "🏷️", title: "Beispiele",               text: "Shopify, SAP Commerce Cloud, Salesforce Commerce Cloud" },
        ],
        nexusContext: "NEXUS verkauft heute ausschließlich über Carlos' Vertriebsteam. Ein Shopsystem würde einen direkten digitalen Absatzkanal eröffnen — mit automatisierter Bestellabwicklung und Integration ins ERP.",
      },
      question: "Was meint 'Cross-Channel-Integration' im Kontext eines Shopsystems?",
      answers: [
        { text: "Dass der Onlineshop auf mehreren Geräten wie Handy und PC funktioniert.", correct: false, feedback: "Das beschreibt Responsivität — nicht Cross-Channel-Integration." },
        { text: "Die bewusste Verknüpfung von Online- und stationären Kanälen — sodass beide sich gegenseitig verstärken statt zu konkurrieren.", correct: true, feedback: "Genau. Store-to-Web und Web-to-Store: Kunden wechseln zwischen Kanälen, und das Unternehmen begleitet diese Wechsel aktiv." },
        { text: "Die Integration des Shopsystems in soziale Netzwerke wie Instagram.", correct: false, feedback: "Social Commerce ist ein verwandtes Thema, aber nicht das, was hier gemeint ist." },
      ],
    },
    {
      id: "3_6", type: "definition", charKey: "maya",
      charMessage: "Lena verbringt 60 % ihrer Zeit damit, Daten zusammenzusuchen statt sie zu analysieren. Das ist verschwendetes Potenzial.",
      definition: {
        term: "BI – Business Intelligence",
        summary: "Business Intelligence ist ein Oberbegriff für Anwendungen, Infrastruktur, Werkzeuge und Best Practices für den Zugang zu und die Analyse von Daten und Information für die strategische Entscheidungsfindung (Gartner, 2013).",
        aspects: [
          { icon: "🗄️", title: "Datenbereitstellung",       text: "Konsolidierung von Daten aus verschiedenen Quellen — strukturierte Bereitstellung über ein Data Warehouse" },
          { icon: "📐", title: "Informations- generierung",    text: "Entwicklung endbenutzer- freundlicher Berichtskomponenten auf Basis statistischer Modelle" },
          { icon: "📊", title: "Informations- bereitstellung", text: "Visualisierungs- komponenten für zielgruppengerechte und konsistente Ergebnispräsentation" },
          { icon: "🏷️", title: "Beispiele",                 text: "Tableau, SAP Analytics, AWS QuickSight, IBM Cognos" },
        ],
        nexusContext: "Lenas manuelle Excel-Berichte sind beim Versenden bereits veraltet. BI würde Daten aus ERP, CRM und SCM automatisch konsolidieren und Maya Echtzeit-Kennzahlen liefern.",
      },
      question: "Was unterscheidet BI grundlegend von einem normalen Berichtswesen mit Excel?",
      answers: [
        { text: "BI-Systeme sind teurer und deshalb für größere Unternehmen geeigneter.", correct: false, feedback: "Kosten sind kein definitorisches Merkmal. Der Unterschied liegt in der Architektur." },
        { text: "BI automatisiert die Konsolidierung aus mehreren Quellen und liefert aktuelle, konsistente Informationen statt manuell zusammengestellter Momentaufnahmen.", correct: true, feedback: "Genau. Das Kernproblem bei Lena ist nicht fehlendes Analyse-Know-how, sondern der manuelle Aufwand der Datenbeschaffung. BI löst genau das." },
        { text: "BI ersetzt die Notwendigkeit, Daten zu analysieren — das System trifft Entscheidungen automatisch.", correct: false, feedback: "BI unterstützt Entscheidungen, trifft sie aber nicht. Es liefert die Informationsgrundlage." },
      ],
    },
    {
      id: "3_7", type: "matching", charKey: "maya",
      charMessage: "Sie kennen jetzt alle sechs Systemtypen. Welches System löst welches Problem bei NEXUS Corp?",
      instruction: "Klicken Sie zuerst ein System, dann das passende NEXUS-Problem.",
      pairs: [
        { situation: "Tom weiß nicht, dass ein Lieferant in drei Wochen ausfällt — und erfährt es erst, wenn der Kunde anruft.", term: "SCM" },
        { situation: "Lena verbringt täglich Stunden damit, Daten aus DATEV, Access und Excel manuell zusammenzuführen.", term: "BI" },
        { situation: "Wenn ein Vertriebsmitarbeiter kündigt, gehen alle Kundeninformationen und Beziehungshistorien verloren.", term: "CRM" },
        { situation: "NEXUS kauft bei 40 Lieferanten ein — ohne einheitliche Kriterien für Qualität, Preis oder Zuverlässigkeit.", term: "SRM" },
        { situation: "Buchhaltung, Lager und Vertrieb arbeiten mit separaten Systemen — eine integrierte Sicht auf das Unternehmen fehlt.", term: "ERP" },
        { situation: "Carlos möchte Produkte direkt online verkaufen und Kunden personalisierte Angebote schicken.", term: "Shopsystem" },
      ],
    },
    {
      id: "3_8", type: "reflection", charKey: "maya",
      message: "Diese Systeme lösen keine Probleme von selbst. Sie sind Werkzeuge — und wie jedes Werkzeug hängt ihr Wert davon ab, wie gut sie eingesetzt werden.",
      question: "Welche Aussage beschreibt den Zusammenhang zwischen den ES-Komponenten am treffendsten?",
      answers: [
        { text: "Jedes System ist unabhängig — ein Unternehmen kann ERP einführen, ohne CRM oder SCM zu berücksichtigen.", correct: false, feedback: "In der Praxis sind die Systeme eng verknüpft. Ein ERP ohne SCM-Integration führt zu nicht aufeinander abgestimmten Prozessen." },
        { text: "Die Systeme ergänzen sich: ERP bildet die operative Basis, CRM/SCM/SRM spezialisieren einzelne Bereiche, BI wertet das Ganze aus.", correct: true, feedback: "Genau diese Architekturlogik liegt modernen Enterprise-Landschaften zugrunde. ERP ist das Rückgrat, die Spezialkomponenten erweitern es, und BI macht die Daten entscheidungsfähig." },
        { text: "Das beste Unternehmen hat alle sechs Systeme — je mehr, desto besser.", correct: false, feedback: "Mehr Systeme bedeuten mehr Komplexität und höhere Kosten. Die Kunst liegt in der richtigen Auswahl und Integration." },
      ],
    },
  ],
  outro: {
    charKey: "maya",
    message: "Hervorragend! Sie verstehen jetzt, welche ES-Komponenten es gibt und welche Probleme sie lösen. Im nächsten Schritt schauen wir uns an, wie diese Systeme gestaltet sein müssen, damit Menschen sie auch wirklich nutzen wollen.",
    xp: 300,
    badge: "🧩 Systemkenner",
  },
};
