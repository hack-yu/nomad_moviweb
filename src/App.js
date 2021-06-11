import React from 'react';

const sportsList = [
  {
    name:"Jab",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ut0a24jpof3SOt68i_ZHRAHaEK%26pid%3DApi&f=1"
  },
  
  {
    name:"Upper",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.scduGgDh2b1q8TbGCmcDsAHaFH%26pid%3DApi&f=1"
  },
  
  {
    name:"Hook",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CuRHyX32zcra9L0F0pjdkAHaEJ%26pid%3DApi&f=1"
  },
  
  {
    name:"Sway",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.g3Iw3xHMyOQKKVkun2m-zwAAAA%26pid%3DApi&f=1"
  },
  
  {
    name:"Ducking",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HAiDtkh5fbwK0PW5ZlhN2wHaFP%26pid%3DApi&f=1"
  },
  
  {
    name:"Weaving",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PHDYsRKRBnBxSFHRCQ2t9wHaFj%26pid%3DApi&f=1"
  },

  {
    name:"Slipping",
    image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sneakpunch.com%2Fwp-content%2Fuploads%2F2013%2F04%2Fthe_slip2_col.png&f=1&nofb=1"
  }
  
];

// function GetBoxingSkill({name, image}){
//   //console.log(name);
//   console.log(name, image);
//   return (
//     <div>
//       The Skill Name: {name} <br/>
//       <img src={image}/> <br/>
//     </div>
//   );
// }

function GetBoxingSkill(props){
  //console.log(name);
  console.log(props);
  return (
    <div>
      The Skill Name: {props.name} <br/>
      <img src={props.image}/> <br/>
    </div>
  );
}

function App() {
  return (
    // html type statement
    <div>
      {sportsList.map(skill => (
        <GetBoxingSkill name={skill.name} image={skill.image}/>
      ))}
    </div>
  );
}

export default App;