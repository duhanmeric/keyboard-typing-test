import { nextWord } from "@/redux/wordSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "..";

const CheatArea = () => {
  const { isLastWord, isGameEnded } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h6 className="mt-4">Cheats: </h6>
      <div className="button-container mt-3">
        <Button
          isDisabled={isGameEnded || isLastWord}
          title="Next Word (cheat)"
          onClick={() => dispatch(nextWord())}
        />
      </div>
    </div>
  );
};

export default CheatArea;
