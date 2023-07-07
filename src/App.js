import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  const deleteElementAtIndex = (index) => {
    const newArray = toDos.filter((_, i) => i !== index);
    setToDos(newArray);

  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Add Your ToDos Here...🌝</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj,index)=> {
          return (
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj1=>{
                if(obj1.id===obj.id){
                  obj1.status=e.target.checked
                }
                return obj1
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={() => deleteElementAtIndex(index)} className="fas fa-times"></i>
          </div>
        </div> )
        } )

        }
        <br/>
        <div className='right'>
          <h1>Completed</h1>
          {toDos.map((obj)=>{
            if(obj.status){
              return(<h2>{obj.text}</h2>)
            }
            return null
          })}
        </div>
        <br />
        <div className='right'>
          <h1>Pending</h1>
          {toDos.map((obj)=>{
            if(obj.status){
              return null
            }
            else{
              return(<h2>{obj.text}</h2>)
            }
          })}
        </div>
        
      </div>
    </div>
  );
}

export default App;