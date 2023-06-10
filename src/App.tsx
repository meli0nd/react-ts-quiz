import React, { useEffect, useState } from "react"
import "./App.css"
import QuizContent from "./components/QuizContent/QuizContent"
import data from "./data.json"
import Results from "./components/Results/Results"

const App: React.FC = () => {
  const [questionCounter, setQuestionCounter] = useState<number>(0)
  const [totalCorrect, setCorrect] = useState<number>(0)
  const barWidth: string =
    questionCounter === data.length ? "100%" : data[questionCounter].progress

  const correctAnswer: number =
    questionCounter === data.length ? 0 : data[questionCounter].correct

  const nextQuestion = () => {
    setQuestionCounter((prev) => {
      return prev + 1
    })
  }

  const setCorrectAnswer = (id: number) => {
    correctAnswer === id && setCorrect((prev) => prev + 1)
  }

  console.log(totalCorrect)

  const resetQuestions = () => {
    setCorrect((prev) => (prev = 0))
    setQuestionCounter((prev) => (prev = 0))
  }

  useEffect(() => {}, [questionCounter])

  return (
    <div className="App">
      <div className="quizWrapper">
        {questionCounter < data.length && (
          <div className="progressBar">
            <div className="progressBarLine" style={{ width: barWidth }}></div>
            <QuizContent
              data={data[questionCounter]}
              nextQuestion={nextQuestion}
              setCorrectAnswer={setCorrectAnswer}
            />
          </div>
        )}
        {questionCounter === data.length && (
          <Results
            resetQuestions={resetQuestions}
            totalCorrect={totalCorrect}
            totalQuestions={data.length}
          />
        )}
      </div>
    </div>
  )
}

export default App
