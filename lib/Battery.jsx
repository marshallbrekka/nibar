import styles from "./styles.jsx";
const symbols = {
  circle_charging: "􀋨",
  circle: "􀋧",
  battery_0: "􀛪",
  battery_35: "􀛩",
  battery_100: "􀛨",
  charging_solid: "􀋦",
  charging_outline: "􀋥",
}

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  let remainingTime = output.remaining;

  let symbol = symbols.battery_100
  if (percentage <= 5) {
    symbol = symbols.battery_0
  } else if (percentage <= 35) {
    symbol = symbols.battery_35
  }
  return (
    <div>
      <div
        style={
          percentage < 10 && charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
	<span style={{fontSize: "11px"}}>{percentage}%</span>
        &nbsp;
	<span>{charging ? symbols.charging_solid : symbol}</span>
      </div>
    </div>
  );
};

export default render;
