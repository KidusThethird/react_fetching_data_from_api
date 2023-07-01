
import './App.css';
import Axios from "axios";
import {useState , useEffect} from "react";

function App() {

const[fetchedExcuse, setFetchedExcuse] = useState("");

const fetchData=(type)=> {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}`).then((res)=>{
    setFetchedExcuse(res.data[0]);
  })
}



  return (  
    <div className="App">
 
 <h1>{fetchedExcuse.excuse}</h1>
 {fetchedExcuse == "" ? <h2>Choose Type</h2> : <h2>Catagory: {fetchedExcuse.category}</h2>}
 
 <button onClick={()=>fetchData("party")}>Party</button>
 <button onClick={()=>fetchData("family")}>Family</button>
 <button onClick={()=>fetchData("office")}>Office</button>
    </div>
  );
}

export default App;
// https://excuser-three.vercel.app/v1/excuse/


