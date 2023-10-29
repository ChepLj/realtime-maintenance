

import { useEffect, useState } from 'react';
import './App.css';
import { LeftSide } from './Components/JSXComponent/LeftSide/LeftSide';
import { RightSide } from './Components/JSXComponent/RightSide/RightSide';
import { ITF_UrlData } from './interface/interface';
import getDataFromDB from './api/getDataFromDB';

function App() {
  const initData ={
    ServerLocal1: '',
    ServerLocal2: '',
    ServerInternet1: '',
    ServerInternet2: '',
    ServerInternet3: '',
  }
  const [refresh, setRefresh] = useState<number>(0)
  const [urlData, setUrlData] = useState<ITF_UrlData>(initData)
  // console.log("🚀 ~ file: App.tsx:20 ~ App ~ urlData:", urlData)
  //get Data
  useEffect(()=>{
    // callback
    const callback =(result:any)=>{
      if(result.type === "SUCCESSFUL"){
        setUrlData(result.payload)
      }
      else{
        alert('Failed to get value')
      }
    }
    //---------
    getDataFromDB('Data/', callback)
    
  },[refresh])
  return (
    <div className="App">
      <LeftSide urlData={urlData}/>
      <RightSide urlData={urlData} setRefresh={setRefresh}/>
    </div>
  );
}

export default App;
