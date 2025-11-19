export default function Option({ dispatch, list, id, children }) {
  function checkAnswer() {
    dispatch({
      type: "show answer",
      curScore:
        +id === list.curCorrectOption
          ? list.curScore + list.curQuestionPoints
          : list.curScore,
    });
  }
  let extraClass = "";
  if (list.isTrue) {
    extraClass = list.curCorrectOption === +id ? "correct answer" : "wrong";
  }
  const finalClassNames = `btn btn-option ${extraClass}`;
  // if
  return (
    <button
      className={finalClassNames}
      id={id}
      onClick={checkAnswer}
      disabled={list.isTrue}
    >
      {children}
    </button>
  );
}
