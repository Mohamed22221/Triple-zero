import React from 'react'
import { MdPersonAddAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AddDriver } from '../../store/StateSlice';
const AddClint = () => {
  const dispatch = useDispatch()
  const AddUsers = () => {
    dispatch(AddDriver(true))
  }
  return (
    <div >
      <button className='btn btn-main' onClick={AddUsers} >
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <span> إضافة سائق </span>
      </button>
    </div>
  )
}



export default AddClint