import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Cart, Input, WordList } from "@/components";
import { defineWordArr, nextWord, reset } from "@/redux/wordSlice";

function App() {
  const { isLastWord, isGameEnded } = useAppSelector((state) => state.words);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const _wordArr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in eveniet ullam voluptate exercitationem, iusto nemo delectus animi quasi dolor vero accusamus distinctio assumenda. Et possimus deleniti repudiandae laborum modi?`;
    dispatch(defineWordArr(_wordArr));
  }, [isGameEnded, dispatch]);

  return (
    <div className="app">
      <div className="container py-5">
        <div className="words app-container">
          <h6 className="app-title fw-bold fs-5 text-center mb-4">
            keyboard speed test app
          </h6>
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
        </div>
        <div className="app-container mt-4">
          <Cart>
            <div className="d-flex justify-content-between align-items-center">
              <div className="input-container">
                <Input label="Enter word" placeholder="Lorem" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
