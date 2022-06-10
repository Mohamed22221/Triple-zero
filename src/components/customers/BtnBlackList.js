import React from 'react'
import {  HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const BlackList = () => {
  return (
    <button className='btn-outline btn-outline-dark'>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
        <Link to="/restaurants/black-list"><span>القائمه السوداء</span></Link>
    </button>
  )
}
export default BlackList