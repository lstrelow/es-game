import { C, shadow, shadowLg } from "../theme.js";
import { Avatar } from "../components/ui/index.jsx";

function LogoPlaceholder() {
  return <img src="logo.png" height="32" style={{ display:"block" }} />;
}

export function LevelMap({ module, onSelectLevel, onBack, completed, maxPlayable }) {
  return (
    <div style={{ minHeight:"100vh", background:C.bg }}>
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 24px", display:"flex", alignItems:"center", boxShadow:"0 1px 8px rgba(0,0,0,0.05)", position:"relative" }}>
        {/* Left: back arrow */}
        <button onClick={onBack} style={{ color:C.textLight, fontSize:20, background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", lineHeight:1, padding:"0 4px" }}>←</button>
        {/* Center: Levelübersicht in orange */}
        <div style={{ position:"absolute", left:"50%", transform:"translateX(-50%)", textAlign:"center" }}>
          <span style={{ fontSize:17, fontWeight:700, color:C.accent }}>Levelübersicht</span>
        </div>
        {/* Right: logo */}
        <div style={{ marginLeft:"auto" }}>
          <LogoPlaceholder />
        </div>
      </div>

      <div style={{ maxWidth:600, margin:"0 auto", padding:"20px 16px" }}>
        {/* Module label centered */}
        <div style={{ textAlign:"center", marginBottom:16 }}>
          <span style={{ fontSize:11, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"2px" }}>{module.subtitle} · </span>
          <span style={{ fontSize:11, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"2px" }}>{module.title}</span>
        </div>

        {/* Story briefing */}
        <div style={{ padding:"18px 16px", borderRadius:16, background:C.accent+"0d", border:`1px solid ${C.accent}33`, marginBottom:24, display:"flex", gap:14, alignItems:"flex-start" }}>
          <Avatar charKey="maya" size="md" active />
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"2px", marginBottom:6 }}>Die Ausgangslage</div>
            <p style={{ color:C.text, fontSize:13, lineHeight:1.7, margin:0 }}>NEXUS Corp hat 120 Mitarbeitende, drei Lagerstandorte und massive Wachstumsschmerzen. Manuell geführte Tabellen versagen. Ihre Mission über 9 Level: Helfen Sie dabei, die ersten Unternehmenssysteme einzuführen – und bringen Sie das Team mit. Denn Technologie allein reicht nie.</p>
          </div>
        </div>

        {/* Level list */}
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:19, top:0, bottom:0, width:1, background:C.border }}/>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {module.levels.map(level => {
              const done = completed.has(level.id);
              const free = level.id <= maxPlayable;
              return (
                <div key={level.id} onClick={() => free && onSelectLevel(level)}
                  style={{ display:"flex", alignItems:"center", gap:14, padding:"12px 14px", borderRadius:13, marginLeft:12, border:`1px solid ${C.border}`, background:done ? C.success+"0a" : C.bgCard, cursor:free ? "pointer" : "not-allowed", opacity:free ? 1 : 0.42, transition:"all 0.15s", boxShadow:free ? shadow : "none" }}
                  onMouseOver={e => { if(free) e.currentTarget.style.boxShadow = shadowLg; }}
                  onMouseOut={e => e.currentTarget.style.boxShadow = free ? shadow : "none"}>
                  <div style={{ width:30, height:30, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:900, flexShrink:0, marginLeft:-26, zIndex:1, background:done ? C.success : C.bgCard, border:`2px solid ${done ? C.success : C.border}`, color:done ? "#fff" : C.textMid }}>{done ? "✓" : level.id}</div>
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
