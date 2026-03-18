import React, { useState } from "react";
import { C } from "../../theme.js";
import { SpeechBubble, AnswerBtn, Feedback, NextBtn } from "../ui/index.jsx";

function PyramidViz({ aspects }) {
  const [hovered, setHovered] = React.useState(null);
  const colors = ["#ed6e45", "#e8845f", "#e09a7a", "#d8b096", "#cfc6b2"];
  const total = aspects.length;
  const active = hovered !== null ? aspects[total - 1 - hovered] : null;

  const stripNumber = (s) => s.replace(/^\d+\.\s*/, "");

  return (
    <div style={{ marginBottom:14 }}>
      {/* Pyramid */}
      <div style={{ width:"100%" }}>
        {[...aspects].reverse().map((a, ri) => {
          const i = total - 1 - ri;
          const widthPct = 100 - (i / (total - 1)) * 70;
          const isHovered = hovered === ri;
          return (
            <div key={i} style={{ display:"flex", justifyContent:"center", marginBottom:3 }}>
              <div
                onMouseEnter={() => setHovered(ri)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  width:`${widthPct}%`,
                  height:52,
                  background:colors[i],
                  borderRadius:6,
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  cursor:"default",
                  opacity: hovered === null || isHovered ? 1 : 0.6,
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                  transition:"all 0.15s",
                  boxShadow: isHovered ? "0 2px 12px rgba(0,0,0,0.15)" : "none",
                }}>
                <span style={{ color:"#fff", fontSize:12, fontWeight:700, whiteSpace:"nowrap" }}>
                  {stripNumber(a.title)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description panel */}
      <div style={{ minHeight:56, marginTop:8 }}>
        {active ? (
          <div style={{ padding:"14px 16px", borderRadius:12, background:C.bgWarm, border:`1px solid ${C.border}`, width:"100%" }}>
            <div style={{ fontSize:12, fontWeight:700, color:C.accent, marginBottom:6 }}>
              {stripNumber(active.title)}
            </div>
            <p style={{ color:C.textMid, fontSize:12, lineHeight:1.6, margin:0 }}>{active.text}</p>
          </div>
        ) : (
          <p style={{ color:C.textLight, fontSize:12, fontStyle:"italic", margin:0 }}>
            Hovern Sie über eine Ebene für Details.
          </p>
        )}
      </div>
    </div>
  );
}

export function SceneDefinition({ scene, onNext }) {
  const [phase, setPhase] = useState("def");
  const [chosen, setChosen] = useState(null);
  const [checked, setChecked] = useState(false);
  const d = scene.definition;

  const handleCheck = () => { if (chosen !== null) setChecked(true); };

  return (
    <div>
      {phase === "def" && (
        <>
          <SpeechBubble charKey={scene.charKey} text={scene.charMessage} active />
          <div style={{ padding:"14px 18px", borderRadius:14, background:C.accent+"12", border:`1.5px solid ${C.accent}33`, marginBottom:16 }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:6 }}>Definition: {d.term}</div>
            <p style={{ color:C.text, fontSize:14, lineHeight:1.75, margin:0, fontWeight:500 }}>{d.summary}</p>
          </div>

          {d.pyramid ? (
            <PyramidViz aspects={d.aspects} />
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:10, marginBottom:14 }}>
              {d.aspects.map((a,i) => <div key={i} style={{ padding:"12px 14px", borderRadius:12, background:C.bgWarm, border:`1px solid ${C.border}` }}><div style={{ fontSize:20, marginBottom:6 }}>{a.icon}</div><div style={{ color:C.text, fontSize:12, fontWeight:700, marginBottom:3 }}>{a.title}</div><div style={{ color:C.textMid, fontSize:11, lineHeight:1.5 }}>{a.text}</div></div>)}
            </div>
          )}

          <div style={{ padding:"12px 16px", borderRadius:12, background:C.second+"12", border:`1px solid ${C.second}33`, marginBottom:16 }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.second, textTransform:"uppercase", letterSpacing:"1px", marginBottom:4 }}>🏢 Bei NEXUS Corp</div>
            <p style={{ color:C.textMid, fontSize:13, lineHeight:1.65, margin:0 }}>{d.nexusContext}</p>
          </div>
          <NextBtn onClick={() => setPhase("question")} label="Zur Frage →" />
        </>
      )}
      {phase === "question" && (
        <>
          <div style={{ padding:"10px 14px", borderRadius:10, background:C.bgWarm, border:`1px solid ${C.border}`, marginBottom:14, display:"inline-block" }}>
            <span style={{ fontSize:10, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"1px" }}>Begriff: </span>
            <span style={{ fontSize:13, fontWeight:700, color:C.accent }}>{d.term}</span>
          </div>
          <p style={{ color:C.textMid, fontSize:14, fontWeight:600, marginBottom:10 }}>{scene.question}</p>
          {scene.answers.map((a,i) => {
            let st = "normal";
            if (checked) { st = i === chosen ? (a.correct ? "correct" : "wrong") : "inactive"; }
            else if (chosen === i) { st = "selected"; }
            return <AnswerBtn key={i} text={a.text} state={st} onClick={() => { if (!checked) setChosen(i); }} />;
          })}
          {!checked && (
            <button onClick={handleCheck} disabled={chosen === null}
              style={{ width:"100%", padding:"14px", borderRadius:13, background:chosen!==null?C.accent:C.bgDeep, color:chosen!==null?"#fff":C.textLight, fontSize:14, fontWeight:700, border:"none", cursor:chosen!==null?"pointer":"default", fontFamily:"inherit", marginTop:4, transition:"all 0.2s" }}>
              Antwort prüfen
            </button>
          )}
          {checked && <><Feedback text={scene.answers[chosen].feedback} correct={scene.answers[chosen].correct}/><NextBtn onClick={onNext}/></>}
        </>
      )}
    </div>
  );
}
