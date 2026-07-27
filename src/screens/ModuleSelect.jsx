import PropTypes from "prop-types";
import { C, shadow, shadowLg } from "../theme.js";
import { MODULES } from "../data/modules.js";

function LogoPlaceholder() {
  return <img src="logo.png" alt="NEXUS Corp" height="32" style={{ display:"block" }} />;
}

export function ModuleSelect({ onSelect, onBack }) {
  return (
    <div style={{ minHeight:"100vh", background:C.bg }}>
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 24px", display:"flex", alignItems:"center", boxShadow:"0 1px 8px rgba(0,0,0,0.05)", position:"relative" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", padding:0 }}>
          <span style={{ fontSize:17, fontWeight:900, color:C.text, letterSpacing:-0.5 }}>NEXUS <span style={{ color:C.accent }}>Corp</span></span>
        </button>
        <div style={{ position:"absolute", left:"50%", transform:"translateX(-50%)", textAlign:"center" }}>
          <span style={{ fontSize:17, fontWeight:700, color:C.accent }}>Modulauswahl</span>
        </div>
        <div style={{ marginLeft:"auto" }}>
          <LogoPlaceholder />
        </div>
      </div>

      <div style={{ maxWidth:720, margin:"0 auto", padding:"20px 16px" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {MODULES.map(mod => (
            <button key={mod.id} onClick={() => onSelect(mod)} disabled={mod.locked}
              style={{ borderRadius:16, padding:"18px 16px", border:`1.5px solid ${mod.locked?C.border:mod.color+"55"}`, background:mod.locked?C.bgWarm:C.bgCard, cursor:mod.locked?"not-allowed":"pointer", opacity:mod.locked?0.6:1, transition:"all 0.2s", boxShadow:mod.locked?"none":shadow, position:"relative", textAlign:"left", fontFamily:"inherit", width:"100%" }}
              onMouseOver={e => { if(!mod.locked) e.currentTarget.style.boxShadow=shadowLg; }}
              onFocus={e => { if(!mod.locked) e.currentTarget.style.boxShadow=shadowLg; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow=mod.locked?"none":shadow; }}
              onBlur={e => { e.currentTarget.style.boxShadow=mod.locked?"none":shadow; }}>
              {mod.locked && <div style={{ position:"absolute", top:12, right:12, background:C.bgDeep, padding:"4px 12px", borderRadius:99, color:C.textMid, fontSize:11, fontWeight:700 }}>{mod.lockReason}</div>}
              <div style={{ color:C.textLight, fontSize:10, textTransform:"uppercase", letterSpacing:"2px", marginBottom:4 }}>{mod.subtitle} · {mod.phase}</div>
              <h3 style={{ color:C.text, fontSize:"clamp(16px,4vw,20px)", fontWeight:900, margin:"0 0 6px" }}>{mod.title}</h3>
              <p style={{ color:C.textMid, fontSize:13, marginBottom:14 }}>{mod.description}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {mod.levels.slice(0,4).map(l => <span key={l.id} style={{ fontSize:11, padding:"3px 10px", borderRadius:99, background:C.bgWarm, color:C.textLight }}>L{l.id}: {l.title}</span>)}
                {mod.levels.length > 4 && <span style={{ fontSize:11, padding:"3px 10px", borderRadius:99, background:C.bgWarm, color:C.textLight }}>+{mod.levels.length - 4} weitere...</span>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
ModuleSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
