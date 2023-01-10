import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';
import Answers from './Answers.js';

function App() {
  return (
    <div className="App">
      <EightBall answers={Answers}/>
    </div>
  );
}

export default App;
