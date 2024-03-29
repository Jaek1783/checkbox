import './App.css';
import {useRef, useState} from 'react';

import CheckBox from './CheckBox';
import SelectedItem from './select';
function App() {
  const checkedRef = useRef(null);
  const checkAllRef = useRef(null);
  const checkboxesRef = useRef([]);
  const resultRef = useRef([]);

  const [selected, setSelected] = useState([]);
  let checkedArr = [];
  const checkedNum = ()=>{
    const check = [...checkedRef.current.children];
    for(let i=0; i<check.length;i++){
      if(check[i].children[0].checked){
        checkedArr.push(check[i].outerText);
        check[i].children[0].checked = false;
        checkAllRef.current.checked = false; // 체크박스 선택 해제
      }
    }
    // console.log(checkedArr);
    setSelected(checkedArr);

  };

  const checkedAll = ()=>{
    const check = [...checkedRef.current.children];

    for(let i=0; i<check.length; i++){
      check[i].children[0].checked = checkAllRef.current.checked;
    }
  };
  const checkedCheck =()=>{
    const checkboxes = checkboxesRef.current;
    const checked = checkboxes.filter(checkbox => checkbox.checked);
  if(checkboxes.length === checked.length){
      checkAllRef.current.checked = true;
    }
    else{
      checkAllRef.current.checked = false;
    }

  }

  return (
    <div className="App">
      <CheckBox
      checkedRef={checkedRef}
      checkAllRef={checkAllRef}
      checkedAll={checkedAll}
      checkedNum={checkedNum}
      checkedCheck={checkedCheck}
      checkboxesRef ={checkboxesRef}
      />
      <SelectedItem 
      selected={selected} 
      setSelected = {setSelected}
      resultRef={resultRef}
      />
    </div>
  );
}

export default App;
