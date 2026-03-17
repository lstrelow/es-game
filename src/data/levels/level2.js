export const L2 = {
  intro: {
    charKey: "priya",
    message: "Bevor wir konkrete Systeme bewerten oder einführen, brauchen wir ein gemeinsames begriffliches Fundament. In meiner Erfahrung scheitern viele IT-Projekte daran, dass alle Beteiligten dieselben Worte benutzen – aber völlig verschiedene Dinge meinen. Heute klären wir die Grundbegriffe der Wirtschaftsinformatik, die uns durch das gesamte Projekt begleiten werden.",
  },
  scenes: [
    {
      id: "2_1", type: "definition", charKey: "maya",
      charMessage: "Klingt trivial – aber lassen Sie uns präzise sein: Was genau ist ein Unternehmen aus wissenschaftlicher Perspektive?",
      definition: {
        term: "Betrieb & Unternehmen (Enterprise)",
        summary: "Ein Enterprise ist ein komplexes, integriertes, voneinander abhängiges System von Menschen, Prozessen und Technologien, welches den von Stakeholdern festgelegten Mehrwert erzielt (Nightingale & Srinivasan, 2011).",
        aspects: [
          { icon: "🏭", title: "Betrieb",              text: "Zentrales Erfahrungsobjekt der BWL und Wirtschaftsinformatik – die allgemeinste Form wirtschaftlicher Einheit" },
          { icon: "🏢", title: "Unternehmen",          text: "Spezialfall des Betriebs: vorwiegend darauf ausgerichtet, fremden Güter- und Leistungsbedarf zu decken" },
          { icon: "🏠", title: "Haushalt",             text: "Gegenpart zum Unternehmen: deckt den eigenen Bedarf selbst – kein Marktziel" },
          { icon: "🔗", title: "Enterprise = Unternehmen", text: "Beide Begriffe werden synonym verwendet – keine abweichende Definition in dieser Veranstaltung" },
        ],
        nexusContext: "NEXUS Corp ist ein Unternehmen: Das Ziel ist die Deckung fremden Bedarfs – Industriekunden kaufen Hardware, die NEXUS produziert und vertreibt. Der Mehrwert für Stakeholder ist der Maßstab für Erfolg.",
      },
      question: "Was unterscheidet ein Unternehmen von einem Haushalt als Betriebsform?",
      answers: [
        { text: "Ein Unternehmen hat mehr Mitarbeitende als ein Haushalt.", correct: false, feedback: "Die Unterscheidung ist nicht quantitativ. Ein Einpersonenunternehmen ist trotzdem ein Unternehmen – ein Großhaushalt bleibt ein Haushalt." },
        { text: "Ein Unternehmen ist darauf ausgerichtet, fremden Güter- und Leistungsbedarf zu decken – ein Haushalt deckt seinen eigenen Bedarf.", correct: true, feedback: "Genau die Unterscheidung aus der Vorlesung. NEXUS Corp produziert und verkauft für externe Kunden – das macht es zum Unternehmen." },
        { text: "Unternehmen zahlen Steuern, Haushalte nicht.", correct: false, feedback: "Das ist weder trennscharf noch die definitorische Unterscheidung. Der entscheidende Unterschied liegt in der Ausrichtung auf fremden vs. eigenen Bedarf." },
      ],
    },
    {
      id: "2_2", type: "definition", charKey: "maya",
      charMessage: "Organisation – das Wort fällt bei uns täglich dutzende Male. Aber was meinen wir damit genau? Hat NEXUS Corp eine Organisation – oder ist NEXUS Corp eine Organisation?",
      definition: {
        term: "Organisation",
        summary: "Der Organisationsbegriff umfasst aus analytisch-gestaltender Perspektive die Analyse, Synthese und Aufgabenverteilung auf Aufgabenträger. Je nach Perspektive unterscheidet man Aufbauorganisation (Struktur) und Ablauforganisation (Prozesse).",
        aspects: [
          { icon: "🔍", title: "Analyse",           text: "Zerlegung von Gesamtaufgaben in Teilaufgaben – was muss getan werden?" },
          { icon: "🔧", title: "Synthese",           text: "Zusammenfügung von Teilaufgaben zu sinnvollen Einheiten – wie wird es gebündelt?" },
          { icon: "👤", title: "Aufgabenverteilung", text: "Zuweisung von Aufgaben auf Aufgabenträger (Stellen, Abteilungen, Personen)" },
          { icon: "📐", title: "Zwei Perspektiven",  text: "Strukturperspektive → Aufbauorganisation; Prozessperspektive → Ablauforganisation" },
        ],
        nexusContext: "Bei NEXUS Corp stellt sich gerade die Organisationsfrage neu: Welche Aufgaben gibt es (Analyse)? Wie werden sie zu Abteilungen gebündelt (Synthese)? Wer ist für was verantwortlich (Aufgabenverteilung)?",
      },
      question: "Maya fragt: 'Hat NEXUS Corp eine Organisation, oder ist NEXUS Corp eine Organisation?' Welche Antwort entspricht der Vorlesungsdefinition?",
      answers: [
        { text: "NEXUS Corp ist eine Organisation – der Begriff beschreibt die Einheit als Ganzes.", correct: false, feedback: "Das wäre der institutionelle Organisationsbegriff. Die Vorlesung verwendet eine analytisch-gestaltende Perspektive, die Organisation als gestaltbares Instrument versteht." },
        { text: "NEXUS Corp hat eine Organisation – der Begriff beschreibt die bewusste Gestaltung von Struktur und Prozessen als Instrument.", correct: true, feedback: "Richtig! Die Vorlesung nimmt eine analytisch-gestaltende Perspektive ein: Organisation ist etwas, das man analysiert, entwirft und zuweist – kein natürlich gegebener Zustand, sondern ein bewusst gestaltetes Instrument." },
        { text: "Beides ist gleichwertig – die Unterscheidung ist rein sprachlich.", correct: false, feedback: "Die Unterscheidung ist konzeptionell bedeutsam: Sie bestimmt, ob Organisation als festes Merkmal einer Einheit oder als gestaltbares Werkzeug verstanden wird." },
      ],
    },
    {
      id: "2_3", type: "definition", charKey: "tom",
      charMessage: "Bei mir im Lager weiß jeder, was zu tun ist – das haben wir klar geregelt. Aber wenn eine Bestellung reinkommt, die durch Vertrieb, Lager und Buchhaltung muss? Da bricht das Chaos aus. Irgendwie sind das zwei verschiedene Probleme.",
      definition: {
        term: "Aufbauorganisation & Ablauforganisation",
        summary: "Aufbauorganisation: Verteilung von Aufgaben auf Aufgabenträger (Stellen, Abteilungen) – der statische, strukturelle Aspekt (Bea & Göbel 1999; Kosiol 1976). Ablauforganisation: raumzeitliche Strukturierung der Arbeitsvorgänge – der dynamische, prozessuale Aspekt (Kosiol, 1976).",
        aspects: [
          { icon: "🏗️", title: "Aufbauorganisation (statisch)",  text: "Wer? – Stellen, Abteilungen, Hierarchien, Zuständigkeiten. Fokus: Struktur" },
          { icon: "🔄", title: "Ablauforganisation (dynamisch)", text: "Wie & Wann? – Raumzeitliche Strukturierung der Arbeitsvorgänge. Fokus: Prozesse" },
          { icon: "📌", title: "Quelle Aufbau",                  text: "Bea & Göbel, 1999, S. 221ff.; Nordsieck, 1955, S. 76; Kosiol, 1976, S. 43" },
          { icon: "📌", title: "Quelle Ablauf",                  text: "Kosiol, 1976, S. 43" },
        ],
        nexusContext: "NEXUS Corp hat eine klare Aufbauorganisation: Tom leitet Logistik, Carlos den Vertrieb. Aber der Ablauf einer Kundenbestellung – Angebot, Kommissionierung, Versand, Rechnung – ist raumzeitlich nicht strukturiert.",
      },
      question: "Tom beschreibt zwei Probleme: (1) 'Niemand weiß, wer für Reklamationen zuständig ist.' (2) 'Der Prozess von Bestellung bis Lieferung dauert viel zu lange.' Welchem Begriff gehört welches Problem?",
      answers: [
        { text: "Beide Probleme betreffen die Ablauforganisation, da es um operative Abläufe geht.", correct: false, feedback: "Problem (1) ist eine Zuständigkeitsfrage – wer ist verantwortlich? Das ist Aufbauorganisation. Problem (2) betrifft die raumzeitliche Strukturierung – das ist Ablauforganisation." },
        { text: "Problem (1) ist Aufbauorganisation (Zuständigkeit = Struktur), Problem (2) ist Ablauforganisation (Prozessdauer = raumzeitliche Strukturierung).", correct: true, feedback: "Exakt! Kosiol unterscheidet präzise: Aufbau regelt, wer zuständig ist (statisch). Ablauf regelt, wie und wann Arbeitsvorgänge stattfinden (dynamisch)." },
        { text: "Problem (1) ist Ablauforganisation (Prozessverantwortung), Problem (2) ist Aufbauorganisation (strukturelle Ineffizienz).", correct: false, feedback: "Die Zuordnung ist vertauscht. Zuständigkeit ist eine Strukturfrage (Aufbau), Prozessdauer ist eine Ablaufffrage." },
      ],
    },
    {
      id: "2_4", type: "definition", charKey: "priya",
      charMessage: "Ich arbeite täglich mit dem Begriff 'System' – IT-System, ERP-System, Gesamtsystem. Aber was ist ein System eigentlich präzise? Die Definition hat direkte Auswirkungen darauf, wie ich Architekturen entwerfe.",
      definition: {
        term: "System",
        summary: "Ein System ist das Modell einer Ganzheit, die aus miteinander verknüpften Teilen besteht, Beziehungen zwischen Elementen (Inputs, Outputs, Zustände) aufweist und von der Umwelt oder einem Supersystem hierarchisch abgegrenzt wird.",
        aspects: [
          { icon: "🧩", title: "Verknüpfte Teile",       text: "Elemente, Teil- und Subsysteme stehen in definierten Beziehungen zueinander" },
          { icon: "↔️", title: "Inputs, Outputs, Zustände", text: "Beziehungen zwischen Elementen sind beschreibbar – das System ist modellierbar" },
          { icon: "🌐", title: "Systemgrenze",            text: "Abgrenzung von Umwelt oder Supersystem – hierarchische Einbettung möglich" },
          { icon: "🔓", title: "Offenes System",          text: "Jedes Unternehmen ist ein offenes System: es steht in Beziehung zu wirtschaftlicher, gesellschaftlicher und natürlicher Umwelt" },
        ],
        nexusContext: "NEXUS Corp ist ein offenes System: Es bezieht Inputs von Beschaffungsmärkten (Lieferanten), gibt Outputs an Absatzmärkte ab (Kunden), und wird von gesellschaftlicher Umwelt beeinflusst (Gesetze, Steuern, Anwohner).",
      },
      question: "NEXUS Corp erhält eine neue Umweltauflage: Lieferwagen müssen ab 2027 elektrisch sein. Warum ist das aus Systemsicht ein relevantes Ereignis?",
      answers: [
        { text: "Weil es die Kosten erhöht und damit den Gewinn mindert.", correct: false, feedback: "Das ist eine betriebswirtschaftliche Konsequenz, aber nicht die systemtheoretische Begründung der Relevanz." },
        { text: "Weil NEXUS Corp als offenes System in Beziehung zu seiner gesellschaftlichen Umwelt steht – externe Einflüsse (Gesetze, Institutionen) wirken als Inputs auf das System.", correct: true, feedback: "Genau. Offene Systeme stehen in Austauschbeziehungen mit ihrer Umwelt. Gesetzliche Auflagen sind Inputs der gesellschaftlichen Umwelt, die interne Systemzustände verändern." },
        { text: "Weil Systeme möglichst geschlossen sein sollten, um solche Einflüsse zu vermeiden.", correct: false, feedback: "Unternehmen sind per Definition offene Systeme – Abgeschlossenheit wäre betriebswirtschaftlich unmöglich und unerwünscht." },
      ],
    },
    {
      id: "2_5", type: "definition", charKey: "lena",
      charMessage: "Ich höre ständig: 'Lena, das IS funktioniert nicht.' Aber meinen alle dasselbe? Ich glaube, die meisten verwechseln IS mit der Software. Das führt zu grundlegend falschen Lösungsansätzen.",
      definition: {
        term: "Informationssystem (IS)",
        summary: "Ein Informationssystem (genauer: Informations- und Kommunikationssystem) ist ein System, das den Zwecken der Information und Kommunikation dient. IS tragen durch die Repräsentation von interessierenden Aspekten der Realität in Informationen zur Bewältigung betrieblicher Aufgaben bei.",
        aspects: [
          { icon: "📡", title: "Zweck: Information & Kommunikation", text: "IS dienen der Informationsversorgung und der Kommunikation zwischen Aufgabenträgern" },
          { icon: "🪞", title: "Realitäts- repräsentation",            text: "IS bilden Aspekte der Realität in Informationen ab – Modelle der betrieblichen Wirklichkeit" },
          { icon: "⚙️", title: "Betriebliche Aufgaben",              text: "IS tragen zur Bewältigung konkreter betrieblicher Aufgaben bei – es ist kein Selbstzweck" },
          { icon: "👥", title: "Soziotechnisches System",            text: "IS umfassen Menschen, Prozesse und Technik – nicht nur Software" },
        ],
        nexusContext: "Lenas manuelles Reporting-System ist ein vollständiges Informationssystem: Es repräsentiert betriebliche Realität (Lagerbestände, Umsätze) in Informationen, dient der Kommunikation und bewältigt betriebliche Aufgaben.",
      },
      question: "Lena sagt: 'Unser Informationssystem ist defekt.' Tom antwortet: 'Wie – alle Server laufen doch einwandfrei!' Was versteht Tom falsch?",
      answers: [
        { text: "Tom verwechselt das Anwendungssystem (Server, Software) mit dem Informationssystem, das auch Menschen, Prozesse und die Qualität der Informationsversorgung umfasst.", correct: true, feedback: "Exakt. Ein IS kann dysfunktional sein, obwohl die Technik läuft: wenn Daten veraltet sind, falsch weitergegeben werden oder Entscheidungen nicht unterstützen." },
        { text: "Tom hat Recht – wenn die Server laufen, ist das IS technisch intakt.", correct: false, feedback: "Server-Verfügbarkeit ist eine notwendige, aber keine hinreichende Bedingung für ein funktionierendes IS." },
        { text: "Lena meint eigentlich das Anwendungssystem – sie benutzt nur den falschen Begriff.", correct: false, feedback: "Lena verwendet den Begriff korrekt. Sie diagnostiziert eine IS-Dysfunktion: Die Informationsversorgung der betrieblichen Aufgaben funktioniert nicht." },
      ],
    },
    {
      id: "2_6", type: "definition", charKey: "priya",
      charMessage: "Wenn Maya sagt 'wir brauchen ein besseres Informationssystem' und ich sage 'wir brauchen ein neues Anwendungssystem' – meinen wir dann dasselbe? Fast. Aber der Unterschied ist entscheidend.",
      definition: {
        term: "Anwendungssystem (AS)",
        summary: "Das Anwendungssystem stellt den automatisierten Teil des Informationssystems dar. Das Organisationssystem umfasst aus Informationssicht weitere Informationen, die nicht automatisiert sind.",
        aspects: [
          { icon: "💻", title: "Automatisierter Teil des IS", text: "AS = der Teil des IS, der durch Software und Technik automatisiert abläuft" },
          { icon: "📋", title: "Organisationssystem",         text: "Der nicht-automatisierte Teil: manuelle Prozesse, implizites Wissen, menschliche Kommunikation" },
          { icon: "🔧", title: "AS ⊂ IS",                    text: "Das Anwendungssystem ist Teilmenge des Informationssystems – nicht umgekehrt" },
          { icon: "🏷️", title: "Beispiele bei NEXUS",        text: "DATEV (AS für Buchhaltung), Access-DB (AS für Lager) – beide Teile größerer IS" },
        ],
        nexusContext: "Priya meint mit 'neuem ERP' ein neues Anwendungssystem. Maya meint mit 'besserem IS' das gesamte Gefüge – auch die Prozesse, Menschen und wie Information genutzt wird.",
      },
      question: "Es wird darüber diskutiert, SAP einzuführen. Carlos sagt: 'Dann hätten wir ein perfektes Informationssystem!' Warum ist das voreilig?",
      answers: [
        { text: "Weil SAP zu komplex für einen Mittelständler ist.", correct: false, feedback: "Das ist eine praktische Einschätzung, aber nicht die konzeptionelle Antwort. Die Frage zielt auf das Verhältnis von AS und IS." },
        { text: "Weil ein Anwendungssystem nur der automatisierte Teil des IS ist – das Organisationssystem (Prozesse, Rollen, nicht-automatisierte Information) muss separat gestaltet werden.", correct: true, feedback: "Präzise! AS ⊂ IS. Ein neues Anwendungssystem ersetzt nicht das gesamte Informationssystem. Ohne Anpassung des Organisationssystems wird SAP den IS-Zweck nicht erfüllen." },
        { text: "Weil Informationssysteme nie perfekt sein können.", correct: false, feedback: "Das ist zwar pragmatisch richtig, aber nicht die konzeptionelle Antwort. Es geht um die präzise Unterscheidung: AS ist nicht gleich IS." },
      ],
    },
    {
      id: "2_7", type: "matching", charKey: "priya",
      charMessage: "Zum Abschluss ein Praxistest: Ich beschreibe Situationen aus dem NEXUS-Alltag. Ordnen Sie jede Situation dem richtigen Grundbegriff zu.",
      instruction: "Klicken Sie zuerst einen Begriff, dann die passende Situation.",
      pairs: [
        { situation: "NEXUS Corp verkauft Industriehardware an externe Kunden und erzielt damit den von Stakeholdern geforderten Mehrwert.", term: "Unternehmen (Betrieb)" },
        { situation: "Maya entscheidet: Der Einkauf wird künftig der Logistik-Abteilung unter Tom unterstellt.", term: "Aufbauorganisation" },
        { situation: "Ein Kundenauftrag durchläuft definierte Schritte: Auftragseingang → Lagerkontrolle → Kommissionierung → Versand → Rechnungsstellung.", term: "Ablauforganisation" },
        { situation: "NEXUS Corp bezieht Rohstoffe von Lieferanten, verkauft an Kunden und muss neue Umweltauflagen der Gemeinde einhalten.", term: "System (offen)" },
        { situation: "Lenas Excel-Tabellen, ihre Konsolidierungsprozesse und sie selbst bilden zusammen die Informationsversorgung für Mayas Entscheidungen.", term: "Informationssystem" },
        { situation: "Das neue SAP-System, das Priya gerade konfiguriert, übernimmt automatisiert die Auftragsverarbeitung und Lagerbuchung.", term: "Anwendungssystem" },
      ],
    },
  ],
  outro: {
    charKey: "priya",
    message: "Hervorragend! Sie beherrschen jetzt die Grundbegriffe: Betrieb und Unternehmen, den analytisch-gestaltenden Organisationsbegriff, die Begriffe Aufbau- und Ablauforganisation, den offenen Systembegriff sowie die präzise Unterscheidung von Informationssystem und Anwendungssystem.",
    xp: 250,
    badge: "🎓 Begriffsmeister",
  },
};
