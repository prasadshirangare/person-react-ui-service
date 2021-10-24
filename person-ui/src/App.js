//import logo from './logo.svg';
import './App.css';
import PersonHeader from './component/PersonHeader'
//import AddPerson from './component/AddPerson';
import ShowPerson from './component/PersonDetails';


function App() {
  return (
    <div className="App">
      <PersonHeader />    
      <ShowPerson />      
    </div>
  );
}

export default App;
