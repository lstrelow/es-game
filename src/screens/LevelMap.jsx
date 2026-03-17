import { C, shadow, shadowLg } from "../theme.js";
import { Avatar, XPBar } from "../components/ui/index.jsx";

export function LevelMap({ module, onSelectLevel, onBack, xp, completed, onEpilogue, maxPlayable }) {
  const numDone = module.levels.filter(l => completed.has(l.id)).length;
  const moduleDone = numDone === module.levels.length;
  return (
    <div style={{ minHeight:"100vh", background:C.bg }}>
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 16px", display:"flex", alignItems:"center", gap:14, boxShadow:"0 1px 8px rgba(0,0,0,0.05)" }}>
        <button onClick={onBack} style={{ color:C.textLight, fontSize:13, background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>← Zurück</button>
        <div style={{ flex:1 }}>
          <div style={{ color:C.textLight, fontSize:10, textTransform:"uppercase", letterSpacing:"3px" }}>{module.subtitle}</div>
          <h2 style={{ color:C.text, fontSize:18, fontWeight:900, margin:0 }}>{module.title}</h2>
        </div>
        <XPBar xp={xp} />
      </div>
      <div style={{ maxWidth:600, margin:"0 auto", padding:"20px 16px" }}>
        {moduleDone && (
          <div style={{ padding:"16px 20px", borderRadius:16, background:C.accent+"12", border:`1.5px solid ${C.accent}44`, marginBottom:20, display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap" }}>
            <div>
              <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"2px", marginBottom:4 }}>🏆 Modul abgeschlossen!</div>
              <p style={{ color:C.textMid, fontSize:13, margin:0 }}>Epilog und Zertifikat sind verfügbar.</p>
            </div>
            <button onClick={onEpilogue} style={{ padding:"10px 18px", borderRadius:12, background:C.accent, color:"#fff", fontSize:13, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}>Epilog ansehen →</button>
          </div>
        )}
        <div style={{ padding:"18px 16px", borderRadius:16, background:C.accent+"0d", border:`1px solid ${C.accent}33`, marginBottom:24, display:"flex", gap:14, alignItems:"flex-start" }}>
          <Avatar charKey="maya" size="md" active />
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"2px", marginBottom:6 }}>Die Ausgangslage</div>
            <p style={{ color:C.text, fontSize:13, lineHeight:1.7, margin:0 }}>NEXUS Corp hat 120 Mitarbeitende, drei Lagerstandorte und massive Wachstumsschmerzen. Manuell geführte Excel-Tabellen führen zu Chaos. Ihre Mission über 9 Level: Helfen Sie dabei, die ersten Unternehmenssysteme einzuführen – und nehmen Sie dabei das Team mit. Denn Technologie allein reicht nicht aus.</p>
          </div>
        </div>
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:19, top:0, bottom:0, width:1, background:C.border }}/>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {module.levels.map(level => {
              const done = completed.has(level.id);
              const free = (level.id === 1 || completed.has(level.id - 1)) && level.id <= maxPlayable;
              return (
                <div key={level.id} onClick={() => free && onSelectLevel(level)}
                  style={{ display:"flex", alignItems:"center", gap:14, padding:"12px 14px", borderRadius:13, marginLeft:12, border:`1px solid ${C.border}`, background:done?C.success+"0a":free?C.bgCard:C.bgWarm, cursor:free?"pointer":"not-allowed", opacity:free?1:0.42, transition:"all 0.15s", boxShadow:free&&!done?shadow:"none" }}
                  onMouseOver={e => { if(free) e.currentTarget.style.boxShadow=shadowLg; }}
                  onMouseOut={e => e.currentTarget.style.boxShadow=free&&!done?shadow:"none"}>
                  <div style={{ width:30, height:30, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:900, flexShrink:0, marginLeft:-26, zIndex:1, background:done?C.success:free?C.bgCard:C.bgWarm, border:`2px solid ${done?C.success:C.border}`, color:done?"#fff":C.textMid }}>{done?"✓":level.id}</div>
                  <div style={{ flex:1 }}>
                    <span style={{ color:C.text, fontWeight:600, fontSize:13 }}>{level.title}</span>
                    <div style={{ color:C.textLight, fontSize:11 }}>{level.topic}</div>
                  </div>
                  {free && !done && <span style={{ color:C.accent, fontSize:11, fontWeight:700 }}>▶ Spielen</span>}
                  {done && <span style={{ color:C.success, fontSize:11, fontWeight:700 }}>✓</span>}
                  {!free && <span style={{ fontSize:11 }}>🔒</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
