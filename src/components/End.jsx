export default function End({ list, setIsStarted }) {
  return (
    <>
      <p className="result">
        <span>🤨</span> You scored <strong>{list.curScore}</strong> out of{" "}
        {list.maxScore} ({((list.curScore / list.maxScore) * 100).toFixed(2)}%)
      </p>
      <p className="highscore">(Highscore: 50 points)</p>
      <button className="btn btn-ui" onClick={() => setIsStarted(false)}>
        Restart quiz
      </button>
    </>
  );
}
