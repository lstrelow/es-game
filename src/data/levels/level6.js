export const L6 = {
  intro: {
    charKey: "tom",
    message: "Maya hat mich gebeten, den Ablauf einer Kundenbestellung zu dokumentieren. Ich dachte, das dauert eine Stunde. Drei Stunden später hatte ich sieben Seiten Stichpunkte — und es war immer noch nicht vollständig. Wenn ich nicht mal beschreiben kann, wie unser Prozess funktioniert, wie soll dann ein neues System diesen Prozess unterstützen?"
  },
  scenes:[
    {
      id: "6_1", type: "definition", charKey: "tom",
      charMessage: "Priya hat mir erklärt, dass es für genau dieses Problem eine eigene Disziplin gibt.",
      definition:{ term: "Prozessmanagement", summary: "Prozessmanagement umfasst die systematische Erfassung, Dokumentation, Analyse und Optimierung von Geschäftsprozessen. Ziel ist es, Abläufe transparent, steuerbar und kontinuierlich verbesserbar zu machen.",
        aspects: [
          { icon: "🗺️", title: "Prozesserfassung", text: "Welche Schritte gibt es? Wer führt sie aus? In welcher Reihenfolge? — Der IST-Zustand wird sichtbar gemacht" },
          { icon: "🔍", title: "Prozessanalyse", text: "Wo gibt es Engpässe, Redundanzen, Medienbrüche? Schwachstellen werden identifiziert" },
          { icon: "🔧", title: "Prozessoptimierung", text: "Der SOLL-Prozess wird gestaltet — schlanker, schneller, fehlerärmer" },
          { icon: "📊", title: "Prozesssteuerung", text: "Laufende Überwachung: Werden Prozesse wie geplant ausgeführt?" }
        ],
        nexusContext: "Bei NEXUS existieren Prozesse — aber nur als implizites Wissen in den Köpfen der Mitarbeitenden. Das macht Fehlersuche, Einarbeitung und IT-Einführung enorm schwer." },
      question: "Warum ist Prozessdokumentation eine Voraussetzung für die erfolgreiche Einführung eines ERP-Systems?",
      answers: [
        { text: "Weil ERP-Hersteller wie SAP eine vollständige Prozessdokumentation als Vertragsbestandteil fordern, bevor mit dem Implementierungsprojekt begonnen werden kann.", correct: false, feedback: "Das kann vertraglich der Fall sein, ist aber nicht die konzeptionelle Begründung." },
        { text: "Weil ein ERP-System Prozesse abbilden und unterstützen muss — ohne zu wissen wie die Prozesse aussehen, kann man das System nicht sinnvoll konfigurieren.", correct: true, feedback: "Genau. Ein ERP muss auf die spezifischen Prozesse des Unternehmens konfiguriert werden. Wer seinen IST-Prozess nicht kennt, kann weder den SOLL-Prozess definieren noch das System richtig einrichten." },
        { text: "Weil Prozessdokumentation in regulierten Branchen wie Pharma oder Finanzdienstleistungen gesetzlich vorgeschrieben ist und auch für NEXUS als Teil einer zukünftigen Zertifizierung relevant werden könnte.", correct: false, feedback: "In bestimmten Branchen gibt es regulatorische Anforderungen, aber das ist nicht die allgemeine Begründung." }
      ] },
    {
      id: "6_2", type: "definition", charKey: "priya",
      charMessage: "Prozesse zu beschreiben in Prosa führt zu Missverständnissen — jeder liest es anders. Deshalb gibt es eine standardisierte visuelle Sprache dafür: BPMN.",
      definition:{ term: "BPMN – Business Process Model and Notation", summary: "BPMN ist ein international standardisierter grafischer Notationsstandard zur Modellierung von Geschäftsprozessen.",
        aspects: [
          { icon: "⬭", title: "Ereignisse (Events)", text: "Kreise — markieren Start, Ende oder Zwischenereignisse eines Prozesses" },
          { icon: "▭", title: "Aufgaben (Tasks)", text: "Rechtecke — beschreiben eine konkrete Tätigkeit die ausgeführt wird" },
          { icon: "◇", title: "Gateways", text: "Rauten — Verzweigungspunkte: XOR (entweder/oder), AND (parallel), OR (mindestens eine Bedingung)" },
          { icon: "🏊", title: "Swimlanes / Pools", text: "Horizontale Bahnen — zeigen wer welche Aufgabe ausführt: Abteilungen, Rollen, Systeme" }
        ],
        nexusContext: "Mit BPMN kann Priya den chaotischen NEXUS-Bestellprozess so visualisieren, dass Tom, Carlos und die Buchhaltung ihn alle gleich verstehen." },
      question: "Warum ist ein standardisierter Notationsstandard wie BPMN besser als eine selbst erfundene Prozessdarstellung?",
      answers: [
        { text: "Weil BPMN als offener Standard kostenlos verfügbar ist und mit kostenlosen Tools wie Camunda oder draw.io genutzt werden kann, ohne dass NEXUS teure Lizenzkosten tragen muss.", correct: false, feedback: "Das stimmt zwar, ist aber nicht die konzeptionelle Begründung." },
        { text: "Weil ein gemeinsamer Standard sicherstellt, dass alle Beteiligten dasselbe Diagramm gleich lesen und verstehen.", correct: true, feedback: "Genau. Standardisierung löst das Kommunikationsproblem: Ein BPMN-Diagramm ist eindeutig interpretierbar, unabhängig davon wer es liest." },
        { text: "Weil BPMN von SAP entwickelt wurde und deshalb direkt in ERP-Systeme importiert werden kann.", correct: false, feedback: "BPMN wurde von der Object Management Group (OMG) standardisiert, nicht von SAP." }
      ] },
    {
      id: "6_3", type: "matching", charKey: "priya",
      charMessage: "Schauen wir uns den NEXUS-Bestellprozess an. Ordnen Sie jeden Schritt dem richtigen BPMN-Element zu.",
      instruction: "Klicken Sie zuerst ein BPMN-Element, dann den passenden Prozessschritt.",
      pairs: [
        { situation: "Carlos wickelt den Auftrag ab, Tom steuert das Lager, die Buchhaltung verarbeitet die Zahlung.", term: "Swimlanes" },
        { situation: "Gleichzeitig erstellt die Buchhaltung die Rechnung und das Lager bereitet den Versand vor.", term: "AND-Gateway" },
        { situation: "Die Bestellung ist ausgeliefert und die Zahlung ist eingegangen — der Prozess ist abgeschlossen.", term: "Endereignis" },
        { situation: "Carlos prüft, ob der Kunde bereits in der Datenbank erfasst ist.", term: "Task" },
        { situation: "Der Prozess beginnt, wenn eine Kundenbestellung per E-Mail eingeht.", term: "Startereignis" },
        { situation: "Ist der Bestand ausreichend? Falls ja → Versand. Falls nein → Nachbestellung.", term: "XOR-Gateway" }
      ] },
    {
      id: "6_4", type: "definition", charKey: "tom",
      charMessage: "Nachdem Priya unseren Bestellprozess aufgezeichnet hat, war ich ehrlich gesagt erschrocken. Wir haben 14 Schritte, obwohl 6 reichen würden.",
      definition:{ term: "Prozessanalyse: Schwachstellen erkennen", summary: "Die Prozessanalyse identifiziert systematisch Schwachstellen im IST-Prozess. Typische Muster: Medienbrüche, Liegezeiten, Redundanzen, unklare Verantwortlichkeiten.",
        aspects: [
          { icon: "📠", title: "Medienbruch", text: "Wechsel zwischen analogen und digitalen Systemen — z.B. E-Mail ausdrucken und manuell in Excel übertragen" },
          { icon: "⏳", title: "Liegezeit", text: "Dokumente oder Aufgaben warten auf Bearbeitung — ohne dass jemand es bemerkt oder nachfragt" },
          { icon: "🔁", title: "Redundanz", text: "Dieselbe Information wird an mehreren Stellen erfasst oder dieselbe Aufgabe mehrfach ausgeführt" },
          { icon: "❓", title: "Unklare Verantwortung", text: "Niemand weiß wer für einen Schritt zuständig ist — Aufgaben fallen durch das Raster" }
        ],
        nexusContext: "Im NEXUS-Bestellprozess gibt es alle vier Schwachstellen: E-Mail-Ausdrucke (Medienbruch), Rechnungen die im Postfach liegen (Liegezeit), Kundendaten in Outlook UND Excel (Redundanz), unklare Reklamationszuständigkeit." },
      question: "Eine Kundenbestellung geht per E-Mail bei Carlos ein. Er druckt sie aus und gibt sie Tom, der sie in seine Access-Datenbank einträgt. Was ist das für eine Prozessschwachstelle?",
      answers: [
        { text: "Medienbruch — die Information wechselt von digital (E-Mail) über analog (Ausdruck) zurück zu digital (Access), was Fehler und Aufwand erzeugt.", correct: true, feedback: "Klassischer Medienbruch. Jeder Wechsel des Mediums ist eine potenzielle Fehlerquelle und immer unnötiger Aufwand." },
        { text: "Liegezeit — zwischen dem Ausdrucken und dem manuellen Eintippen der Bestellung entsteht eine unnötige Wartezeit, die den gesamten Auftragsabwicklungsprozess verlangsamt.", correct: false, feedback: "Liegezeit wäre das Problem, wenn die Bestellung irgendwo unbearbeitet liegt. Hier findet aktive Bearbeitung statt." },
        { text: "Redundanz — die Bestellinformation existiert gleichzeitig in der E-Mail, auf dem Ausdruck und in der Access-Datenbank, was bei Änderungen zu Inkonsistenzen führen kann.", correct: false, feedback: "Redundanz wäre es, wenn Carlos UND Tom dieselbe Information separat speichern. Das Problem hier ist der Übertragungsweg selbst." }
      ] },
    {
      id: "6_5", type: "reflection", charKey: "maya",
      message: "Priya hat mir heute den IST-Prozess unserer Bestellabwicklung gezeigt — als BPMN-Diagramm. Ich habe ihn zum ersten Mal wirklich verstanden. Jetzt sehen wir genau, wo das neue ERP ansetzen muss.",
      question: "Was ist der wichtigste Unterschied zwischen einem dokumentierten und einem undokumentierten Prozess im Kontext einer ES-Einführung?",
      answers: [
        { text: "Dokumentierte Prozesse sind stabiler und resistenter gegen Veränderungen, weil alle Beteiligten wissen wie der Prozess funktionieren soll und Abweichungen sofort erkannt werden.", correct: false, feedback: "Stabilität hängt nicht von der Dokumentation ab. Undokumentierte Prozesse sind nicht steuerbar, nicht übertragbar und nicht optimierbar." },
        { text: "Nur dokumentierte Prozesse können systematisch analysiert, optimiert und in einem ES konfiguriert werden — undokumentierte Prozesse bleiben Blackboxen.", correct: true, feedback: "Genau. Prozessdokumentation ist die Grundlage für alles Weitere: Nur was sichtbar ist, kann verbessert werden. Und nur was beschrieben ist, kann in einem System abgebildet werden." },
        { text: "Dokumentierte Prozesse laufen schneller ab, weil Mitarbeitende nicht jedes Mal neu entscheiden müssen wie sie vorgehen sollen, sondern einer klaren Schritt-für-Schritt-Anleitung folgen.", correct: false, feedback: "Dokumentation verändert nicht automatisch die Prozessgeschwindigkeit." }
      ] },
  ],
  outro: {
    charKey: "tom",
    message: "Ich habe mein ganzes Berufsleben Prozesse im Kopf getragen. Jetzt sehe ich, dass das kein Stärke war — sondern ein Risiko für das Unternehmen. Was in meinem Kopf ist, gehört in ein Diagramm.",
    xp: 280,
    badge: "🔄 Prozessdenker"
  },
};
