export const L5 = {
  intro: {
    charKey: "maya",
    message: "Wir reden viel über Systeme — aber warum führen Unternehmen überhaupt Enterprise Systems ein? Die Antwort liegt in der Strategie. Systeme sind kein Selbstzweck. Sie müssen zur Wettbewerbssituation passen und die Unternehmensziele unterstützen."
  },
  scenes:[
    {
      id: "5_1", type: "definition", charKey: "maya",
      charMessage: "Bevor wir IT-Entscheidungen treffen, müssen wir verstehen, in welchem Wettbewerbsumfeld wir uns befinden.",
      definition:{ term: "Porters Five Forces – Market-Based View", summary: "Das Five-Forces-Modell analysiert die Wettbewerbsintensität einer Branche anhand von fünf Kräften (Porter, 1979).",
        aspects: [
          { icon: "🆕", title: "Bedrohung durch neue Konkurrenten", text: "Wie leicht können neue Anbieter in den Markt eintreten?" },
          { icon: "🔄", title: "Bedrohung durch Ersatzprodukte", text: "Gibt es alternative Lösungen, die das eigene Angebot überflüssig machen könnten?" },
          { icon: "🤝", title: "Verhandlungsmacht der Kunden", text: "Können Kunden Preise drücken oder zur Konkurrenz wechseln?" },
          { icon: "🚚", title: "Verhandlungsmacht der Lieferanten", text: "Können Lieferanten Preise erhöhen oder Lieferungen verweigern?" },
          { icon: "⚔️", title: "Mitbewerber-Rivalität", text: "Wie intensiv ist der Wettbewerb zwischen bestehenden Anbietern?" }
        ],
        nexusContext: "NEXUS Corp steht unter starkem Wettbewerbsdruck: neue Online-Konkurrenten drängen in den Markt, Kunden vergleichen Preise online, und wenige Schlüssellieferanten haben starke Verhandlungsposition." },
      question: "Priya schlägt vor, ein SCM-System einzuführen um Lieferkosten zu senken. Welche der Five Forces adressiert das direkt?",
      answers: [
        { text: "Bedrohung durch neue Konkurrenten — ein effizientes SCM senkt die eigenen Betriebskosten so weit, dass neue Marktteilnehmer mit höheren Kosten nicht mehr wettbewerbsfähig sein können.", correct: false, feedback: "Das adressiert primär eine andere der fünf Kräfte." },
        { text: "Mitbewerber-Rivalität — mit einem SCM kann NEXUS schneller und günstiger liefern als die Konkurrenz und sich so einen messbaren Vorteil im direkten Wettbewerb verschaffen.", correct: false, feedback: "Das ist ein indirekter Effekt. Die direkte Verbindung liegt in der Lieferantenbeziehung." },
        { text: "Verhandlungsmacht der Lieferanten — bessere Transparenz und Planung stärkt NEXUS' Position gegenüber seinen Zulieferern.", correct: true, feedback: "Richtig. Ein SCM-System gibt NEXUS bessere Daten über Bedarfe, Bestände und Alternativen — das stärkt die Verhandlungsposition gegenüber Lieferanten." }
      ] },
    {
      id: "5_2", type: "definition", charKey: "maya",
      charMessage: "Porter erklärt die Branchenattraktivität. Aber warum ist NEXUS innerhalb unserer Branche besser oder schlechter als Konkurrenten? Dafür gibt es einen anderen Blickwinkel.",
      definition:{ term: "Resource-Based View und SWOT-Analyse", summary: "Der Resource-Based View sieht einzigartige Ressourcen und Kompetenzen als Quelle von Wettbewerbsvorteilen. Die SWOT-Analyse integriert beide Perspektiven: Strengths/Weaknesses (intern, RBV) und Opportunities/Threats (extern, MBV).",
        aspects: [
          { icon: "💪", title: "Strengths (intern)", text: "Einzigartige Ressourcen und Fähigkeiten — z.B. spezialisiertes Know-how, starke Kundenbeziehungen" },
          { icon: "⚠️", title: "Weaknesses (intern)", text: "Interne Schwächen — z.B. veraltete Systeme, Fachkräftemangel" },
          { icon: "🌱", title: "Opportunities (extern)", text: "Chancen im Markt — z.B. neue Technologien, wachsende Kundensegmente" },
          { icon: "🌩️", title: "Threats (extern)", text: "Bedrohungen — z.B. neue Konkurrenten, regulatorische Änderungen" }
        ],
        nexusContext: "NEXUS' Stärke liegt im persönlichen Kundenservice und in Toms Logistik-Know-how (RBV). Die Schwäche liegt in den veralteten IT-Systemen." },
      question: "Priya ist SAP-Expertin — ein weltweit seltenes Profil. Welche strategische Perspektive erklärt, warum das ein Wettbewerbsvorteil für NEXUS ist?",
      answers: [
        { text: "SWOT-Analyse — Priyas SAP-Expertise ermöglicht es NEXUS, eine externe Marktchance zu ergreifen: den wachsenden Bedarf an SAP-kompetenten IT-Dienstleistungen für andere Unternehmen.", correct: false, feedback: "Priya ist eine interne Ressource. In der SWOT wäre sie unter Strengths einzuordnen — die zugrunde liegende Perspektive ist der Resource-Based View." },
        { text: "Market-Based View — weil SAP-Expertise eine branchenweite Markteintrittsbarriere darstellt: Konkurrenten ohne entsprechendes Know-how können nicht so schnell SAP-basierte Systeme einführen.", correct: false, feedback: "Priyas Expertise ist eine interne Ressource — das ist eine andere Perspektive." },
        { text: "Resource-Based View — weil eine seltene, wertvolle interne Kompetenz einen schwer kopierbaren Wettbewerbsvorteil darstellt.", correct: true, feedback: "Genau. Der RBV erklärt Wettbewerbsvorteile durch einzigartige Ressourcen. Priyas SAP-Expertise ist wertvoll, selten und schwer imitierbar." }
      ] },
    {
      id: "5_3", type: "definition", charKey: "maya",
      charMessage: "Wenn ich entscheide, welche IT-Strategie wir bei NEXUS verfolgen, stehe ich immer vor derselben Grundfrage: Wollen wir Synergien — oder Flexibilität?",
      definition:{ term: "IT-Strategien: Synergie vs. Flexibilität", summary: "IT-Strategien auf Unternehmensebene bewegen sich auf einem Kontinuum zwischen zwei Polen: synergieorientierte Strategien maximieren Effizienz durch Integration, flexibilitätsorientierte Strategien maximieren Reaktionsgeschwindigkeit durch Autonomie.",
        aspects: [
          { icon: "🔗", title: "Synergieorientiert", text: "Elimination redundanter Funktionen, Shared Services, zentrale Systeme — maximale Effizienz, aber geringere Flexibilität" },
          { icon: "🔀", title: "Flexibilitätsorientiert", text: "Eigenständige Bereiche, Redundanz als bewusste Entscheidung — maximale Reaktions- geschwindigkeit, aber höhere Kosten" },
          { icon: "⚖️", title: "Abwägung", text: "Kein Pol ist generell besser — die richtige Strategie hängt von Branche, Wachstumsphase und Unternehmensstruktur ab" },
          { icon: "🏢", title: "Kontext", text: "Konzerne tendieren zu Synergie, Startups und Innovatoren zu Flexibilität" }
        ],
        nexusContext: "NEXUS Corp steht an einem Wendepunkt: Als wachsendes Unternehmen braucht es Synergien — aber zu viel Standardisierung raubt die Flexibilität, die NEXUS im Wettbewerb unterscheidet." },
      question: "NEXUS führt ein zentrales ERP für alle Abteilungen ein. Tom besteht darauf, seine Access-Datenbank weiter zu nutzen. Welche IT-Strategie-Logik steckt hinter seinem Widerstand?",
      answers: [
        { text: "Tom denkt flexibilitätsorientiert — seine eigene Lösung gibt ihm Reaktionsgeschwindigkeit und Kontrolle, auch wenn sie Redundanz erzeugt.", correct: true, feedback: "Genau. Toms Access-Datenbank ist aus seiner Sicht ein Flexibilitätsvorteil: Er kann sie sofort anpassen und ist nicht von zentralen IT-Entscheidungen abhängig." },
        { text: "Tom hat keine formale IT-Strategie, sondern reagiert intuitiv auf operative Probleme — sein Handeln ist pragmatisch und erfahrungsbasiert, aber nicht strategisch geplant.", correct: false, feedback: "Toms Verhalten folgt einer rationalen Logik: Er schützt seine operative Handlungsfähigkeit." },
        { text: "Tom verfolgt eine synergieorientierte Strategie, indem er das zentrale ERP für alle Kernprozesse nutzen möchte und dadurch Redundanzen in der IT-Landschaft von NEXUS abbaut.", correct: false, feedback: "Toms Widerstand ist das Gegenteil von Synergie." }
      ] },
    {
      id: "5_4", type: "definition", charKey: "priya",
      charMessage: "Das größte Problem in meiner Karriere war nie die Technik — es war immer die Abstimmung zwischen IT und Business.",
      definition:{ term: "IT-Business-Alignment", summary: "IT-Business-Alignment bezeichnet die Abstimmung zwischen IT und Unternehmensstrategie — sowohl als Zustand (inwieweit unterstützt die IT die Geschäftsziele?) als auch als fortlaufender Prozess.",
        aspects: [
          { icon: "📐", title: "Alignment als Zustand", text: "Inwieweit unterstützt die IT die Geschäftsstrategien und -ziele?" },
          { icon: "🔄", title: "Alignment als Prozess", text: "Fortlaufende Abstimmung von Business und IT — kein einmaliges Projekt, sondern kontinuierliche Arbeit" },
          { icon: "👔", title: "Top-Management-Faktor", text: "Die Einstellung des Top-Managements zu IT ist ein kritischer Erfolgsfaktor" },
          { icon: "🌍", title: "Branchen- unterschiede", text: "IT-Beteiligung variiert stark je nach Branche und Unternehmenstyp" }
        ],
        nexusContext: "Bei NEXUS gibt es kein formales IT-Business-Alignment. Priya entscheidet Systemfragen alleine, Maya entscheidet Strategiefragen alleine — beide sprechen zu selten miteinander." },
      question: "Maya plant eine Expansion nach Frankreich. Priya erfährt davon erst beim Go-Live des neuen Lagersystems — das nur für Deutschland ausgelegt ist. Was ist das Kernproblem?",
      answers: [
        { text: "Maya hätte ein günstigeres System wählen sollen das leichter anpassbar ist.", correct: false, feedback: "Die Systemwahl ist ein Symptom, nicht die Ursache." },
        { text: "Fehlendes IT-Business-Alignment: Die IT-Strategie wurde nicht mit der Geschäftsstrategie abgestimmt.", correct: true, feedback: "Genau. IT-Business-Alignment als Prozess würde bedeuten, dass strategische Entscheidungen wie eine Länderexpansion automatisch die IT-Planung beeinflussen." },
        { text: "Priya hat bei der Systemauswahl einen schwerwiegenden Fehler gemacht, indem sie die Anforderungen der internationalen Expansion nicht im Vorfeld mit der Geschäftsführung abgestimmt hat.", correct: false, feedback: "Priya kann keine Anforderungen berücksichtigen, die ihr niemand mitgeteilt hat." }
      ] },
    {
      id: "5_5", type: "reflection", charKey: "maya",
      message: "Ich habe heute gelernt, dass IT-Entscheidungen nie isoliert stehen. Sie müssen aus der Wettbewerbsstrategie heraus begründet werden — und IT und Business müssen sich kontinuierlich abstimmen.",
      question: "Welche Aussage beschreibt das Verhältnis zwischen IT-Strategie und Unternehmensstrategie am treffendsten?",
      answers: [
        { text: "IT-Strategie und Unternehmensstrategie müssen kontinuierlich aufeinander abgestimmt werden — IT kann Strategie ermöglichen, einschränken oder sogar neu definieren.", correct: true, feedback: "Genau. IT-Business-Alignment ist kein einmaliger Akt sondern ein fortlaufender Prozess. Moderne Unternehmen nutzen IT als strategische Ressource." },
        { text: "IT-Strategie und Unternehmensstrategie sind grundsätzlich getrennte Domänen — die IT-Abteilung kennt die technischen Möglichkeiten am besten und sollte in ihrem Bereich autonom entscheiden können, ohne sich ständig mit dem Business abstimmen zu müssen.", correct: false, feedback: "Autonomie der IT ohne strategische Abstimmung ist genau das Problem, das IT-Business-Alignment lösen soll." },
        { text: "IT-Strategie wird durch die Unternehmensstrategie vorgegeben — die IT-Abteilung hat die Aufgabe, die vom Business definierten Ziele durch geeignete Technologieentscheidungen zu unterstützen und umzusetzen.", correct: false, feedback: "Das greift zu kurz. IT kann nicht nur Strategie umsetzen, sondern auch Strategie ermöglichen oder sogar verändern." }
      ] },
  ],
  outro: {
    charKey: "maya",
    message: "Systeme einzuführen ohne Strategie ist wie navigieren ohne Karte. Sie wissen jetzt, warum wir IT-Entscheidungen immer im strategischen Kontext betrachten müssen.",
    xp: 300,
    badge: "🧭 Strategie-Denkerin"
  },
};
