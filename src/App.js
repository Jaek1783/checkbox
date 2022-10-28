import './App.css';
import {useRef, useState} from 'react';

import CheckBox from './CheckBox';
function App() {
  const checkedRef = useRef(null);
  const checkAllRef = useRef(null);

  const checkedAll = ()=>{
    // console.log(checkAllRef.current.checked);
    const check = [...checkedRef.current.children];
    // console.log(check.checked);
    for(let i=0; i<check.length; i++){
      // console.log(check[i]);
      check[i].checked = checkAllRef.current.checked;
    }
  };
  return (
    <div className="App">
      
      <CheckBox
      checkedRef={checkedRef}
      checkAllRef={checkAllRef}
      checkedAll={checkedAll}
      />
    </div>
  );
}

export default App;
