import logo from './logo.svg';
import './App.css';

function App() {
  const getClassName = (temperature) => {
     if (temperature < 15) return "freezing";
     if (temperature > 30) return "hell-scale";
     return "fair";
   }

   const temperature = Math.floor(Math.random()*45);

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(temperature)}>{temperature} deg</div>
      </div>
    </div>
  )
}

export default App;
