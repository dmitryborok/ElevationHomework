import Company from './components/Company';
import './App.css';
import Wardrobe from './components/Wardrobe';

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" }
  ]
  

  // return (<div className="app">
  //         {companies.map(company => <div>
  //                                  <Company key={company.name} name={company.name.toUpperCase()} earnings = {company.revenue}/>
  //                               </div>
  //                       )
  //         }
  //         </div>
  //       )

        return (<div className="app">
                  <Wardrobe articles={wardrobe}/>
                </div>
      )

}


export default App;
