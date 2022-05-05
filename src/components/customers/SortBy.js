import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"

const SortBy = () => {

  const [stateDataSort ,setDataSort ] = useState({
    activeSort:null ,
    dataSort : [   
      {id:1 , name:" الاسم"},
      {id:2 , name:" الحالة"},
      {id:3 , name:"تاريخ الدفع"},
      {id:4 , name:" المده"},  
    ]
  })
  //start Active Class
  useEffect(() => {
    setDataSort(
      {...stateDataSort ,activeSort:stateDataSort.dataSort[0] }
    )
  }, [setDataSort])
   
  const HandelIndex = (index) =>{
    setDataSort(
      {...stateDataSort ,activeSort:stateDataSort.dataSort[index] }
    )
  }
  const HandelClassName= (index) =>{
    if(stateDataSort.dataSort[index] ==stateDataSort.activeSort ){
      return "span active"
    }else{
      return "span unActive"
    }
  }
//end Active Class

  return (
    <StyleSortBy    >
      <p> ترتيب حسب : </p>
      {stateDataSort.dataSort.map((item , index )=>{
        return (
          <div className='main-sort' key={index}>
             <span className={HandelClassName(index)} onClick={()=>HandelIndex(index)}>{item.name}</span>
          </div>
        )
      })}
      
      
  
    </StyleSortBy>
  )
}
const StyleSortBy = styled.div`
  display: flex;
  p{
    margin: 0 8px;
    font-weight: bold;
    color: var(--font);
  }
.span{
  margin-left: 11px;
  cursor: pointer;
}
.unActive{
  color: var(--font);
}
.active{
  color: var(--primary-color);
} 

`


export default SortBy