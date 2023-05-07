import { reset } from "@/redux/wordSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Cart, Button, WordList } from "..";

const WordListArea = () => {
  const { isGameEnded } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();

  return (
    <Cart>
      {isGameEnded ? (
        <div>
          <div className="text-center fs-4 fw-semibold">
            Congrats! 🎉 Your score is: "Amazing!"
          </div>
          <div className="reset-btn-container mt-3">
            <Button title="Reset" onClick={() => dispatch(reset())} />
          </div>
        </div>
      ) : (
        <WordList />
      )}
    </Cart>
  );
};

export default WordListArea;
