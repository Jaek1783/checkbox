import React from "react";

const CheckBox = ({
    checkedRef,
    checkAllRef,
    checkedAll,
    checkedNum,
    checkedCheck
})=>{
    return(
        <div className="card">
            <form className="all_checked check">
                <input type="checkbox" name="selectAll" defaultChecked={false} onClick={checkedAll} ref={checkAllRef}/>
                <span>모두선택</span>
            </form>
            <form className="check checkNum" ref={checkedRef}>
                <label><input type="checkbox" name="checkbox" value="1" onChange={checkedCheck}/>1</label>
                <label><input type="checkbox" name="checkbox" value="2"onChange={checkedCheck}/>2</label>
                <label><input type="checkbox" name="checkbox" value="3"onChange={checkedCheck}/>3</label>
                <label><input type="checkbox" name="checkbox" value="4"onChange={checkedCheck}/>4</label>
            </form>
            <button  onClick={()=>{
                checkedNum();
            }}>전송</button>
        </div>
    )
};export default CheckBox;