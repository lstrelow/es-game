import { useState } from "react";
import { MODULES, MAX_PLAYABLE_LEVEL } from "./data/modules.js";
import { EPILOGUE_M1 } from "./data/epilogue.js";
import { TitleScreen }    from "./screens/TitleScreen.jsx";
import { ModuleSelect }   from "./screens/ModuleSelect.jsx";
import { LevelMap }       from "./screens/LevelMap.jsx";
import { LevelPlayer }    from "./screens/LevelPlayer.jsx";
import { EpilogueScreen } from "./screens/EpilogueScreen.jsx";

const TOTAL_LEVELS = 9;

export default function App() {
  const [screen,    setScreen]    = useState("title");
  const [module,    setModule]    = useState(null);
  const [level,     setLevel]     = useState(null);
  const [completed, setCompleted] = useState(new Set());

  const completeLevel = (levelId, goToEpilogue) => {
    setCompleted(prev => new Set([...prev, levelId]));
    if (goToEpilogue) setScreen("epilogue");
    else setScreen("levelmap");
  };

  const allDone = completed.size >= TOTAL_LEVELS;

  return (
    <div style={{ fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      {screen === "title"        && <TitleScreen onStart={() => setScreen("moduleselect")} />}
      {screen === "moduleselect" && <ModuleSelect onSelect={m => { setModule(m); setScreen("levelmap"); }} onBack={() => setScreen("title")} />}
      {screen === "levelmap"     && module && (
        <LevelMap
          module={module} completed={completed} maxPlayable={MAX_PLAYABLE_LEVEL}
          onBack={() => setScreen("moduleselect")}
          onSelectLevel={l => { setLevel(l); setScreen("levelplayer"); }}
          onEpilogue={() => setScreen("epilogue")}
          allDone={allDone}
        />
      )}
      {screen === "levelplayer"  && level && (
        <LevelPlayer
          levelNr={level.id}
          isLastLevel={level.id === TOTAL_LEVELS}
          onBack={() => setScreen("levelmap")}
          onComplete={completeLevel}
        />
      )}
      {screen === "epilogue"     && module && (
        <EpilogueScreen
          epilogue={EPILOGUE_M1}
          moduleTitle={module.title}
          onBack={() => setScreen("levelmap")}
        />
      )}
    </div>
  );
}
