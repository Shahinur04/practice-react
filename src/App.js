import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <District name="noakhali" specialty="jogra"></District>
      <District name="rongpuri" specialty="mofij"></District>
      <District name="Sylet" specialty="going to bidesh"></District>
      <District name="monu" specialty="borisaillla"></District>
    </div>
  );
  
}
const districtStyle={
  border:'10px solid black',
  backgroundColor:'aqua',
  padding:'20px',
  borderRadius:'20px',
  textAlign:'center'
}
function District(props) {
  const [power,setPower]=useState(1);
  const bootsPower=()=>{
    const newPower =power*2;
  setPower (newPower);
  }
  return (
    <div style={districtStyle}>
      <h1>Name:{props.name}</h1>
      <p>Specialty:{props.specialty}</p>
      <h3>Power:{power}</h3>
      <button onClick={bootsPower}>Boost Power</button>
    </div>
  );
}

export default App;
