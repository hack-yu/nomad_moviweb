import React from 'react';
//import Post from './Post';

function Post(props){
  console.log(props);
  return (
    <div>i hate {props.a}</div>
  );
}

function Get({a}){
  console.log(a);
  return (
    <div>i hate {a}</div>
  );
}

function App() {
  return (
    // html type statement
    <div>
      <Post a="1234"/>
      <Post b="5678"/>
      
      <Get a="1234"/>
      <Get b="5678"/>
    </div>
  );
}
export default App;