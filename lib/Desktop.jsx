import styles from "./styles.jsx";
import { css } from "uebersicht"

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

const containerCSS = css({
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "0px"
})

const desktopCSS = css({
  lineHeight: "18px",
  width: "4ch",
  textAlign: "center",
  paddingTop: "2px",
  paddingBottom: "2px",
  color: styles.colors.disabled,
  marginRight: "1px",
})

const hasWindowsCSS = css({
  color: styles.colors.bg,
})


const visibleCSS = css({
  background: styles.colors.fgBackgroundInactive,
  color: styles.colors.fg,
})

const focusedCSS = css({
  background: styles.colors.fgBackground,
  color: styles.colors.fg,
})

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

// Extracts the space number from the label.
// Expects label in the form of "d:<displayUUID>:<spaceNumber>".
function spaceLabel(index, label) {
  if (label == "") {
    return index;
  }
  return label.split(":").pop();
}
function renderSpace({index, focused, visible, windows, label}) {
  let className = [desktopCSS]
  if (windows.length > 0) {
      className.push(hasWindowsCSS)
  }
  if (visible == 1) {
      className.push(visibleCSS)
  }
  if (focused == 1) {
      className.push(focusedCSS)
  }

  return (
      <div key={label} className={className.join(" ")}>{spaceLabel(index, label)}</div>
  )
}

function renderLayoutSymbol(output) {
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
	<div className={desktopCSS} key="space-layout">{symbol}</div>
    );
}


const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function(space) {
    spaces.push(renderSpace(space));
  });

  return (
    <div className={containerCSS}>
      {renderLayoutSymbol(output)}
      {spaces}
    </div>
  );
};

export default render;
