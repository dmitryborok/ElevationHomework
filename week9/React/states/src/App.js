import logo from './logo.svg';
import './App.css';
import SpotCheck1 from './components/SpotCheck1';
import { useState } from 'react';
import Company from './components/Company';
import Calendar from './components/Calendar';
import Reservations from './components/Reservations';
import Cold from './components/Cold';
import Hot from './components/Hot';
import Houdini from './components/Houdini';
import Home from './components/Home';
import Landing from './components/Landing';

function App() {
  let [companies, setCompanies] = useState([
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
    ]);

    const [reservations, setReservations] = useState([
      { day: "Monday", time: 2000, name: "Earl" },
      { day: "Monday", time: 1845, name: "Ella" },
      { day: "Tuesday", time: 1930, name: "Linda" },
      { day: "Wednesday", time: 2015, name: "Anni" }
  ]);

  const [isCold, setIsCold] = useState(true);

  const changeIsCold = function() {
    setIsCold(!isCold);
  }

  const [likeCounter, setLikeCounter] = useState(0);

  const incCounter = function() {
    setLikeCounter(likeCounter + 1)
  }

  const [userData, setUserData] = useState(  
    {
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      shouldDiscount: true,
      currentPage: "Home"
    }) 

  const togglePage = function() {
    let newUserData = {...userData};
    newUserData.store = [...userData.store];
    newUserData.currentPage = (userData.currentPage === "Landing" ? "Home" : "Landing"); 
    setUserData(newUserData);
  }

  const toggleDiscount = function() {
    let newUserData = {...userData};
    newUserData.store = [...userData.store];
    newUserData.shouldDiscount = !userData.shouldDiscount; 
    setUserData(newUserData);
  }

  return (
    <div>
      <SpotCheck1/>
      {companies.map(company => <Company name={company.name} revenue={company.revenue}/>)}
      <Calendar reservations={reservations} />
      <Reservations reservations={reservations} /> 
      <button onClick={changeIsCold}>{isCold ? <Cold /> : <Hot />} Click to change</button>
      <div>Like counter: {likeCounter}</div>
      <button onClick={incCounter}>Like me do</button>
      <Houdini/>
      {userData.currentPage === "Landing" ? <Landing data={userData}/> : <Home store={userData.store} shouldDiscount={userData.shouldDiscount}/> }
      <button onClick={togglePage}>Now shown {userData.currentPage} (press to toggle)</button>
      <button disabled={userData.currentPage === "Landing"} onClick={toggleDiscount}>
          {userData.shouldDiscount ? "Discounted" : "Full"} prices (press to toggle)
        </button>
    </div>
  )
}

export default App;
