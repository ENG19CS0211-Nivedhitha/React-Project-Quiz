import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
function Menu() {

    const {gameState, setGameState} = useContext(QuizContext)
    return ( 
        <div className='Menu'>
            <div className='input-values'>
            <input type='text' placeholder='Enter your name (optional)'></input>
            </div>
            <button onClick = {() =>  {setGameState("quiz")}}>Start Quiz</button>
            {/*<button onClick={() => {setGameState("endscreen")}}>End Screen</button>*/}

        </div>
     );
}

export default Menu;
