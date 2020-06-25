import styles from "./styles.jsx";

const symbols = {
  arrow_down:   "􀄩",
  arrow_up:     "􀄨",
  outline_down: "􀁸",
  outline_up:   "􀁶",
  solid_down:   "􀁹",
  solid_up:     "􀁷",
  arrow_dual:   "􀄬",
}
  

const speed = type => {
  if (type < 1000) {
    return { val: type.toString().padStart(3, "0"), unit: "kb/s" };
  } else if (type > 1000 && type < 10000) {
    return {
      val: parseFloat(Math.round((type / 1000) * 100) / 100).toFixed(1),
      unit: "mb/s"
    };
  } else {
    return {
      val: Math.round(type / 1000)
        .toString()
        .padStart(3, "0"),
      unit: "mb/s"
    };
  }
};

export const updateState = event => {
  const data = event.output.split("#");
  const dwl = speed(Math.round(data[0]));
  const upl = speed(Math.round(data[1]));

  return {
    dwl: `Dwl: ${dwl.val} ${dwl.unit}`,
    upl: `Upl: ${upl.val} ${upl.unit}`
  };
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div>
      <span style={output.kbout > 1000 ? { color: styles.colors.red } : null}>
        {Math.round(output.mbout)}<span style={{fontSize: "9px"}}>mb</span>
      </span>
      &nbsp;
      {symbols.arrow_dual}
      &nbsp;
      <span style={output.kbin > 1000 ? { color: styles.colors.red } : null}>
        {Math.round(output.mbin)}<span style={{fontSize: "9px"}}>mb</span>
      </span>
    </div>
  );
};

export default render;
