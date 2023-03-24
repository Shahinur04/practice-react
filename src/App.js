import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="noakhali" specialty="jogra"></District>
      <District name="rongpuri" specialty="mofij"></District>
      <District name="Sylet" specialty="going to bidesh"></District>
      <District name="monu" specialty="borisaillla"></District>
      
    </div>
  );
  
}
function LoadPosts(){
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return (
    <div className="postStyle">
      <h1>
        Posts:{posts.length}
      </h1>
      {
        posts.map(post=><Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props){
  return (
    <div>
      <h2>title:{props.title}</h2>
    <p>body:{props.body}</p>
    </div>
  )
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
