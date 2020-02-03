import styles from "./styles.jsx";
const firefox = "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";

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
  height: "17px",
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

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
};

// Extracts the space number from the label.
// Expects label in the form of "display-<n>_space-<n>".
function spaceLabel(index, label) {
  if (label == "") {
    return index;
  }
  return label.split("-").pop();
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
  if (index == 6) {
    return (
      <div key={label} style={contentStyle}><img style={imageStyle} src={`data:image/jpeg;base64,${firefox}`} /></div>
    );
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
