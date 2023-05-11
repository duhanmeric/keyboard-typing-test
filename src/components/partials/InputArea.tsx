import { KeyboardEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { checkWord, nextWord } from "@/redux/wordSlice";
import { Cart, Input, Button } from "..";
import { startGame } from "@/redux/gameSlice";

const InputArea = () => {
  const { isLastWord } = useAppSelector((state) => state.words);
  const { gameState } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();
  const [typedWord, setTypedWord] = useState("");

  const handleTypedWord = (word: string) => {
    setTypedWord(word);
  };

  const handleWordCheck = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Space") {
      e.preventDefault();
      dispatch(checkWord(typedWord));
      setTypedWord("");
      dispatch(nextWord());
    }
  };

  return (
    <Cart>
      <div className="d-flex justify-content-between align-items-center">
        <div className="input-container">
          <Input
            onChange={(e) => handleTypedWord(e.target.value)}
            value={typedWord}
            label="Enter word"
            placeholder="Lorem"
            onKeyDown={handleWordCheck}
          />
        </div>
        <div className="button-container">
          <Button
            isDisabled={gameState === "ended" || isLastWord}
            title="Start"
            onClick={() => dispatch(startGame())}
          />
        </div>
      </div>
    </Cart>
  );
};

export default InputArea;
