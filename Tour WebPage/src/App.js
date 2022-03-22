import './App.css';
import Card from './component/Cards/Card';
import Header from "./component/Header/Header";
import Navbar from './component/Navbar/Navbar';
import { data } from './Helper/data';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Header /> 
      <Card card={data}/>
      
     
    </div>
  );
}

export default App;
