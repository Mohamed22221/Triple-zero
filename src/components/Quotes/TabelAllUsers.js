import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SortTabel from './SortTabel';
import { getQuotes } from '../../store/QuotesSlice';
import { Link } from "react-router-dom";

import Logo3 from "../../photo/slogan/user-avatar.svg"
import Logo1 from "../../photo/slogan/logo-rest.png"

const TableAllUsers = ({ searchSort, setSortSearch, HandelShowCustomer }) => {
    const UserData = useSelector(state => state.quotes.quotes)
    const listView = useSelector(state => state.quotes.listView)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuotes())
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


    const dataRender = (
        <>
            {
                sortedField.length == 0 ? <div><h3 className='text-center mt-5'>لا يوجد اقتباسات</h3></div>
                    : <>
                        {listView ?
                            <table>
                                <thead>
                                    <tr>
                                        <th >الشعار</th>
                                        <th >#</th>
                                        <th> الأسم بالانجليزي</th>
                                        <th>التليفون</th>
                                        <th>الايميل</th>
                                        <th>حاله الدفع</th>
                                        <th>الخيارات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <>
                                        {sortedField.filter((item) => {
                                            if (searchSort === "") {
                                                return item
                                            } else if (item.en_name.includes(searchSort)) {
                                                return item
                                            }
                                        }).map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><Link className='my-2' to={`/quotes/${user.id}`}><img src={Logo3} alt="logo" /></Link></td>
                                                    <td>
                                                        <Link className='text-link' to={`/quotes/${user.id}`}>{user.id}#</Link>
                                                    </td>
                                                    <td>
                                                        <span>{user.en_title}</span>
                                                    </td>

                                                    
                                                    <td>
                                                        <span>{user.sequence}</span>
                                                    </td>
                                                    <td>
                                                        <span>{user.cost}</span>
                                                    </td>
                                                    <td>
                                                        <span>{user.months}</span>
                                                    </td>

                                                    <td >
                                                        <BiDotsHorizontalRounded className='BiDotsHorizontalRounded' />
                                                        <div className='select-clint'>
                                                            <Link to={`/quotes/${user.id}`}> التفاصيل</Link>
                                                            <Link to={`/quotes/${user.id}`}>بيانات العميل</Link>
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
                                {sortedField.filter((item) => {
                                    if (searchSort === "") {
                                        return item
                                    } else if (item.en_name.includes(searchSort)) {
                                        return item
                                    }
                                }).map((user, index) => {
                                    return (
                                        <div className='col-lg-3 mt-3'>
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <h6 className="card-title mb-1">
                                                        <Link to={`/quotes/${user.id}`}>{user.en_title}</Link>
                                                    </h6>
                                                    <p className='mt-2'>
                                                        <span>{user.sequence}</span>
                                                    </p>
                                                    <div className='row actions-btns'>
                                                        <div className='col p-0 actions-list'>
                                                            <span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="BiDotsHorizontalRounded" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                                                <div className='select-clint'>
                                                                    <Link to={`/quotes/${user.id}`}>التفاصيل</Link>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className='col p-0'>
                                                            <Link to={`/quotes/${user.id}`} className="btn btn-main">التفاصيل</Link>
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