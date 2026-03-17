import { C } from "../theme.js";
import { CHARACTERS } from "../data/characters.js";
import { Avatar } from "../components/ui/index.jsx";

export function TitleScreen({ onStart }) {
  return (
    <div style={{ minHeight:"100vh", background:C.bgWarm, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${C.accent},${C.second})` }}/>
      <div style={{ position:"absolute", bottom:-80, right:-80, width:280, height:280, borderRadius:"50%", background:C.accent+"0a" }}/>
      <div style={{ position:"absolute", top:-50, left:-50, width:180, height:180, borderRadius:"50%", background:C.second+"0a" }}/>
      <div style={{ textAlign:"center", maxWidth:520, width:"100%", zIndex:1 }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🏢</div>
        <h1 style={{ fontSize:"clamp(32px,8vw,52px)", fontWeight:900, color:C.text, margin:"0 0 8px", letterSpacing:-1, fontFamily:"Georgia,serif" }}>
          NEXUS <span style={{ color:C.accent }}>Corp</span>
        </h1>
        <p style={{ color:C.textLight, fontSize:"clamp(9px,2.5vw,11px)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:16, lineHeight:1.7 }}>
          Ein Spiel des Lehrstuhls für Enterprise Systems,<br/>Plattformen und Architekturen
        </p>
        <p style={{ color:C.textMid, fontSize:"clamp(13px,3.5vw,15px)", lineHeight:1.85, marginBottom:28, padding:"0 4px" }}>
          Sie sind Unternehmensberaterin bzw. -berater.<br/>
          Systeme versagen, Menschen sind frustriert,<br/>
          wichtige Entscheidungen müssen getroffen werden.<br/>
          <span style={{ color:C.accent, fontWeight:700 }}>Bringen Sie Ordnung in das Chaos?</span>
        </p>
        <div style={{ display:"flex", justifyContent:"center", gap:"clamp(8px,3vw,16px)", marginBottom:28, flexWrap:"wrap" }}>
          {Object.keys(CHARACTERS).map(k => <Avatar key={k} charKey={k} size="md" />)}
        </div>
        <button onClick={onStart}
          style={{ padding:"14px clamp(24px,6vw,44px)", background:C.accent, color:"#fff", fontWeight:900, fontSize:"clamp(14px,4vw,17px)", borderRadius:16, border:"none", cursor:"pointer", boxShadow:`0 6px 28px ${C.accent}44`, fontFamily:"inherit", width:"min(100%,320px)" }}
          onMouseOver={e => e.target.style.background=C.accentDark}
          onMouseOut={e => e.target.style.background=C.accent}>
          JETZT STARTEN →
        </button>
      </div>
    </div>
  );
}
