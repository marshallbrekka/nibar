import styles from "./styles.jsx";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "0px"
};

const desktopStyle = {
  lineHeight: "17px",
  width: "4ch",
  textAlign: "center",
  paddingTop: "3px",
  paddingBottom: "2px",
  color: styles.colors.dim,
  marginRight: "1px",
};

const hasWindowsStyle = {
  paddingTop: "2px",
  borderTop: `1px solid ${styles.colors.fg}`,
  color: styles.colors.fg,
};

const visibleStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  color: styles.colors.fg,
};

const focusedStyle = {
  borderTopColor: styles.colors.accent,
  background: "rgba(255, 255, 255, 0.1)",
  color: styles.colors.accent,
  fontWeight: "700",
};

// Extracts the space number from the label.
// Expects label in the form of "display-<n>_space-<n>".
function spaceLabel(index, label) {
  if (label == "") {
    return index;
  }
  return label.split(":").pop();
}

const renderSpace = ({index, focused, visible, windows, label}) => {
  let contentStyle = Object.assign({}, desktopStyle);
  // let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (windows.length > 0) {
    contentStyle = Object.assign(contentStyle, hasWindowsStyle);
  }
  if (visible == 1) {
    contentStyle = Object.assign(contentStyle, visibleStyle);
  }
  if (focused == 1) {
    contentStyle = Object.assign(contentStyle, focusedStyle);
  }

  return (
    <div key={label} style={contentStyle}>{spaceLabel(index, label)}</div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function(space) {
    spaces.push(renderSpace(space));
  });

  return (
    <div style={containerStyle}>
      {spaces}
    </div>
  );
};

export default render;
