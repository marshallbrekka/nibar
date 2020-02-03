import {run} from "uebersicht";

const cache = {};

function fetch(appName, pid)  {
  
}

const render = ({ output }) => {
                                let charging = output.charging;
                                let percentage = output.percentage;
                                let remainingTime = output.remaining;
                                return (
                                        <div>
                                        <div
                                        style={
                                               percentage < 20 && charging == false
                                               ? { color: styles.colors.red }
                                               : null
                                               }
                                        >
                                        <span>{charging ? "􀋨" : "􀋧"} {percentage}%</span>
                                        </div>
                                        </div>
                                        );
                                };

export default render;
