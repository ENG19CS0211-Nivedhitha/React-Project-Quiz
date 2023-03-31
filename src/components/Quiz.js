import React, {useState, useContext} from 'react';
import {Questions} from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {

    const {score, setScore, setGameState} = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(""); //the state changes depending on which button we click
    const nextQuestion = () => {
        if (Questions[currQuestion].Answer == optionChosen)
            setScore(score+1); //incrementing the score value if correct option is chosen
        
        setCurrQuestion(currQuestion+1);
    }
    const finishQuiz = () => {
        //to check if the last question is correct or not
        if (Questions[currQuestion].Answer == optionChosen)
            setScore(score+1);
        
        setGameState("endscreen");
    }
 
    return ( 
        <div className='Quiz'>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className='options'>
            <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
            <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            <div className='next-btn'>
            {/*If it reaches the last question then the finish quiz button should appear to go to end screen to display score*/}
            { currQuestion == Questions.length-1 ? (<button onClick={finishQuiz}>Finish Quiz</button> ) : ( <button onClick={nextQuestion}>Next Question</button> ) }
            </div>
        </div>
     );
}

export default Quiz;