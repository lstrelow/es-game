import { useState } from "react";
import PropTypes from "prop-types";
import { C, shadowLg } from "../theme.js";
import { CHARACTERS } from "../data/characters.js";
import { COHORTS } from "../data/cohorts.js";
import { COHORT_SCORES } from "../data/scores.js";
import { Avatar } from "../components/ui/index.jsx";

function TeacherPanel({ streak, onStartSession, onEndSession, onClose }) {
  const [selectedCohort, setSelectedCohort] = useState(COHORTS[0]);
  const [result, setResult] = useState(null);

  const handleEnd = () => {
    setResult({ cohort: streak.cohort, max: streak.sessionMax });
    onEndSession();
  };

  const tableRows = [...COHORTS]
    .map(c => ({ name: c, max: COHORT_SCORES[c] ?? null }))
    .sort((a, b) => (b.max ?? -1) - (a.max ?? -1));

  return (
    <div style={{ position:"fixed", inset:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      <button
        onClick={onClose}
        aria-label="Schließen"
        style={{ position:"absolute", inset:0, background:"rgba(42,31,20,0.55)", border:"none", cursor:"pointer", padding:0 }}
      />
      <dialog open
        style={{ background:C.bgCard, borderRadius:20, padding:28, maxWidth:400, width:"100%", boxShadow:shadowLg, position:"relative", zIndex:1, border:"none", margin:0 }}>

        <button onClick={onClose}
          style={{ position:"absolute", top:16, right:16, background:"none", border:"none", fontSize:20, cursor:"pointer", color:C.textLight, lineHeight:1 }}>
          ×
        </button>

        <div style={{ fontSize:11, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"2px", marginBottom:4 }}>Lehrenden-Bereich</div>
        <div style={{ fontSize:22, fontWeight:900, color:C.text, marginBottom:20 }}>🎓 Session-Steuerung</div>

        {result && (
          <div style={{ marginBottom:24 }}>
            <div style={{ padding:"20px", borderRadius:14, background:C.successBg, border:`1.5px solid ${C.success}`, marginBottom:16, textAlign:"center" }}>
              <div style={{ fontSize:12, fontWeight:700, color:C.success, textTransform:"uppercase", letterSpacing:"1px", marginBottom:8 }}>Session beendet – {result.cohort}</div>
              <div style={{ fontSize:13, color:C.textMid, marginBottom:6 }}>Maximale Serie dieser Session:</div>
              <div style={{ fontSize:48, fontWeight:900, color:C.accent, lineHeight:1 }}>{result.max > 0 ? `🔥 ${result.max}` : result.max}</div>
            </div>
            <button onClick={() => setResult(null)}
              style={{ width:"100%", padding:"12px", borderRadius:13, background:C.bgDeep, color:C.textMid, fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>
              Schließen
            </button>
          </div>
        )}

        {!result && streak.active && (
          <div style={{ marginBottom:24 }}>
            <div style={{ padding:"14px 18px", borderRadius:14, background:C.accent+"12", border:`1.5px solid ${C.accent}44`, marginBottom:16 }}>
              <div style={{ fontSize:11, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"1px", marginBottom:8 }}>Aktive Session</div>
              <div style={{ color:C.text, fontSize:15, fontWeight:700, marginBottom:12 }}>{streak.cohort}</div>
              <div style={{ display:"flex", gap:20 }}>
                <div>
                  <div style={{ fontSize:11, color:C.textLight, marginBottom:2 }}>Aktueller Streak</div>
                  <div style={{ fontSize:28, fontWeight:900, color:C.accent }}>{streak.current > 0 ? `🔥 ${streak.current}` : streak.current}</div>
                </div>
                <div>
                  <div style={{ fontSize:11, color:C.textLight, marginBottom:2 }}>Session-Maximum</div>
                  <div style={{ fontSize:28, fontWeight:900, color:C.second }}>{streak.sessionMax}</div>
                </div>
              </div>
            </div>
            <button onClick={handleEnd}
              style={{ width:"100%", padding:"14px", borderRadius:13, background:C.second, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:`0 4px 16px ${C.second}44` }}>
              Session beenden
            </button>
          </div>
        )}

        {!result && !streak.active && (
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:12, fontWeight:700, color:C.textMid, marginBottom:8 }}>Kohorte auswählen</div>
            <select value={selectedCohort} onChange={e => setSelectedCohort(e.target.value)}
              style={{ width:"100%", padding:"10px 12px", borderRadius:10, border:`1.5px solid ${C.border}`, background:C.bgWarm, color:C.text, fontSize:14, fontWeight:600, fontFamily:"inherit", marginBottom:12, cursor:"pointer" }}>
              {COHORTS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button onClick={() => onStartSession(selectedCohort)}
              style={{ width:"100%", padding:"14px", borderRadius:13, background:C.accent, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:`0 4px 16px ${C.accent}44` }}>
              Session starten →
            </button>
          </div>
        )}

        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:18 }}>
          <div style={{ fontSize:11, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:12 }}>Bestenliste – Maximale Serie</div>
          <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
            {tableRows.map((row, i) => {
              const isLeader = i === 0 && row.max !== null;
              return (
                <div key={row.name} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 12px", borderRadius:10, background:isLeader ? C.accent+"10" : C.bgWarm, border:`1px solid ${isLeader ? C.accent+"44" : C.border}` }}>
                  <span style={{ color:C.textMid, fontSize:13, fontWeight:600 }}>{row.name}</span>
                  <span style={{ color: row.max === null ? C.textLight : C.accent, fontSize:15, fontWeight:900 }}>
                    {row.max === null ? "—" : `🔥 ${row.max}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </dialog>
    </div>
  );
}
TeacherPanel.propTypes = {
  streak: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    cohort: PropTypes.string,
    current: PropTypes.number.isRequired,
    sessionMax: PropTypes.number.isRequired,
  }).isRequired,
  onStartSession: PropTypes.func.isRequired,
  onEndSession: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export function TitleScreen({ onStart, streak, onStartSession, onEndSession }) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div style={{ minHeight:"100vh", background:C.bgWarm, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${C.accent},${C.second})` }}/>
      <div style={{ position:"absolute", bottom:-80, right:-80, width:280, height:280, borderRadius:"50%", background:C.accent+"0a" }}/>
      <div style={{ position:"absolute", top:-50, left:-50, width:180, height:180, borderRadius:"50%", background:C.second+"0a" }}/>

      <div style={{ textAlign:"center", maxWidth:520, width:"100%", zIndex:1 }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🏢</div>
        <h1 style={{ fontSize:"clamp(32px,8vw,52px)", fontWeight:900, color:C.text, margin:"0 0 8px", letterSpacing:-1 }}>
          NEXUS <span style={{ color:C.accent }}>Corp</span>
        </h1>
        <p style={{ color:C.textLight, fontSize:"clamp(9px,2.5vw,11px)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:16, lineHeight:1.7 }}>
          Ein Spiel des Lehrstuhls für Enterprise Systems,<br/>Plattformen und Architekturen
        </p>
        <p style={{ color:C.textMid, fontSize:"clamp(13px,3.5vw,15px)", lineHeight:1.85, marginBottom:28, padding:"0 4px" }}>
          Sie sind Unternehmensberaterin bzw. -berater.<br/>
          Systeme versagen, Menschen sind frustriert,<br/>
          wichtige Entscheidungen müssen getroffen werden.<br/>
          <span style={{ color:C.accent, fontWeight:700 }}>Sind Sie bereit für diese Herausforderung?</span>
        </p>
        <div style={{ display:"flex", justifyContent:"center", gap:"clamp(8px,3vw,16px)", marginBottom:28, flexWrap:"wrap" }}>
          {Object.keys(CHARACTERS).map(k => <Avatar key={k} charKey={k} size="md" />)}
        </div>
        <button onClick={onStart}
          style={{ padding:"14px clamp(24px,6vw,44px)", background:C.accent, color:"#fff", fontWeight:900, fontSize:"clamp(14px,4vw,17px)", borderRadius:16, border:"none", cursor:"pointer", boxShadow:`0 6px 28px ${C.accent}44`, fontFamily:"inherit", width:"min(100%,320px)" }}
          onMouseOver={e => e.target.style.background=C.accentDark}
          onFocus={e => e.target.style.background=C.accentDark}
          onMouseOut={e => e.target.style.background=C.accent}
          onBlur={e => e.target.style.background=C.accent}>
          JETZT STARTEN →
        </button>
      </div>

      <button onClick={() => setShowPanel(true)}
        style={{ position:"absolute", bottom:20, right:20, background:"none", border:`1px solid ${streak.active ? C.accent : C.border}`, borderRadius:10, padding:"7px 14px", fontSize:12, color: streak.active ? C.accent : C.textLight, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
        🎓 {streak.active ? `Session aktiv · 🔥 ${streak.current}` : "Lehrenden-Bereich"}
      </button>

      {showPanel && (
        <TeacherPanel
          streak={streak}
          onStartSession={cohort => { onStartSession(cohort); setShowPanel(false); }}
          onEndSession={onEndSession}
          onClose={() => setShowPanel(false)}
        />
      )}
    </div>
  );
}
TitleScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
  streak: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    cohort: PropTypes.string,
    current: PropTypes.number.isRequired,
    sessionMax: PropTypes.number.isRequired,
  }).isRequired,
  onStartSession: PropTypes.func.isRequired,
  onEndSession: PropTypes.func.isRequired,
};
