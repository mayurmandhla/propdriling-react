import React, { useState } from 'react';
import Card from './Components/Card';

function App() {

  const data = [
    {name:"john", profession:"painter", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:"false"},
    {name:"harsh", profession:"photographer", image:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:"false"},
    {name:"amit", profession:"dancer", image:"https://images.unsplash.com/photo-1582255334378-4e9bc9505664?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:"false"},
    {name:"sami", profession:"cricketer", image:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:"false"}
  ];

 const [realdata, setRealData] = useState(data);
 const handleFriendButton = (cardindex)=>{
  setRealData((previous)=>{
   return previous.map((item, index)=>{
      if(index === cardindex){
        return {...item, friends: !item.friends}
      }
      return item;
    })
  })
 }

  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center'>
      {realdata.map((item, index)=>(
        <Card key={index} index={index} values={item} handleClick={handleFriendButton} />
      ))}
    </div>
  )
}

export default App
