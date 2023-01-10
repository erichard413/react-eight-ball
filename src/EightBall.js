import React, {useState} from 'react';
import './EightBall.css';
import getRandom from './GetRandom';
import counter from './Counter';

const EightBall = ({answers}) => {
    const [answer, setAnswer] = useState({msg: 'Think of a Question', color: 'black'})
    const [counts, setCounts] = useState({green: 0, red: 0, goldenrod: 0});

    const handleClick = () => {
            setCounts(counter(answer, counts));
            setAnswer(getRandom(answers));
    }

    return (
        <>
        <div className="EightBall" style={{backgroundColor: answer.color}} onClick={ handleClick }>
           <h2 className="EightBall-h2">{answer.msg}</h2>
        
        </div>
        <button className="EightBall-btn" onClick={() => {
            setAnswer({msg: 'Think of a Question', color: 'black'});
            setCounts({green: 0, red: 0, goldenrod: 0});
            
        }}>Reset</button>
        
        <div className="EightBall-results">
            <ul label="Counts:" style={{listStyle : 'none'}}>
                <li>Green: {counts.green}</li>
                <li>Orange: {counts.goldenrod}</li>
                <li>Red: {counts.red}</li>
            </ul>
        </div>
        </>

        
    )
}

export default EightBall;