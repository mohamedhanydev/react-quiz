import ProgressBar from "./ProgressBar";
import Info from "./Info";
import Question from "./Question";
import End from "./End";
import { useEffect, useReducer } from "react";
import data from "../questions.json";
function totalScore() {
  return data.questions.reduce((acc, curr) => curr.points + acc, 0);
}
function reducer(list, action) {
  switch (action.type) {
    case "increment":
      return {
        ...list,
        index: list.index + 1,
        isTrue: false,
        curQuestion: data.questions[list.index].question,
        curOptions: data.questions[list.index].options,
        curCorrectOption: data.questions[list.index].correctOption,
        curQuestionPoints: data.questions[list.index].points,
      };
    case "show answer":
      return {
        ...list,
        isTrue: true,
        curScore: action.curScore,
        progressValue: list.progressValue + 1,
      };
    case "reset":
      return {
        index: 0,
        curScore: 0,
        maxScore: totalScore(),
        isTrue: false,
        isFinished: action.payload.isFinished,
        progressValue: 0,
        curQuestion: data.questions[0].question,
        curOptions: data.questions[0].options,
        curCorrectOption: data.questions[0].correctOption,
        curQuestionPoints: data.questions[0].points,
      };
    case "finish":
      return {
        ...list,
        isFinished: true,
        isTrue: false,
      };
  }
}
export default function Quiz({ isStarted, setIsStarted }) {
  const [list, dispatch] = useReducer(reducer, {
    index: 0,
    curScore: 0,
    maxScore: totalScore(),
    isFinished: false,
    isTrue: false,
    progressValue: 0,
    curQuestion: data.questions[0].question,
    curOptions: data.questions[0].options,
    curCorrectOption: data.questions[0].correctOption,
    curQuestionPoints: data.questions[0].points,
  });
  const clickFinish = list.index + 1 === +data.questions.length;
  useEffect(() => {
    if (!isStarted) dispatch({ type: "reset", payload: { isFinished: true } });
  }, [isStarted]);
  return (
    <>
      {!list.isFinished ? (
        <main className="main">
          <header className="progress">
            <ProgressBar
              min={0}
              max={data.questions.length}
              value={list.progressValue}
            />
            <Info curr={list.index + 1} max={data.questions.length}>
              Question
            </Info>
            <Info curr={list.curScore} max={list.maxScore}></Info>
          </header>

          <Question list={list} dispatch={dispatch} />
          {list.isTrue && (
            <footer>
              <button
                className="btn btn-ui"
                onClick={() => {
                  dispatch({
                    type: !clickFinish ? "increment" : "finish",
                    // payload: setIsStarted,
                  });
                }}
              >
                {clickFinish ? "Finish" : "Next"}
              </button>
            </footer>
          )}
        </main>
      ) : (
        <End list={list} setIsStarted={setIsStarted} />
      )}
    </>
  );
}
