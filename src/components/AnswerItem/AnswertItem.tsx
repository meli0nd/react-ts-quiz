import React, { useEffect } from "react"
import s from "./AnswerItem.module.scss"

type TAnswersItem = {
  answer: string
  id: number
  setCorrectAnswer: (id: number) => void
}

const AnswertItem: React.FC<TAnswersItem> = ({
  answer,
  id,
  setCorrectAnswer,
}) => {
  return (
    <>
      <div className={s.answerItem} onClick={() => setCorrectAnswer(id)}>
        <div className={s.answerItemTitle}>{answer}</div>
      </div>
    </>
  )
}

export default AnswertItem
