import React, {useState, useContext} from 'react';
import {Questions} from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts';

function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const restartQuiz = () =>{
        setScore(0);
        setGameState("menu");
    }
    
    return ( 
        <div className='End-Screen'>
            <h1> You Scored {score} / {Questions.length} </h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
       </div>
     );
}

export default EndScreen;