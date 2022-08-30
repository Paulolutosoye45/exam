import React from 'react'

function question({data:question, correct_answer,incorrect_answers}) {
  return (
    <div>
           <div className='quiz-container'> 
      <div className= "quiz-head">
                    <h1 className="quiz-title">Quiz Game</h1>
                    <h1>{question}</h1>
                    <div className= "quiz-score flex">
                        <span id = "correct-score"></span>/<span id = "total-question"></span>
                    </div>
                </div>

      <div className='quiz-body'>
                 <h2 className= 'quiz-question' id='question'></h2>
               <ul className='quiz-options'>
                 <li>{incorrect_answers [0]}</li>
                 <li>{correct_answer}</li>
                 <li>{incorrect_answers [1]}</li>
                 <li>{incorrect_answers [2]}</li>
               </ul>
             <div id = "result"></div>
      </div>
      <div class = "quiz-foot">
            <button type = "button" id = "check-answer">Check Answer</button>
             <button  type = "button" id = "play-again">Play Again!</button>
      </div>
      
    </div>
    </div>
  )
}

export default question