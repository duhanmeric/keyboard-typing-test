import { useAppSelector } from "@/redux/hooks";

const WordList = () => {
  const { wordArr, currentRow, currentColumn, topRowIndex } = useAppSelector(
    (state) => state.words
  );
  return (
    <div className="word-list">
      {wordArr.slice(topRowIndex, topRowIndex + 2).map((line, i) => (
        <div key={topRowIndex + i} className="line">
          {line.map((word, j) => (
            <span
              className={`word ${
                topRowIndex + i === currentRow && j === currentColumn
                  ? "current"
                  : ""
              }`}
              key={j}
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordList;
