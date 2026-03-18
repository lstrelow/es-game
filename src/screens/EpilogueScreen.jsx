import { useState, useEffect } from "react";
import { C } from "../theme.js";

const CHARS = {
  maya:   { emoji:"👩‍💼", name:"Maya Chen",    role:"CEO & Gründerin",           color:"#ed6e45" },
  tom:    { emoji:"👨‍🔧", name:"Tom Becker",   role:"Leiter Betrieb & Logistik", color:"#8e7a65" },
  carlos: { emoji:"👨‍💻", name:"Carlos Ruiz",  role:"Vertriebsleiter",           color:"#2563EB" },
  lena:   { emoji:"👩‍🔬", name:"Lena Fischer", role:"BI-Analystin",              color:"#065F46" },
  priya:  { emoji:"👩‍💻", name:"Priya Nair",   role:"IT-Architektin",            color:"#7C3AED" },
};

const CHARS_LIST = Object.entries(CHARS).map(([key, v]) => ({ key, ...v }));

const MAYA_SPEECH = [
  "Vor einem Jahr wusste ich nicht mehr weiter. Wachstum auf allen Seiten — und unsere Systeme brachen unter der Last zusammen.",
  "Mein Team war erschöpft. Wir haben gekämpft, improvisiert, und trotzdem verloren wir täglich den Überblick. Ich hatte Angst, dass NEXUS Corp an sich selbst scheitert.",
  "Dann kamen Sie. Als externes Beratungsteam haben Sie uns nicht einfach Lösungen verkauft — Sie haben uns geholfen, unsere eigenen Herausforderungen wirklich zu verstehen.",
  "Dank Ihnen haben wir heute ein tiefes Verständnis davon, was Enterprise Systems leisten können, wie Prozesse gestaltet werden müssen — und warum der Mensch dabei immer im Mittelpunkt steht.",
  "Im Namen des gesamten NEXUS-Teams: Danke!",
];

function LogoPlaceholder() {
  return <img src="logo.png" height="32" style={{ display:"block" }} />;
}

function AnimatedScene({ onDone }) {
  const [step, setStep] = useState(0);
  const [speechIdx, setSpeechIdx] = useState(0);
  const [slideDir, setSlideDir] = useState("in");
  const [visible, setVisible] = useState([]);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 32 }, (_, i) => ({
      id: i, left: Math.random() * 100, delay: Math.random() * 2,
      color: ["#ed6e45","#8e7a65","#2563EB","#065F46","#7C3AED","#F59E0B","#EC4899"][i % 7],
      size: 6 + Math.random() * 8,
    }));
    setConfetti(items);
  }, []);

  useEffect(() => {
    if (step < CHARS_LIST.length) {
      const t = setTimeout(() => { setVisible(v => [...v, step]); setStep(s => s+1); }, step === 0 ? 400 : 250);
      return () => clearTimeout(t);
    }
  }, [step]);

  // Auto-advance
  useEffect(() => {
    if (step < CHARS_LIST.length) return;
    if (speechIdx >= MAYA_SPEECH.length - 1) return;
    const t = setTimeout(() => goTo(speechIdx + 1), 2800);
    return () => clearTimeout(t);
  }, [step, speechIdx]);

  const goTo = (i) => {
    setSlideDir("out");
    setTimeout(() => { setSpeechIdx(i); setSlideDir("in"); }, 300);
  };

  const handleNext = () => {
    if (speechIdx < MAYA_SPEECH.length - 1) goTo(speechIdx + 1);
    else onDone();
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#1a0a05 0%,#2d1507 50%,#1a0a05 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px", position:"relative", overflow:"hidden" }}>
      {confetti.map(c => (
        <div key={c.id} style={{ position:"absolute", top:"-20px", left:`${c.left}%`, width:c.size, height:c.size, borderRadius:2, background:c.color, opacity:0.85, animation:`fall ${2.5+c.delay}s linear ${c.delay}s infinite` }} />
      ))}
      <style>{`
        @keyframes fall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0.9} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
        @keyframes popIn { 0%{transform:scale(0) translateY(30px);opacity:0} 70%{transform:scale(1.15) translateY(-4px)} 100%{transform:scale(1) translateY(0);opacity:1} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(237,110,69,0.4)} 50%{box-shadow:0 0 0 12px rgba(237,110,69,0)} }
        @keyframes slideInLeft { from{transform:translateX(60px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes slideOutLeft { from{transform:translateX(0);opacity:1} to{transform:translateX(-60px);opacity:0} }
      `}</style>

      <div style={{ textAlign:"center", marginBottom:36 }}>
        <div style={{ fontSize:48, marginBottom:8 }}>🎉</div>
        <h1 style={{ color:"#fff", fontSize:28, fontWeight:900, margin:"0 0 6px", textShadow:"0 2px 20px rgba(237,110,69,0.6)" }}>Alle Level abgeschlossen!</h1>
        <p style={{ color:"rgba(255,255,255,0.6)", fontSize:14, margin:0 }}>Das gesamte NEXUS-Team bedankt sich</p>
      </div>

      <div style={{ display:"flex", gap:16, marginBottom:40, flexWrap:"wrap", justifyContent:"center" }}>
        {CHARS_LIST.map((ch, i) => (
          <div key={ch.key} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:visible.includes(i)?1:0, animation:visible.includes(i)?"popIn 0.5s ease-out forwards":"none" }}>
            <div style={{ width:64, height:64, borderRadius:"50%", background:ch.color+"33", border:`3px solid ${ch.color}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:30, animation:ch.key==="maya"&&visible.includes(i)?"pulse 2s ease-in-out infinite":"none" }}>{ch.emoji}</div>
            <span style={{ color:"rgba(255,255,255,0.75)", fontSize:11, fontWeight:600 }}>{ch.name}</span>
          </div>
        ))}
      </div>

      {step >= CHARS_LIST.length && (
        <div style={{ maxWidth:480, width:"100%" }}>
          <div key={speechIdx}
            style={{ background:"rgba(237,110,69,0.12)", border:"1px solid rgba(237,110,69,0.35)", borderRadius:20, padding:"20px 24px", marginBottom:16, animation:`${slideDir === "in" ? "slideInLeft" : "slideOutLeft"} 0.3s ease-out forwards` }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"#ed6e45", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>👩‍💼</div>
              <span style={{ color:"#ed6e45", fontWeight:700, fontSize:13 }}>Maya – CEO, NEXUS Corp</span>
            </div>
            <p style={{ color:"#fff", fontSize:17, lineHeight:1.65, margin:0, fontWeight:500 }}>{MAYA_SPEECH[speechIdx]}</p>
          </div>
          <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:16 }}>
            {MAYA_SPEECH.map((_,i) => (
              <div key={i} onClick={() => goTo(i)}
                style={{ width:9, height:9, borderRadius:"50%", background:i===speechIdx?"#ed6e45":"rgba(255,255,255,0.25)", transition:"background 0.3s", cursor:"pointer" }} />
            ))}
          </div>
          <button onClick={handleNext}
            style={{ width:"100%", padding:"15px", borderRadius:14, background:"#ed6e45", color:"#fff", fontSize:15, fontWeight:800, border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 24px rgba(237,110,69,0.5)" }}>
            {speechIdx < MAYA_SPEECH.length - 1 ? "Weiter →" : "Zum Abschluss →"}
          </button>
        </div>
      )}
    </div>
  );
}

function FireworkCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("firework-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#ed6e45","#f4a07e","#8e7a65","#2563EB","#7C3AED","#F59E0B","#fff"];

    const burst = (x, y) => {
      for (let i = 0; i < 60; i++) {
        const angle = (Math.PI * 2 / 60) * i;
        const speed = 2 + Math.random() * 4;
        particles.push({ x, y, vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed, alpha:1, color: colors[Math.floor(Math.random()*colors.length)], size: 3+Math.random()*3 });
      }
    };

    // Fire 5 bursts at random intervals
    const timeouts = [];
    for (let b = 0; b < 5; b++) {
      timeouts.push(setTimeout(() => burst(canvas.width*(0.2+Math.random()*0.6), canvas.height*(0.2+Math.random()*0.5)), b * 600));
    }

    let raf;
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (let i = particles.length-1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.alpha -= 0.018;
        if (p.alpha <= 0) { particles.splice(i,1); continue; }
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); timeouts.forEach(clearTimeout); };
  }, []);

  return <canvas id="firework-canvas" style={{ position:"fixed", top:0, left:0, pointerEvents:"none", zIndex:100 }} />;
}

export function EpilogueScreen({ epilogue, moduleTitle, onBack }) {
  const [phase, setPhase] = useState("animation");
  const [idx,   setIdx]   = useState(0);
  const [slideDir, setSlideDir] = useState("in");
  const [showFireworks, setShowFireworks] = useState(false);
  const done = idx >= epilogue.scenes.length;

  useEffect(() => {
    if (done) setShowFireworks(true);
  }, [done]);

  const goTo = (i) => {
    setSlideDir("out");
    setTimeout(() => { setIdx(i); setSlideDir("in"); }, 300);
  };

  const handleNext = () => {
    if (idx < epilogue.scenes.length - 1) goTo(idx + 1);
    else setIdx(epilogue.scenes.length);
  };

  if (phase === "animation") return <AnimatedScene onDone={() => setPhase("story")} />;

  const currentScene = !done ? epilogue.scenes[idx] : null;
  const char = currentScene ? CHARS[currentScene.charKey] : null;

  return (
    <div style={{ minHeight:"100vh", background:C.bgWarm }}>
      {showFireworks && <FireworkCanvas />}
      <style>{`
        @keyframes slideInLeft { from{transform:translateX(60px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes slideOutLeft { from{transform:translateX(0);opacity:1} to{transform:translateX(-60px);opacity:0} }
        @keyframes scaleIn { from{transform:scale(0.8);opacity:0} to{transform:scale(1);opacity:1} }
      `}</style>

      {/* Header */}
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 24px", display:"flex", alignItems:"center", boxShadow:"0 1px 8px rgba(0,0,0,0.05)", position:"relative" }}>
        <div style={{ width:40 }} />
        <div style={{ position:"absolute", left:"50%", transform:"translateX(-50%)" }}>
          <span style={{ fontSize:17, fontWeight:900, color:C.text, letterSpacing:-0.5, fontFamily:"Georgia,serif" }}>
            NEXUS <span style={{ color:C.accent }}>Corp</span>
          </span>
        </div>
        <div style={{ marginLeft:"auto" }}>
          <LogoPlaceholder />
        </div>
      </div>

      <div style={{ maxWidth:620, margin:"0 auto", padding:"24px 16px" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ fontSize:44, marginBottom:10 }}>⏩</div>
          <h2 style={{ color:C.text, fontSize:24, fontWeight:900, margin:"0 0 6px" }}>{epilogue.title}</h2>
          <p style={{ color:C.textMid, fontSize:14, margin:0 }}>{epilogue.subtitle}</p>
        </div>

        {!done && (
          <>
            {/* Clickable dots */}
            <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:24 }}>
              {epilogue.scenes.map((_,i) => (
                <div key={i} onClick={() => goTo(i)}
                  style={{ width:9, height:9, borderRadius:"50%", background:i===idx?C.accent:C.bgDeep, transition:"background 0.3s", cursor:"pointer" }} />
              ))}
            </div>

            {/* Scene card */}
            <div key={idx}
              style={{ background:C.bgCard, border:`1.5px solid ${char ? char.color+"44" : C.border}`, borderRadius:18, padding:"18px 20px", marginBottom:20, animation:`${slideDir==="in"?"slideInLeft":"slideOutLeft"} 0.3s ease-out forwards` }}>
              {char && (
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14, paddingBottom:14, borderBottom:`1px solid ${C.border}` }}>
                  <div style={{ width:40, height:40, borderRadius:"50%", background:char.color+"18", border:`2px solid ${char.color}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>
                    {char.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize:13, fontWeight:700, color:char.color }}>{char.name}</div>
                    <div style={{ fontSize:11, color:C.textLight }}>{char.role}</div>
                  </div>
                </div>
              )}
              <p style={{ color:C.text, fontSize:15, lineHeight:1.75, margin:0, fontStyle:"italic" }}>„{currentScene.text}"</p>
            </div>

            <button onClick={handleNext}
              style={{ width:"100%", padding:"14px", borderRadius:13, background:C.accent, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>
              {idx < epilogue.scenes.length - 1 ? "Weiter →" : "Zum Abschluss →"}
            </button>
          </>
        )}

        {done && (
          <div style={{ animation:"scaleIn 0.5s ease-out forwards" }}>
            <div style={{ textAlign:"center", marginBottom:24 }}>
              <div style={{ fontSize:64, marginBottom:12 }}>🏆</div>
              <h2 style={{ color:C.text, fontSize:26, fontWeight:900, margin:"0 0 8px" }}>Das war's!</h2>
            </div>
            <div style={{ padding:"20px 24px", borderRadius:20, background:C.bgCard, border:`2px solid ${C.accent}33`, marginBottom:24, boxShadow:`0 8px 32px ${C.accent}22` }}>
              <p style={{ color:C.textMid, fontSize:15, lineHeight:1.8, margin:0, fontStyle:"italic" }}>„{epilogue.closing}"</p>
            </div>
            <button onClick={onBack}
              style={{ width:"100%", padding:"14px", borderRadius:13, background:"transparent", color:C.textMid, fontSize:13, fontWeight:600, border:`1px solid ${C.border}`, cursor:"pointer", fontFamily:"inherit" }}>
              Zurück zur Modulübersicht
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
