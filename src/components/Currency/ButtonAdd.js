import React from 'react'
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AddCurrency } from '../../store/StateSlice';
const AddClint = () => {
  const dispatch = useDispatch()
  const AddUsers = () =>{
        dispatch(AddCurrency(true))
      }
  return (
    <div >
      <button className='btn btn-main' onClick={AddUsers} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span> إضافة عملة </span>
      </button>
    </div>
  )
}



export default AddClint