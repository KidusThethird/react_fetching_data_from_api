
import './App.css';
import Axios from "axios";
import {useState , useEffect} from "react";

function App() {
 const [givenName, setGivenName]= useState("");
  const [age, setAge] = useState("--");
const handleChange = (event) => {

  setGivenName(event.target.value);
  console.log(givenName);
}


const generate= () => {
  Axios.get("https://api.agify.io/?name="+ givenName).then((res)=>{
    setAge(res.data)
  })
}
  return (  
    <div className="App">
 <button onClick={generate}>Pridict Age</button>
 <input onChange={handleChange} type="text" />
 <h1>Your age is: {age.name}</h1>
    </div>
  );
}

export default App;
// https://excuser-three.vercel.app/v1/excuse/