import styles from "./styles.jsx";

const symbols = {
  layers: "􀏧",
  grid_2: "􀏠",
  grid_3: "􀏝",
  grid_4: "􀇷",
  grid_6: "􀏣",
  stacked: "􀏭",
  floating: "􀇴",
  frame: "􀎹",
  fullscreen: "􀏃",
}

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "0px"
};

const desktopStyle = {
  lineHeight: "18px",
  width: "4ch",
  textAlign: "center",
  paddingTop: "2px",
  paddingBottom: "2px",
  color: styles.colors.disabled,
  marginRight: "1px",
};

const hasWindowsStyle = {
  color: styles.colors.bg,
};

const visibleStyle = {
  background: styles.colors.fgBackgroundInactive,
  color: styles.colors.fg,
};

const focusedStyle = {
  background: styles.colors.fgBackground,
  color: styles.colors.fg,
};

// Extracts the space number from the label.
// Expects label in the form of "d:<displayUUID>:<spaceNumber>".
function spaceLabel(index, label) {
  if (label == "") {
    return index;
  }
  return label.split(":").pop();
}

const renderSpace = ({index, focused, visible, windows, label}) => {
  let contentStyle = Object.assign({}, desktopStyle);
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

  let symbol = symbols.layers
  const focusedLayout = output.
	filter(space => space.visible == 1).
	map(space => space.type)[0]
  if (focusedLayout === "bsp") {
    symbol = symbols.grid_3
  } else if (focusedLayout == "float") {
    symbol = symbols.floating
  }

  return (
    <div style={containerStyle}>
      <span style={desktopStyle}>{symbol}</span>
      {spaces}
    </div>
  );
};

export default render;
