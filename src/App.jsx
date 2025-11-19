import { useState } from "react";
import Header from "./components/Header.jsx";
import Start from "./components/Start.jsx";
import Quiz from "./components/Quiz.jsx";

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="app">
      <Header />
      <main className="main">
        {!isStarted ? (
          <Start onClick={setIsStarted} />
        ) : (
          <Quiz isStarted={isStarted} setIsStarted={setIsStarted} />
        )}
      </main>
    </div>
  );
}
