import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const WordTimer = () => {
  const { correctWords } = useAppSelector((state) => state.words);
  const { gameState } = useAppSelector((state) => state.game);

  const [timeElapsed, setTimeElapsed] = useState(60);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval> | null = null;

    if (timeElapsed > 0 && gameState === "started") {
      timerId = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed - 1);
      }, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timeElapsed, gameState]);

  const totalTime = 60;
  const wpm = correctWords / ((totalTime - timeElapsed) / 60);

  return (
    <div>
      <p>Time: {timeElapsed} seconds left</p>
      <p>Words per minute: {isNaN(wpm) ? 0 : wpm.toFixed(2)}</p>
    </div>
  );
};

export default WordTimer;
