import { useAppSelector } from "@/redux/hooks";

const WordList = () => {
  const { wordArr, currentRow, currentColumn, topRowIndex } = useAppSelector(
    (state) => state.words
  );

  return (
    <div className="word-list">
      {wordArr.slice(topRowIndex, topRowIndex + 2).map((line, i) => (
        <div key={topRowIndex + i} className="line">
          {line.map((wordObj, j) => (
            <span
              className={`word ${wordObj.status} ${
                topRowIndex + i === currentRow && j === currentColumn
                  ? "current"
                  : ""
              }`}
              key={j}
            >
              {wordObj.word.trim()}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordList;
