import { useRef, useState } from "react";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const intervalID = useRef<ReturnType<typeof setInterval>>();
  const [machine, send] = useMachine(
    createMachine({
      initial: "idle",
      states: {
        idle: {
          on: {
            START: "running",
          },
          entry: () => {
            setTime(0);
            clearInterval(intervalID.current);
          },
        },
        running: {
          on: {
            PAUSE: "paused",
          },
          entry: () => {
            intervalID.current = setInterval(() => {
              setTime((t) => t + 1);
            }, 100);
          },
        },
        paused: {
          on: {
            RESET: "idle",
            START: "running",
          },
          entry: () => {
            clearInterval(intervalID.current);
          },
        },
      },
    })
  );

  return (
    <div>
      <div className="display">{time}</div>
      <div className="controls">
        {machine.nextEvents.includes("START") && (
          <button
            onClick={() => {
              send("START");
            }}
          >
            Start
          </button>
        )}
        {machine.nextEvents.includes("PAUSE") && (
          <button
            onClick={() => {
              send("PAUSE");
            }}
          >
            Pause
          </button>
        )}
        {machine.nextEvents.includes("RESET") && (
          <button
            onClick={() => {
              send("RESET");
            }}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
