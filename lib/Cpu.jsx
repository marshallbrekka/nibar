import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
    return (
    <div style={output.loadAverage > 3 ? { color: styles.colors.red } : null}>
      <span style={{ width: "3ch" }}>􀍽 {Math.round(output.loadAverage)}</span>
    </div>
  );
};

export default render;
