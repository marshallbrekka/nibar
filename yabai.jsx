import Desktop from "./lib/Desktop.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
  padding: "0 12px",
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "16px",
  position: "fixed",
  overflow: "hidden",
  left: "0px",
  top: "0px",
  fontFamily: styles.fontFamily,
  lineHeight: styles.lineHeight,
  fontSize: styles.fontSize,
  color: styles.colors.dim,
  fontWeight: styles.fontWeight
};

function filterSpaces(state, screen_id) {
  if (state.yabai.displays) {
    const display = state.yabai.displays.find(display => display.id === screen_id);
    if (display) {
      state.yabai.spaces = state.yabai.spaces.filter(space => space.display === display.index);
    }
  }
  return state;
}

// Grabs the display ID off of the URL
// https://github.com/felixhageloh/uebersicht/issues/224#issuecomment-239909445
function displayId() {
  return parseInt(window.location.pathname.substring(1));
}

export const refreshFrequency = false;
export const command = "./nibar/scripts/yabai.sh";
export const initialState = { yabai: {error: 'Starting up...'} };

export const init = (dispatch) => {
  console.log("Init yabai widget");
};

export const updateState = (event, state) => {
  switch (event.type) {
  case 'UB/COMMAND_RAN':
    const data = parse(event.output);
    if (typeof data === 'undefined') {
      state.yabai = { error: 'Unknown script output' };
    } else {
      state.yabai = data;
    }
  }
  state = filterSpaces(state, displayId());
  return state;
};


export const render = ({ yabai, screen_id }) => {
  console.log("render", yabai, screen_id);
  if (yabai.error) {
    return (
      <div style={style}>
        <Error msg={`Error: ${yabai.error}`} side="left" />
      </div>
    );
  }
  return (
    <div style={style}>
      <Desktop output={yabai.spaces} />
    </div>
  );
};

export default null;
