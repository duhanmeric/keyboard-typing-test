import { useAppSelector } from "@/redux/hooks";
import { Cart, Input, Button } from "..";

const InputArea = () => {
  const { isLastWord, isGameEnded } = useAppSelector((state) => state.words);

  return (
    <Cart>
      <div className="d-flex justify-content-between align-items-center">
        <div className="input-container">
          <Input
            onChange={(e) => console.log(e.target.value)}
            value=""
            label="Enter word"
            placeholder="Lorem"
          />
        </div>
        <div className="button-container">
          <Button
            isDisabled={isGameEnded || isLastWord}
            title="Start"
            onClick={() => null}
          />
        </div>
      </div>
    </Cart>
  );
};

export default InputArea;
