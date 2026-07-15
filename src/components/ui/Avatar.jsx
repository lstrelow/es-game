import PropTypes from "prop-types";
import { C } from "../../theme.js";
import { CHARACTERS } from "../../data/characters.js";

export function Avatar({ charKey, size = "md", active = false }) {
  const c = CHARACTERS[charKey];
  const dim = size === "lg" ? 60 : size === "sm" ? 30 : 44;
  const fs = size === "lg" ? 28 : size === "sm" ? 14 : 20;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4, flexShrink:0 }}>
      <div style={{ width:dim, height:dim, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:fs, background:c.color+"18", border:`2px solid ${active ? c.color : c.color+"44"}`, boxShadow:active ? `0 0 0 3px ${c.color}22` : "none", transition:"all 0.3s" }}>
        {c.emoji}
      </div>
      {size !== "sm" && (
        <div style={{ textAlign:"center" }}>
          <div style={{ color:C.text, fontSize:10, fontWeight:700 }}>{c.name}</div>
          <div style={{ color:C.textLight, fontSize:9 }}>{c.role}</div>
        </div>
      )}
    </div>
  );
}
Avatar.propTypes = {
  charKey: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  active: PropTypes.bool,
};
