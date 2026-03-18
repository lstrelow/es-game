export const L8 = {
  intro: {
    charKey: "priya",
    message: "Wir wissen jetzt was wir einführen wollen und wie wir mit Anpassungen umgehen. Aber wie läuft so ein Einführungsprojekt eigentlich ab? In meiner Karriere habe ich Projekte erlebt, die Jahre dauerten und Millionen kosteten — und trotzdem scheiterten. Meistens nicht an der Technik. Sondern weil das Vorgehensmodell nicht eingehalten wurde."
  },
  scenes:[
    {
      id: "8_1", type: "definition", charKey: "priya",
      charMessage: "Ein ES-Einführungsprojekt ist kein Sprint — es ist ein strukturierter Prozess mit klar definierten Phasen.",
      definition:{ term: "Phasen der ES-Einführung im Überblick", summary: "Die Einführung eines Enterprise Systems folgt einem strukturierten Vorgehensmodell mit sieben Phasen: von der Anforderungsdefinition über Projektvorbereitung, Blueprint und Realisierung bis hin zu Test, Go-Live und Support.",
        aspects: [
          { icon: "📋", title: "1. Anforderungs- definition", text: "Ziele, Prozesse, technische Basis und Organisationsstruktur werden definiert" },
          { icon: "📝", title: "2. Vertrags- spezifikation", text: "Auswahl und Vertragsabschluss mit Berater/Implementierer" },
          { icon: "🏗️", title: "3. Projektvorbereitung", text: "Projektmanagement aufsetzen, Team zusammenstellen, Stakeholder informieren" },
          { icon: "🔵", title: "4. Blueprint / Feinkonzept", text: "Detaillierte Anforderungs- beschreibung, Dokumentation aller Prozesse" },
          { icon: "⚙️", title: "5. Realisierung", text: "Customizing, Programmierung, Schnittstellen, Datenmigration, Entwicklertests" },
          { icon: "🧪", title: "6. Test & Produktions- vorbereitung", text: "Funktions-, Integrations- und Systemtests, Go-Live-Vorbereitung, Go-Live" },
          { icon: "🚀", title: "7. Go-Live-Support", text: "Support, Fehlerbeseitigung, Optimierung in der ersten produktiven Phase" }
        ],
        nexusContext: "NEXUS startet gerade Phase 1. Priya warnt: Die meisten Projekte scheitern nicht in der Realisierung, sondern in den ersten drei Phasen." },
      question: "NEXUS Corp plant die ERP-Einführung. In welcher Phase wird erstmals festgelegt, welche Prozesse das System unterstützen soll?",
      answers: [
        { text: "Im Blueprint — dort werden alle Prozesse detailliert dokumentiert und die Grundlage für die Konfiguration gelegt.", correct: true, feedback: "Richtig. Der Blueprint ist der Bauplan des Systems: Hier wird präzise festgehalten welche Prozesse im Standard laufen, was per Customizing angepasst und was individuell entwickelt wird." },
        { text: "Im Go-Live-Support — dort zeigt sich in der Praxis welche Prozesse das System tatsächlich abdeckt.", correct: false, feedback: "Im Go-Live-Support werden Fehler behoben und optimiert — aber die grundlegenden Prozessentscheidungen sind zu diesem Zeitpunkt längst gefallen." },
        { text: "In der Realisierung — dort wird das System konfiguriert und die Prozesse werden dabei sichtbar.", correct: false, feedback: "Die Realisierung setzt um, was der Blueprint vorgibt. Prozesse werden dort nicht mehr definiert, sondern technisch umgesetzt." }
      ] },
    {
      id: "8_2", type: "definition", charKey: "priya",
      charMessage: "Die Anforderungsdefinition klingt banal — aber sie ist die Phase mit den meisten typischen Fehlern.",
      definition:{ term: "Anforderungsdefinition: Ziele und typische Defizite", summary: "Die Anforderungsdefinition legt Ziele, Prozesse, technische Basis und Organisationsstruktur des künftigen Systems fest. Typische Defizite führen zu Projekten, die an den eigentlichen Nutzungspotenzialen vorbeigehen.",
        aspects: [
          { icon: "🎯", title: "Zieldefinition", text: "Was soll das System leisten — messbar, konkret, priorisiert" },
          { icon: "⚠️", title: "Defizit 1: IST-Orientierung", text: "Zu starke Orientierung am IST-Prozess — das neue System bildet den alten Prozess ab statt ihn zu verbessern" },
          { icon: "⚠️", title: "Defizit 2: Falsche Anforderungen", text: "Anforderungen an den Möglichkeiten des einzuführenden Systems vorbei formuliert" },
          { icon: "⚠️", title: "Defizit 3: Nutzenignoranz", text: "Mangelnde Ausrichtung an den Nutzenpotenzalen des Systems — man fragt nicht 'Was könnte das System leisten?'" }
        ],
        nexusContext: "Bei NEXUS droht Defizit 1: Tom würde am liebsten seinen Access-Prozess 1:1 in SAP nachbauen. Das wäre eine verpasste Chance." },
      question: "Tom formuliert die Anforderung: 'SAP soll genau das können was meine Access-Datenbank heute kann.' Was ist das Problem?",
      answers: [
        { text: "SAP kann viele Access-Funktionen nicht direkt nachbilden, da es auf einer völlig anderen Datenbankarchitektur basiert und für unternehmensweite Prozesse statt für lokale Einzellösungen ausgelegt ist.", correct: false, feedback: "Das ist technisch falsch — SAP kann nahezu jeden Prozess abbilden. Das Problem ist konzeptioneller Natur." },
        { text: "Tom orientiert sich am IST-Prozess statt am Nutzenpotenzial — er fragt 'Was machen wir heute?' statt 'Was könnten wir mit SAP besser machen?'", correct: true, feedback: "Klassisches Defizit 1 der Anforderungsdefinition. Die IST-Orientierung verhindert, dass die Einführung echte Verbesserungen bringt." },
        { text: "Tom sollte keine Anforderungen formulieren, ohne vorher eine fundierte Analyse des SAP-Standards durchgeführt zu haben — das ist Aufgabe von Priya als IT-Architektin.", correct: false, feedback: "Im Gegenteil: Fachbereichsvertreter wie Tom sind unverzichtbar für die Anforderungsdefinition." }
      ] },
    {
      id: "8_3", type: "definition", charKey: "priya",
      charMessage: "Der Blueprint ist die Phase, die am meisten unterschätzt wird. Er ist kein bürokratisches Dokument — er ist der Bauplan des späteren Systems.",
      definition:{ term: "Blueprint und Customizing vs. Individualisierung", summary: "Der Blueprint ist die detaillierte Anforderungsbeschreibung und Dokumentation aller Prozesse — die Grundlage für die Realisierung. Er legt fest, was per Customizing abgedeckt wird und was Individualentwicklung erfordert.",
        aspects: [
          { icon: "🗂️", title: "Blueprint-Inhalte", text: "Detaillierte Prozessbeschreibungen, Organisationsstruktur, Berechtigungskonzept, Schnittstellenspezifikationen" },
          { icon: "⚙️", title: "Customizing", text: "Konfiguration: Module und Beziehungen festlegen. Parametrisierung: Prozesse und Funktionen eingrenzen. Stammdaten befüllen." },
          { icon: "🛠️", title: "Individualisierung i.e.S.", text: "Nutzung technischer Werkzeuge für Anforderungen die im Standard nicht vorgesehen waren" },
          { icon: "📌", title: "Leitlinie im Blueprint", text: "Was läuft im Standard? Was wird per Customizing angepasst? Was erfordert Individualentwicklung?" }
        ],
        nexusContext: "Priyas Blueprint für NEXUS: Standard für Finanzbuchhaltung und HR, Customizing für Lager- und Vertriebsprozesse, Individualentwicklung nur für Toms spezifischen Optimierungsalgorithmus." },
      question: "Was unterscheidet Customizing von Individualisierung i.e.S.?",
      answers: [
        { text: "Customizing bewegt sich innerhalb des vorgesehenen Rahmens des Herstellers — Individualisierung i.e.S. geht darüber hinaus und entwickelt Lösungen die im Standard nicht vorgesehen waren.", correct: true, feedback: "Genau die Kernunterscheidung. Customizing nutzt die vom Hersteller bereitgestellten Anpassungsmöglichkeiten. Individualisierung i.e.S. verlässt diesen Rahmen." },
        { text: "Customizing ist im SAP-Lizenzmodell enthalten und verursacht keine zusätzlichen Kosten, während Individualisierung externe Entwickler erfordert und entsprechende Projektkosten erzeugt.", correct: false, feedback: "Beide verursachen Kosten. Der Unterschied liegt nicht im Kostenmodell." },
        { text: "Customizing vereinfacht das System durch gezielte Auswahl der benötigten Funktionen, während Individualisierung neue Komplexitätsschichten hinzufügt, die das System schwerer bedienbar machen.", correct: false, feedback: "Beide können Komplexität erzeugen. Der entscheidende Unterschied ist konzeptionell: innerhalb oder außerhalb des Herstellerrahmens." }
      ] },
    {
      id: "8_4", type: "matching", charKey: "priya",
      charMessage: "Ich beschreibe typische Situationen aus dem NEXUS-Einführungsprojekt. Ordnen Sie jede Situation der richtigen Projektphase zu.",
      instruction: "Klicken Sie zuerst eine Phase, dann die passende Situation.",
      pairs: [
        { situation: "Das Projektteam wird zusammengestellt, Rollen werden vergeben, ein Kick-off-Meeting informiert alle Abteilungen.", term: "Projektvorbereitung" },
        { situation: "Priya verhandelt mit drei SAP-Implementierungspartnern und prüft Referenzprojekte und Vertragskonditionen.", term: "Vertragsspezifikation" },
        { situation: "Maya definiert: 'Das ERP soll unsere Lieferzeit von 5 auf 3 Tage senken und Lagerkosten um 15% reduzieren.'", term: "Anforderungsdefinition" },
        { situation: "Drei Wochen nach Go-Live meldet Tom einen Fehler bei der automatischen Nachbestellung — das Team behebt ihn innerhalb von 4 Stunden.", term: "Go-Live-Support" },
        { situation: "Priya dokumentiert alle Prozesse im Detail und legt fest: Lager per Customizing, Optimierungsalgorithmus als Individualentwicklung.", term: "Blueprint" },
        { situation: "Das Team prüft ob Bestellungen aus SAP korrekt in der Buchhaltung ankommen und ob Lagerabbuchungen stimmen.", term: "Test & Produktionsvorbereitung" }
      ] },
    {
      id: "8_5", type: "reflection", charKey: "maya",
      message: "Ich habe in meinem Netzwerk viele ES-Einführungen miterlebt. Die erfolgreichen hatten eines gemeinsam: Sie haben die frühen Phasen ernst genommen. Die gescheiterten haben alle gedacht, das Wichtigste sei die Technik.",
      question: "Warum scheitern ES-Einführungsprojekte häufiger in frühen Phasen als in der technischen Realisierung?",
      answers: [
        { text: "Weil Fehler in frühen Phasen alle nachfolgenden Phasen beeinflussen — falsche Anforderungen, falscher Partner oder schlechte Projektvorbereitung können in der Realisierung nicht mehr korrigiert werden.", correct: true, feedback: "Genau. Das ist die Kernaussage. Frühe Phasen sind Multiplikatoren: Ein Fehler in Phase 1 verursacht Folgeprobleme in allen folgenden Phasen." },
        { text: "Weil frühe Phasen mit externen Beratern, aufwändigen Workshops und umfangreichen Analysen das meiste Budget verbrauchen — für die eigentliche technische Umsetzung in der Realisierungsphase bleiben dann oft zu wenig Mittel übrig, was zu Abstrichen führt.", correct: false, feedback: "Frühe Phasen verbrauchen typischerweise weniger Budget als Realisierung." },
        { text: "Weil frühe Phasen wie Anforderungsanalyse und Vertragsverhandlung oft von Fachbereichen ohne IT-Erfahrung durchgeführt werden, die die technischen Konsequenzen ihrer Entscheidungen nicht absehen können.", correct: false, feedback: "Das trifft nicht generell zu. Das Problem ist struktureller Natur." }
      ] },
  ],
  outro: {
    charKey: "priya",
    message: "Ein ES-Projekt ist kein IT-Projekt — es ist ein Organisationsprojekt mit IT-Anteil. Wer das versteht, hat die wichtigste Lektion gelernt.",
    xp: 300,
    badge: "🚀 Projektmanagerin"
  },
};
