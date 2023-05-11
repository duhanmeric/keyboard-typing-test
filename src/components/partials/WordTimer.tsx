import { finishGame } from "@/redux/gameSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const WordTimer = () => {
  const { correctWords } = useAppSelector((state) => state.words);
  const { gameState } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();

  const [timeElapsed, setTimeElapsed] = useState(3);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval> | null = null;

    if (gameState === "started") {
      timerId = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => {
          if (prevTimeElapsed <= 0 && timerId) {
            clearInterval(timerId);
            timerId = null;
            return 0;
          } else {
            return prevTimeElapsed - 1;
          }
        });
      }, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameState, dispatch]);

  useEffect(() => {
    if (timeElapsed === 0) {
      setTimeElapsed(60);
      dispatch(finishGame());
    }
  }, [timeElapsed, dispatch]);

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
