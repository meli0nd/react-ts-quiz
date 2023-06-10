import React from "react"
import s from "./Results.module.scss"

type TResultProps = {
  resetQuestions: () => void
  totalQuestions: number
  totalCorrect: number
}

const Results: React.FC<TResultProps> = ({
  resetQuestions,
  totalCorrect,
  totalQuestions,
}) => {
  return (
    <div className={s.results}>
      <div className={s.resultsImage}>
        <img src="./assets/confetti.svg" alt="" />
      </div>
      <div className={s.resultsTitle}>
        <span>
          Вы отгадали {totalCorrect} из {totalQuestions}
        </span>
      </div>
      <button onClick={resetQuestions} className={s.resetButton}>
        Попробовать снова
      </button>
    </div>
  )
}

export default Results
