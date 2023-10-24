import React from 'react'
import questions from './QuizzData'

const QuizzResult = (props) => {
  return (
    <div className='score-section'>
      <h2>Completed</h2>
      <h4>Total Score {props.score}/20</h4>
      <h4>Your correct Question {props.correctAns} out of {questions.length}</h4>
      <button onClick={props.handelPlayAgain}>Play Again!</button>
    </div>
  )
}

export default QuizzResult
