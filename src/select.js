const SelectedItem = ({selectedItem})=>{
    return(
        <div className="card">
            <ul>
                {selectedItem.length === 0 ? <li>선택한 것이 아무것도 없습니다.</li>:
                selectedItem.map((list,index)=>{
                    return<li key={index}>{list}</li>
                })
                }                
            </ul>
        </div>
    )
};

export default SelectedItem;