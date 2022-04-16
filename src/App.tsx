import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const ButtonFoo1=(subscriber:string, age:number)=>{
        console.log(subscriber,age)
    }
    const ButtonFoo2=(subscriber: string)=>{
        console.log(subscriber)
    }
    const ButtonFoo3=()=>{
        console.log('IM STUPID BUTTON')
    }
  return (
    <div className="App">
      <Button name={'MyChanel-1'} callBack={()=>ButtonFoo1('ImVasya', 21)}/>
      <Button name={'MyChanel-2'} callBack={()=>ButtonFoo2('Im Ivan')}/>
      <Button name={'stupid button'} callBack={ButtonFoo3}/>
    </div>
  );
}

export default App;
