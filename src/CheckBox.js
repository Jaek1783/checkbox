import React from "react";

const CheckBox = ()=>{
    return(
        <div className="card">
            <form className="all_checked check">
                <input type="checkbox"  />
            </form>
            <form action="" class="check">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </form>
        </div>
    )
};export default CheckBox;