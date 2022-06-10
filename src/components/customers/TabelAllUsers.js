import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SortTabel from './SortTabel';
import {getClients2} from './../../store/ClintSlice2'
import { Link } from "react-router-dom";

import Logo3 from "../../photo/slogan/user-avatar.svg"

const TableAllUsers = ({searchSort , setSortSearch ,HandelShowCustomer }) => {
     const UserData = useSelector(state => state.clients2.clients2)
    
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getClients2())
    }, [dispatch])




    //sort tabel 
    const [sortedField, setSortedField] = useState([]);
    useEffect(() => {
        setSortedField(UserData)
    }, [UserData, setSortedField])

    const sortID = [...UserData].sort((a , b)=>{
        return a.id < b.id ? 1 : -1;
    })
    const sortData = [...UserData].sort((a , b)=>{
        return a.state > b.state ? 1 : -1;
    })
    const sortName = [...UserData].sort((a , b)=>{
        return a.en_name < b.en_name ? 1 : -1;
    })
    const sortDuration = [...UserData].sort((a , b)=>{
        return a.duration > b.duration ? 1 : -1;
    })
    const sortpaymentDate = [...UserData].sort((a , b)=>{
        const dateA = new Date(a.paymentDate), dateB = new Date(b.paymentDate)
        return dateB - dateA
    })

  return (
    <div className="main-table">
        <SortTabel 
        setSortSearch={setSortSearch} 
        searchSort={searchSort} 
        HandelShowCustomer={HandelShowCustomer}
        UserData={UserData} 
        setSortedField={setSortedField}
        sortData={sortData} 
        sortID={sortID} 
        sortName={sortName} 
        sortDuration={sortDuration}
        sortpaymentDate={sortpaymentDate}  />
        // TODO: table
        <table>
            <thead>
                <tr>
                    <th >الشعار</th>
                    <th >#</th>
                    <th> الأسم بالانجليزي</th>
                    <th>رقم التليفون</th>
                    <th>الايميل</th>
                    <th>العنوان</th>

                    
                    <th>الحالة</th>
                    <th>شركة الشحن</th>
                    <th>الخيارات</th>
                </tr>
            </thead>
            <tbody>
            {sortedField.filter((item)=>{
                if (searchSort === "") {
                    return item
                } else if (item.en_name.includes(searchSort)) {
                    return item
                }
            }).map((user , index) =>{
                return (
                    <tr key={index}>
                        <td><Link className='my-2' to={`/restaurants/${user.id}`}><img src={Logo3} alt="logo" /></Link></td>
                        <td>
                            <Link className='text-link' to={`/restaurants/${user.id}`}>{user.id}#</Link>
                        </td>
                        <td>
                            <span>{user.en_name}</span>
                        </td>

                        <td>
                            <span>{user.mobile}</span>
                        </td>
                        <td>
                            <span>{user.email}</span>
                        </td>
                        <td>
                            <span>{user.address}</span>
                        </td>

                        <td ><span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? "نشط" : "غير نشط" }</span></td>
                        <td>
                            <span>{user.user.ar_name }</span>
                        </td>
                        <td >
                        <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                        <div className='select-clint'>
                            <Link to={`/restaurants/${user.id}`}>بيانات المطعم</Link>
                            <Link to={`/shipping-companies/${user.user.id}`}>شركة الشحن</Link>
                        </div>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>

    </div> 
  )
}



export default TableAllUsers