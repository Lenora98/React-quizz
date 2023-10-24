import React,{useState} from 'react';
import './Quizz.css';
import questions from './QuizzData';
import QuizzResult from './QuizzResult';

const Quizz=()=>{
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore]=useState(0)
  const [correctAns,setCorrectAns]=useState(0)
  const [showResult,setShowResult]=useState(false)
  const [Clicked,setClicked]=useState(false)
  const handelAnswerOption=(isCorrect)=>{
    if(isCorrect){
     setScore(score+5)
     setCorrectAns(correctAns+1)
    }
    setClicked(true)
  }
  const handelNextOption=()=>{
    setClicked(false)
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion)
    }
    else{
        setShowResult(true)
    }
  };

  const handelPlayAgain=()=>{
    setCurrentQuestion(0)
    setScore(0)
    setCorrectAns(0)
    setShowResult(false)
  }
    return(
        <>

        <div className="app">
            {showResult?(   <QuizzResult score={score} correctAns={correctAns} handelPlayAgain={handelPlayAgain}/>):(
                 <>
                 <div className='question-section'>
                    
                 <h5>score:{score}</h5>
                 <div className='.question-count'>
                     <span>question {currentQuestion+1} of {questions.length}</span>
                 </div>
                  <div className='question-text '>
                     {questions[currentQuestion].questionText}
                  </div>
                 </div>
                 <div className='answer-section'>
                     {questions[currentQuestion].answerOptions.map((ans,i)=>{
                           return <button
                           className={`button ${Clicked && ans.isCorrect?'correct':'botton' }`}
                            disabled={Clicked} key={i} onClick={()=>handelAnswerOption(ans.isCorrect)}>{ans.answerText}</button>
                     })}
                    
                    <div className='actions'>
                 <button onClick={handelPlayAgain}>Quit</button>
                 <button disabled={!Clicked} onClick={handelNextOption}>Next</button>
             </div>
                 </div>
                 </>
            )}
        
        </div>
        </>
    )
}
export default Quizz;