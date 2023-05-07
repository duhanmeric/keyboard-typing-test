import { useEffect } from "react";
import { defineWordArr } from "@/redux/wordSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CheatArea, InputArea, WordListArea } from "@/components";

function App() {
  const { isGameEnded } = useAppSelector((state) => state.words);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const _wordArr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in eveniet ullam voluptate exercitationem, iusto nemo delectus animi quasi dolor vero accusamus distinctio assumenda. Et possimus deleniti repudiandae laborum modi?`;
    dispatch(defineWordArr(_wordArr));
  }, [isGameEnded, dispatch]);

  return (
    <div className="app">
      <div className="container-lg py-5">
        <div className="words app-container">
          <h6 className="app-title fw-bold fs-5 text-center mb-4">
            keyboard speed test app
          </h6>
          <WordListArea />
        </div>
        <div className="app-container mt-4">
          <InputArea />
          <CheatArea />
        </div>
      </div>
    </div>
  );
}

export default App;
