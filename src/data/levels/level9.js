export const L9 = {
  intro: {
    charKey: "priya",
    message: "Wir stehen vor einer letzten großen Entscheidung: Betreiben wir SAP auf unseren eigenen Servern, oder nutzen wir die Cloud? Als ich vor 20 Jahren angefangen habe, war die Antwort klar: eigene Server. Heute ist die Welt anders. Aber Cloud bedeutet nicht automatisch besser. Lassen Sie mich Ihnen erklären, was Cloud Computing wirklich ist, und was nicht."
  },
  scenes:[
    {
      id: "9_1", type: "definition", charKey: "priya",
      charMessage: "Der Begriff Cloud wird inflationär verwendet. Was Cloud Computing technisch und konzeptionell bedeutet, ist präziser definiert als viele denken.",
      definition:{ term: "Cloud Computing: Definition und Grundidee", summary: "Cloud Computing stellt eine Ansammlung von Diensten, Anwendungen und Ressourcen dar, die dem Nutzer flexibel und skalierbar über das Internet angeboten werden, ohne langfristige Kapitalbindung und IT-spezifisches Know-how vorauszusetzen. Es ist eine Form des IT-Sourcings auf Mietbasis.",
        aspects: [
          { icon: "🌐", title: "Bedarfsorientiert", text: "IT-Ressourcen werden genau dann bezogen, wenn sie gebraucht werden: keine Vorratshaltung von Kapazitäten" },
          { icon: "💳", title: "Mietmodell", text: "Ausschließlich Miete und verbrauchsabhängige Bezahlung: keine Investition in eigene Hardware" },
          { icon: "🔧", title: "Betrieb beim Anbieter", text: "Betrieb, Wartung und Updates werden durch den Cloud-Anbieter gewährleistet" },
          { icon: "📦", title: "Infrastruktur oder Software", text: "Bezug reicht von IT-Infrastruktur (Server, Speicher) bis zu kompletten Softwareanwendungen" }
        ],
        nexusContext: "NEXUS hat heute drei physische Server im Keller, gewartet von Priya nebenbei. Cloud würde bedeuten: SAP läuft bei einem Anbieter, NEXUS zahlt pro Monat, und Priya kann sich auf Architektur statt auf Server-Wartung konzentrieren." },
      question: "Was ist der grundlegende wirtschaftliche Unterschied zwischen On-Premise und Cloud?",
      answers: [
        { text: "Cloud ist sicherer als On-Premise, weil Hyperscaler wie AWS oder Azure Milliarden in Sicherheitsinfrastruktur investieren und ein Sicherheitsniveau bieten, das NEXUS mit eigenen Servern nie erreichen könnte.", correct: false, feedback: "Sicherheit ist ein wichtiger Aspekt, aber kein generell zutreffender Vorteil der Cloud." },
        { text: "On-Premise bindet Kapital in Hardware und erfordert IT-Know-how; Cloud wandelt Investitionsausgaben in laufende Betriebsausgaben um und lagert den Betrieb aus.", correct: true, feedback: "Genau der entscheidende Unterschied. CAPEX (Investition) vs. OPEX (laufende Kosten) ist die klassische Gegenüberstellung." },
        { text: "Cloud ist langfristig günstiger als On-Premise, weil Investitionen in Hardware entfallen, Updates automatisch eingespielt werden und NEXUS nur für tatsächlich genutzte Ressourcen zahlt.", correct: false, feedback: "Das stimmt nicht generell. Cloud kann günstiger sein, muss es aber nicht." }
      ] },
    {
      id: "9_2", type: "definition", charKey: "priya",
      charMessage: "Nicht jede Cloud ist gleich. Je nachdem wie viel Kontrolle ein Unternehmen behalten will und wie viel es auslagern möchte, gibt es verschiedene Organisationsformen.",
      definition:{ term: "Cloud-Organisationsformen: Private, Public, Hybrid", summary: "Cloud Computing gibt es in drei Organisationsformen, die sich in Zugang, Kontrolle und Kostenstruktur unterscheiden. In der Praxis ist die Hybrid Cloud die häufigste Form.",
        aspects: [
          { icon: "🏢", title: "Private Cloud", text: "Beschränkter Zugang, vergleichbar mit einem Intranet. Ressourcen im firmeneigenen Rechenzentrum. Hohe Kontrolle, aber auch hohe Kosten." },
          { icon: "☁️", title: "Public Cloud", text: "Öffentlich zugänglicher IT-Ressourcen-Pool, bei AWS, Azure, Google. Günstig und skalierbar, aber weniger Kontrolle." },
          { icon: "🔀", title: "Hybrid Cloud", text: "Mischform aus Private und Public Cloud, häufigster Einsatz in der Praxis. Geschäftskritisches intern, Unkritisches ausgelagert." },
          { icon: "⚖️", title: "Abwägung", text: "Die Wahl hängt von Datenschutz- anforderungen, Compliance, Kosten und dem Bedarf nach Flexibilität ab" }
        ],
        nexusContext: "Priyas Empfehlung für NEXUS: Hybrid Cloud. SAP Finanzdaten und Kundendaten bleiben On-Premise (Datenschutz), Entwicklungs- und Testumgebungen gehen in die Public Cloud." },
      question: "NEXUS speichert sensible Kundendaten und muss DSGVO-Anforderungen erfüllen. Welche Cloud-Form ist am geeignetsten?",
      answers: [
        { text: "Public Cloud: AWS und Azure bieten zertifizierte DSGVO-Konformität, europäische Rechenzentrumsstandorte und vertragliche Datenschutzgarantien, die NEXUS mit eigener Hardware nicht leisten kann.", correct: false, feedback: "DSGVO-Anforderungen stellen spezifische Anforderungen an Datenlokation und Zugriffskontrolle. Eine reine Public Cloud kann problematisch sein." },
        { text: "Private Cloud oder Hybrid Cloud: Sensible Daten bleiben unter eigener Kontrolle, unkritische Ressourcen können in die Public Cloud ausgelagert werden.", correct: true, feedback: "Richtig. Die Hybrid Cloud ist für genau diesen Fall konzipiert: Kritische Daten bleiben in der Private Cloud oder On-Premise, während flexible Ressourcen in der Public Cloud laufen." },
        { text: "Keine Cloud: Bei sensiblen Kundendaten und DSGVO-Anforderungen ist On-Premise die einzig wirklich kontrollierbare Option, da NEXUS bei eigenen Servern vollständige Datensouveränität behält.", correct: false, feedback: "On-Premise ist eine valide Option, aber nicht die einzige. Private Cloud und gut konfigurierte Hybrid-Setups können DSGVO-Anforderungen vollständig erfüllen." }
      ] },
    {
      id: "9_3", type: "definition", charKey: "priya",
      charMessage: "Jetzt wird es technisch, aber das ist wichtig. Es gibt eine präzise Definition was ein System zu einem Cloud-System macht.",
      definition:{ term: "Technische Eigenschaften von Cloud Computing", summary: "Cloud Computing ist eine Form der technischen Ressourcenbereitstellung, die durch spezifische technische Eigenschaften definiert wird, nicht durch rechtliche oder kommerzielle Merkmale.",
        aspects: [
          { icon: "🔄", title: "Self-Service On-Demand", text: "Ressourcen können vom Nutzer selbst, jederzeit und ohne manuellen Eingriff des Anbieters allokiert werden" },
          { icon: "📝", title: "Infrastructure-as-Code", text: "Ressourcen werden über eine Resource Definition Language programmgesteuert bereitgestellt" },
          { icon: "📈", title: "Skalierbarkeit", text: "Ressourcen können dynamisch und automatisch nach oben und unten skaliert werden" },
          { icon: "🏊", title: "Shared Resource Pool", text: "Ressourcen werden aus einem gemeinsamen Pool bezogen: Multi-Tenancy ermöglicht Kosteneffizienz" },
          { icon: "📊", title: "Abrechnung nach Verbrauch", text: "Pay-per-Use: Es wird nur bezahlt was tatsächlich genutzt wurde" }
        ],
        nexusContext: "NEXUS' heutiger Server im Keller ist kein Cloud-System: Er ist nicht selbstbedienbar, nicht per Code provisionierbar, nicht skalierbar und wird nicht nach Verbrauch abgerechnet." },
      question: "Ein Anbieter wirbt: 'Unser System läuft im Internet und ist überall erreichbar, das ist Cloud.' Was fehlt in dieser Aussage?",
      answers: [
        { text: "Der Anbieter muss noch klarstellen, ob es sich um eine Private Cloud im eigenen Rechenzentrum oder eine Public Cloud bei einem Hyperscaler handelt, da dies die Kosten und Sicherheitsarchitektur grundlegend beeinflusst.", correct: false, feedback: "Die Organisationsform ist ein wichtiger Aspekt, aber nicht die konzeptionelle Lücke in dieser Aussage." },
        { text: "Cloud Computing wird durch technische Eigenschaften wie Self-Service, Skalierbarkeit und verbrauchsbasierte Abrechnung definiert, nicht durch den bloßen Internetzugang.", correct: true, feedback: "Genau. Internetzugang ist notwendig aber nicht hinreichend. Ein System ist erst dann eine Cloud, wenn es selbstbedienbar, skalierbar und verbrauchsbasiert abrechenbar ist." },
        { text: "Die Aussage ist technisch korrekt: Internetzugang ist das zentrale Merkmal, das Cloud Computing von traditionellen On-Premise-Systemen unterscheidet und den ortsunabhängigen Zugriff ermöglicht.", correct: false, feedback: "Internetzugang ist eine Voraussetzung, aber kein definierendes Merkmal. Jede Website ist im Internet erreichbar. Das macht sie nicht zu einem Cloud-System." }
      ] },
    {
      id: "9_4", type: "matching", charKey: "priya",
      charMessage: "Testen wir das Verständnis. Ordnen Sie jede Situation dem richtigen Cloud-Begriff zu.",
      instruction: "Klicken Sie zuerst einen Begriff, dann die passende Situation.",
      pairs: [
        { situation: "Mehrere Unternehmen teilen sich denselben physischen Server beim Cloud-Anbieter, getrennt durch Virtualisierung.", term: "Shared Resource Pool" },
        { situation: "Priya startet über ein Web-Interface in 3 Minuten einen neuen Testserver, ohne einen Anruf beim Anbieter.", term: "Self-Service On-Demand" },
        { situation: "NEXUS zahlt im Dezember mehr für Cloud-Ressourcen als im Januar, weil das Weihnachtsgeschäft mehr Kapazität braucht.", term: "Abrechnung nach Verbrauch" },
        { situation: "SAP-Finanzdaten laufen auf firmeneigenen Servern, der Onlineshop läuft bei AWS.", term: "Hybrid Cloud" },
        { situation: "Das NEXUS-Shopsystem skaliert am Black Friday automatisch auf das Dreifache der normalen Kapazität.", term: "Skalierbarkeit" },
        { situation: "Priya beschreibt die gesamte NEXUS-Serverinfrastruktur in einer YAML-Datei und deployt sie mit einem Befehl.", term: "Infrastructure-as-Code" }
      ] },
    {
      id: "9_5", type: "reflection", charKey: "maya",
      message: "Ich war anfangs skeptisch gegenüber der Cloud. Meine Daten, auf fremden Servern, irgendwo auf der Welt? Aber Priya hat mir gezeigt: Die Frage ist nicht Cloud oder nicht Cloud. Die Frage ist: Welche Daten, welche Systeme, welches Modell, und warum.",
      question: "Was ist die wichtigste Erkenntnis beim Vergleich von On-Premise und Cloud?",
      answers: [
        { text: "Sicherheit ist das wichtigste Entscheidungskriterium: Da NEXUS sensible Kundendaten verarbeitet, muss On-Premise bevorzugt werden, weil nur so vollständige Kontrolle über alle Datenzugriffe garantiert werden kann.", correct: false, feedback: "Sicherheit ist ein wichtiges Kriterium, aber keine pauschale Stärke von On-Premise." },
        { text: "On-Premise und Cloud sind keine Gegensätze, sondern orthogonale Dimensionen. Die richtige Entscheidung hängt von Datensensibilität, Skalierungsbedarf und Kostenstruktur ab.", correct: true, feedback: "Genau die Kernbotschaft. Hybrid-Ansätze kombinieren das Beste beider Welten, und in der Praxis ist das die häufigste Lösung." },
        { text: "Cloud wird sich als dominantes Modell durchsetzen: Gartner prognostiziert, dass bis 2028 über 80% aller Unternehmensanwendungen in der Cloud laufen werden und On-Premise-Installationen zur Ausnahme werden.", correct: false, feedback: "Das ist eine populäre, aber vereinfachende These. Für bestimmte Anwendungsfälle bleibt On-Premise eine valide Option." }
      ] },
    {
      id: "9_6", type: "reflection", charKey: "maya",
      message: "Wir haben nun alle Grundlagen erarbeitet. Heute treffe ich die Entscheidung, auf die NEXUS Corp seit Jahren wartet. Wir führen alle sechs Komponenten ein, als Hybrid Cloud: ERP und CRM für Echtzeit-Integration unserer Kernprozesse. SCM damit Tom Lieferengpässe drei Wochen im Voraus sieht. SRM für eine einheitliche Lieferantenstrategie. Ein Shopsystem damit Carlos auch digital verkaufen kann. Und BI damit Lena endlich analysiert statt Daten zu sammeln. Die Finanzdaten bleiben On-Premise, alles andere in der Public Cloud. Es geht los.",
      question: "Welches Argument hat Maya letztlich überzeugt, alle sechs Komponenten auf einmal einzuführen statt schrittweise?",
      answers: [
        { text: "Weil ein integriertes Gesamtpaket von einem einzigen Anbieter günstiger in Anschaffung, Wartung und Support ist als sechs separate Lösungen von verschiedenen Herstellern.", correct: false, feedback: "Kosten waren ein Faktor, aber nicht das entscheidende Argument. Die Stärke liegt in der Integration." },
        { text: "Weil der Implementierungspartner für das Gesamtpaket erhebliche Mengenrabatte angeboten hat und die Einführung aller sechs Komponenten gleichzeitig günstiger ist als sechs separate Projekte.", correct: false, feedback: "Ein Rabatt mag praktisch sein, ist aber kein strategisches Argument für eine Entscheidung dieser Tragweite." },
        { text: "Weil die Probleme aller Abteilungen miteinander verknüpft sind. Eine isolierte Lösung für Tom löst nicht Carlos' Problem. Nur integrierte Systeme beseitigen die Datensilos vollständig.", correct: true, feedback: "Genau der Kerngedanke aus Level 1: NEXUS' Problem war nie fehlende Technologie, sondern fehlende Integration. Sechs Einzellösungen ohne gemeinsame Datenbasis wären nur sechs neue Silos." }
      ] },
  ],
  outro: {
    charKey: "maya",
    message: "Die Entscheidung ist gefallen. ERP, CRM, SCM, SRM, Shopsystem und BI, als Hybrid Cloud. NEXUS Corp beginnt seine größte Transformation. In sechs Monaten werden wir wissen ob wir es richtig gemacht haben.",
    xp: 300,
    badge: "☁️ Cloud-Strategin"
  },
};
