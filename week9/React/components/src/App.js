import logo from './logo.svg';
import './App.css';

function About() {
  return (
    <div>
      <p>This is an example of an...</p> 
      <p>Oh wait - </p>
      <SignUp/>
      <Blurb/> 
      <p>...about us page</p>
    </div>
  )
}


function SignUp (){
  return <p>Sign up!</p>
}

function Blurb (){
  return <p>Blurb!</p>
}


function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

function App() {
  let isUserLoggedIn = localStorage.getItem('loggedIn')

  return (
      <div className="app">
          <Nav />
          <About />
          <LandingPage />
      </div>
  )
}


export default App;
