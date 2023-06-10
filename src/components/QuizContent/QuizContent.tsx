import React, { useState } from "react"
import AnswertItem from "../AnswerItem/AnswertItem"
import s from "./QuizContent.module.scss"

type TQuizContent = {
  data: any
  nextQuestion: () => void
  setCorrectAnswer: (id: number) => void
}

const QuizContent: React.FC<TQuizContent> = ({
  data,
  nextQuestion,
  setCorrectAnswer,
}) => {
  const answers = data.answers
  return (
    <div className={s.questionContainer}>
      <div className={s.questionItem}>
        <h1>{data.question}</h1>
      </div>
      <div onClick={nextQuestion} className={s.answerContainer}>
        {answers.map((q: string, index: number) => {
          return (
            <AnswertItem
              key={index}
              answer={q}
              id={index}
              setCorrectAnswer={setCorrectAnswer}
            />
          )
        })}
      </div>
      <div className={s.questionContainerBG}></div>
    </div>
  )
}

export default QuizContent
