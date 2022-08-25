import './App.css';
import useFetch from './components/useFetch';





function App() {
  const { data, loading, error, refetch } = useFetch(
    "https://opentdb.com/api.php?amount=30"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);
  console.log(data)
  return (
    <div className="App">
      <div className='quiz-container'>
      <div className= "quiz-head">
                    <h1 className="quiz-title">Quiz Game</h1>
                    <div className= "quiz-score flex">
                        <span id = "correct-score"></span>/<span id = "total-question"></span>
                    </div>
                </div>

      <div className='quiz-body'>
                 <h2 className= 'quiz-question' id='question'>{data?.results[0].question} </h2>
               <ul className='.quiz-options'>
                 <li>{data?.results[0].incorrect_answers}</li>
                 <li>{data?.results[0].correct_answer}</li>
                 <li>{data?.results[1].incorrect_answers}</li>
                 <li>{data?.results[2].incorrect_answers}</li>
               </ul>
             <div id = "result"></div>
      </div>
      <div class = "quiz-foot">
            <button type = "button" id = "check-answer">Check Answer</button>
             <button type = "button" id = "play-again">Play Again!</button>
      </div>
      <button  className='next' onClick={refetch}>Next Question </button>
    </div>
</div>
  );
}

export default App;
