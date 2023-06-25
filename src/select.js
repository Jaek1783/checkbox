const SelectedItem = ({ setSelected,selected ,resultRef})=>{
    const btnHandler = (e)=>{
        e.preventDefault();
        const checkedLabels = Array.from(resultRef.current)
        .filter((ref) => ref && ref.childNodes[0] && ref.childNodes[0].checked)
        .map((ref) => ref.childNodes[1].textContent);
    //   console.log(checkedLabels);

        const updateSelected = selected.filter(item => !checkedLabels.includes(item))
        // console.log(updateSelected)
        setSelected(updateSelected)

         // 체크박스 선택 해제
    Array.from(resultRef.current).forEach((ref) => {
        if (ref && ref.childNodes[0] && ref.childNodes[0].checked) {
          ref.childNodes[0].checked = false;
        }
      });
    }
    return(
        <div className="card">
            <form onSubmit={btnHandler}>
                {selected.length === 0 ? 
                <span>선택한 것이 아무것도 없습니다.</span>  :
                selected.map((l,index) => {
                    return <label key={index} ref={ref=>resultRef.current[index]=ref}><input type="checkbox" name="checkbox" />{l}</label>
                })  
            }
            {selected.length === 0 ? '' : <button type='submit'>삭제</button>}
            </form>
        </div>
    )
};

export default SelectedItem;