
import './App.css';
import Axios from "axios";
import {useState , useEffect} from "react";

function App() {


const [fact, setFact] = useState("");


useEffect(()=>{
 
  generate();

},[])

 
const generate = () => {
  Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res)=>{
    setFact(res.data[0].excuse);
    console.log(res)
  })
} 

  return (  
    <div className="App">
  <button onClick={generate}>Generate</button>
  <h3>{fact}</h3>   
    </div>
  );
}

export default App;
// https://excuser-three.vercel.app/v1/excuse/