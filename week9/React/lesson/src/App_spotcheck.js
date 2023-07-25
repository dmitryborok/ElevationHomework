import logo from './logo.svg';
import './App.css';

function App() {
  const getMorningGreeting = () => {
    return (<div style={{color: 'pink'}}>Good morning</div>)
  }
  const getEveningGreeting = () => {
    return (<div style={{color: 'violet'}}>Good evening</div>)
  }

  const getThreeTexts = () => {
    return ([
      getMorningGreeting(),
      getEveningGreeting(),
      <div>some text</div>
    ])
  }

  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 2</h4 >
        <div className="exercise" id="spotcheck-2">
          {getThreeTexts()}
        </div>
      </div>
    </div>
  )
}

export default App;
