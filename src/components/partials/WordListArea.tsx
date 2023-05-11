import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Cart, Button, WordList } from "..";
import { resetGame } from "@/redux/gameSlice";
import { resetWordStat } from "@/redux/wordSlice";

const WordListArea = () => {
  const { gameState } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const resetHandler = () => {
    dispatch(resetGame());
    dispatch(resetWordStat());
  };

  return (
    <Cart>
      {gameState === "ended" ? (
        <div>
          <div className="text-center fs-4 fw-semibold">
            Congrats! 🎉 Your score is: "Amazing!"
          </div>
          <div className="reset-btn-container mt-3">
            <Button title="Reset" onClick={() => resetHandler()} />
          </div>
        </div>
      ) : (
        <WordList />
      )}
    </Cart>
  );
};

export default WordListArea;
