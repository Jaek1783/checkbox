import './App.css';
import {useRef, useState} from 'react';

import CheckBox from './CheckBox';
function App() {
  const checkedRef = useRef(null);
  const checkAllRef = useRef(null);
  let checkedArr = [];
  const checkedNum = ()=>{
    const check = [...checkedRef.current.children];
    // console.log(checkedRef.current.children);
    for(let i=0; i<check.length;i++){
      console.log(check[i].children[0].value);
      if(check[i].children[0].checked){
        checkedArr.push(check[i].children[0].value);
      }
    }
    console.log(checkedArr);
  };
  const checkedAll = ()=>{
    // console.log(checkAllRef.current.checked);
    const check = [...checkedRef.current.children];
    // console.log(checkedRef.current.children);
    for(let i=0; i<check.length; i++){
      // console.log(check[i]);
      check[i].children[0].checked = checkAllRef.current.checked;
      console.log(check[i].children);
    }
  };
  return (
    <div className="App">
      
      <CheckBox
      checkedRef={checkedRef}
      checkAllRef={checkAllRef}
      checkedAll={checkedAll}
      checkedNum={checkedNum}
      />
    </div>
  );
}

export default App;
