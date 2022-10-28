import React from "react";

const CheckBox = ({
    checkedRef,
    checkAllRef,
    checkedAll,
})=>{
    return(
        <div className="card">
            <form className="all_checked check">
                <input type="checkbox" defaultChecked={false} onClick={()=>{
                        checkedAll();
                }} ref={checkAllRef}/>
                <span>모두선택</span>
            </form>
            <form action="" className="check checkNum" ref={checkedRef}>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </form>
        </div>
    )
};export default CheckBox;