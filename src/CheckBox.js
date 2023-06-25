import React from "react";

const CheckBox = ({
    checkedRef,
    checkAllRef,
    checkedAll,
    checkedNum,
    checkedCheck,
    checkboxesRef
})=>{
    return(
        <div className="card">
            <form className="all_checked check">
                <input type="checkbox" name="selectAll" defaultChecked={false} onClick={checkedAll} ref={checkAllRef}/>
                <span>모두선택</span>
            </form>
            <form className="check checkNum" ref={checkedRef}>
                <label><input type="checkbox" name="checkbox"  onChange={checkedCheck} ref={ref => checkboxesRef.current[0] = ref}/>개</label>
                <label><input type="checkbox" name="checkbox" onChange={checkedCheck} ref={ref => checkboxesRef.current[1] = ref}/>고양이</label>
                <label><input type="checkbox" name="checkbox" onChange={checkedCheck} ref={ref => checkboxesRef.current[2] = ref}/>사자</label>
                <label><input type="checkbox" name="checkbox" onChange={checkedCheck} ref={ref => checkboxesRef.current[3] = ref}/>호랑이</label>
            </form>
            <button  onClick={()=>{
                checkedNum();
            }}>전송</button>
        </div>
    )
};export default CheckBox;