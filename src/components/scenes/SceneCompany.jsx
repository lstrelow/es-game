import { C } from "../../theme.js";
import { NextBtn } from "../ui/index.jsx";

export function SceneCompany({ scene, onNext }) {
  const d = scene.content;
  return (
    <div>
      <h3 style={{ color:C.text, fontSize:18, fontWeight:800, marginBottom:14 }}>{scene.title}</h3>
      <p style={{ color:C.textMid, fontSize:14, lineHeight:1.75, marginBottom:20 }}>{d.description}</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
        {d.metrics.map((m,i) => <div key={i} style={{ padding:"14px 12px", borderRadius:12, background:C.bgWarm, border:`1px solid ${C.border}`, textAlign:"center" }}><div style={{ fontSize:22, marginBottom:4 }}>{m.icon}</div><div style={{ color:C.accent, fontSize:17, fontWeight:800 }}>{m.value}</div><div style={{ color:C.textLight, fontSize:11 }}>{m.label}</div></div>)}
      </div>
      <div style={{ padding:"14px 18px", borderRadius:14, background:"#fff5f0", border:`1px solid ${C.accentLight}`, marginBottom:16 }}>
        <p style={{ color:C.text, fontSize:13, lineHeight:1.7, margin:"0 0 14px" }}>⚠️ <strong>Das Problem:</strong> {d.problem}</p>
        <div style={{ fontSize:11, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"1px", marginBottom:8 }}>Aktuelle Systemlandschaft</div>
        {d.systems.map((s,i) => <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"7px 0", borderBottom:i<d.systems.length-1?`1px solid ${C.bgDeep}`:"none" }}><span style={{ color:C.text, fontSize:13, fontWeight:500 }}>{s.name}</span><span style={{ color:C.textMid, fontSize:12 }}>{s.tool} {s.status}</span></div>)}
      </div>
      <NextBtn onClick={onNext} />
    </div>
  );
}
