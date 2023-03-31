import React, {useState, useContext} from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import {QuizContext} from './Helpers/Contexts'; //context api is created in Contexts file and used in this file
import './App.css';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0); //initially score of quiz is 0
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {/* A context provider is used so that variables and its setState function can be accessed globally within the different components and can be passed around within sibling components*/}
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>  {/*A wrapper to be able to pass the state within these components*/}
      {gameState==="menu" && <Menu/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
