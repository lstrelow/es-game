import { C, shadow, shadowLg } from "../theme.js";
import { MODULES } from "../data/modules.js";

function LogoPlaceholder() {
  return <img src="/logo.png" height="32" style={{ display:"block" }} />;
}

export function ModuleSelect({ onSelect }) {
  return (
    <div style={{ minHeight:"100vh", background:C.bg }}>
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 8px rgba(0,0,0,0.05)" }}>
        <h2 style={{ color:C.accent, fontSize:"clamp(16px,4vw,22px)", fontWeight:900, margin:0 }}>Modulauswahl</h2>
        <LogoPlaceholder />
      </div>
      <div style={{ maxWidth:720, margin:"0 auto", padding:"20px 16px" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {MODULES.map(mod => (
            <div key={mod.id} onClick={() => !mod.locked && onSelect(mod)}
              style={{ borderRadius:16, padding:"18px 16px", border:`1.5px solid ${mod.locked?C.border:mod.color+"55"}`, background:mod.locked?C.bgWarm:C.bgCard, cursor:mod.locked?"not-allowed":"pointer", opacity:mod.locked?0.6:1, transition:"all 0.2s", boxShadow:mod.locked?"none":shadow, position:"relative" }}
              onMouseOver={e => { if(!mod.locked) e.currentTarget.style.boxShadow=shadowLg; }}
              onMouseOut={e => e.currentTarget.style.boxShadow=mod.locked?"none":shadow}>
              {mod.locked && <div style={{ position:"absolute", top:12, right:12, background:C.bgDeep, padding:"4px 12px", borderRadius:99, color:C.textMid, fontSize:11, fontWeight:700 }}>{mod.lockReason}</div>}
              <div style={{ color:C.textLight, fontSize:10, textTransform:"uppercase", letterSpacing:"2px", marginBottom:4 }}>{mod.subtitle} · {mod.phase}</div>
              <h3 style={{ color:C.text, fontSize:"clamp(16px,4vw,20px)", fontWeight:900, margin:"0 0 6px" }}>{mod.title}</h3>
              <p style={{ color:C.textMid, fontSize:13, marginBottom:14 }}>{mod.description}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {mod.levels.slice(0,4).map(l => <span key={l.id} style={{ fontSize:11, padding:"3px 10px", borderRadius:99, background:C.bgWarm, color:C.textLight }}>L{l.id}: {l.title}</span>)}
                {mod.levels.length > 4 && <span style={{ fontSize:11, padding:"3px 10px", borderRadius:99, background:C.bgWarm, color:C.textLight }}>+{mod.levels.length - 4} weitere...</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
