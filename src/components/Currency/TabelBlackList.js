import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SortTabel from './SortTabel';
import { Link } from "react-router-dom";
import { getCurrency } from '../../store/CurrencySlice';

import Logo3 from "../../photo/slogan/user-avatar.svg"
import Logo1 from "../../photo/slogan/logo-rest.png"

const TableAllUsers = ({ searchSort, setSortSearch, HandelShowCustomer }) => {
    const UserData = useSelector(state => state.currency.currencies)
    const listView = useSelector(state => state.currency.listView)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrency())
    }, [dispatch])




    //sort tabel 
    const [sortedField, setSortedField] = useState([]);
    useEffect(() => {
        setSortedField(UserData)
    }, [UserData, setSortedField])

    const sortID = [...UserData].sort((a, b) => {
        return a.id < b.id ? 1 : -1;
    })
    const sortData = [...UserData].sort((a, b) => {
        return a.state > b.state ? 1 : -1;
    })
    const sortName = [...UserData].sort((a, b) => {
        return a.en_name < b.en_name ? 1 : -1;
    })
    const sortDuration = [...UserData].sort((a, b) => {
        return a.duration > b.duration ? 1 : -1;
    })
    const sortpaymentDate = [...UserData].sort((a, b) => {
        const dateA = new Date(a.paymentDate), dateB = new Date(b.paymentDate)
        return dateB - dateA
    })

    const sortedFieldBlackList = sortedField.filter(statusItem => statusItem.status == 0)


    const dataRender = (
        <>
            {
                sortedFieldBlackList.length == 0 ? <div><h3 className='text-center mt-5'>لا يوجد شركات شحن</h3></div>
                    : <>
                        {listView ?
                            <table>
                                <thead>
                                    <tr>

                                        <th >#</th>
                                        <th>  الأسم بالانجليزي </th>
                                        <th>رمز العمله </th>
                                        <th>سعر الصرف </th>
                                        <th> تسلسل </th>
                                        <th> الحالة </th>
                                        <th>الخيارات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <>
                                        {sortedFieldBlackList.filter((item) => {
                                            if (searchSort === "") {
                                                return item
                                            } else if (item.en_name.includes(searchSort)) {
                                                return item
                                            }
                                        }).map((user, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>
                                                        <Link className='text-link' to={`/currencies/${user.id}`}>{user.id}#</Link>
                                                    </td>
                                                    <td>
                                                        <span>{user.en_title}</span>
                                                    </td>


                                                    <td>
                                                        <span>{user.symbol}</span>
                                                    </td>
                                                    <td>
                                                        <span>{user.exchange_rate}</span>
                                                    </td>
                                                    <td ><span >{user.sequence}</span></td>
                                                    <td ><span className={user.status === 1 ? "green my-2 d-inline-block" : "red my-2 d-inline-block"}>{user.status == 1 ? "نشط" : "غير نشط"}</span></td>


                                                    <td >
                                                        <BiDotsHorizontalRounded className='BiDotsHorizontalRounded' />
                                                        <div className='select-clint'>
                                                            <Link to={`currencies/${user.id}`}> التفاصيل</Link>
                                                            <Link to={`currencies/${user.id}`}>بيانات العميل</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </>
                                </tbody>
                            </table>
                            :
                            <div className='row mt-2'>
                                {sortedFieldBlackList.filter((item) => {
                                    if (searchSort === "") {
                                        return item
                                    } else if (item.en_name.includes(searchSort)) {
                                        return item
                                    }
                                }).map((user, index) => {
                                    return (
                                        <div className='col-lg-3 mt-3'>
                                            <div className="card">
                                                <Link to={`/currencies/${user.id}`} className='img-parent'>
                                                    <img src={Logo1} className="card-img-top" alt="..." />
                                                </Link>
                                                <div className="card-body text-center">
                                                    <h6 className="card-title mb-1">
                                                        <Link to={`/currencies/${user.id}`}>{user.en_title}</Link>
                                                    </h6>
                                                    <p className='mt-2'>
                                                        <span>{user.symbol}</span>
                                                    </p>
                                                    <div className='row actions-btns'>
                                                        <div className='col-3 p-0 actions-list'>
                                                            <span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="BiDotsHorizontalRounded" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                                                <div className='select-clint'>
                                                                    <Link to={`/currencies/${user.id}`}>التفاصيل</Link>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className='col-4 p-0 flex-center'>
                                                            <span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? "نشط" : "غير نشط"}</span>
                                                        </div>
                                                        <div className='col-5 p-0'>
                                                            <Link to={`/currencies/${user.id}`} className="btn btn-main">التفاصيل</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}

                    </>
            }
        </>
    )

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
                sortpaymentDate={sortpaymentDate}
            />

            <div className='gird-show'>
                {dataRender}
            </div>

        </div>
    )
}



export default TableAllUsers