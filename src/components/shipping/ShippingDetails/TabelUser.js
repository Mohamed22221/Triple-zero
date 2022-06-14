import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Link, useLocation } from "react-router-dom";
// import BlackList from './BtnBlackList';
import Logo3 from "../../../photo/slogan/user-avatar.svg"
import Logo1 from "../../../photo/slogan/logo-rest.png"
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { getShipping, handleListView } from '../../../store/ShippingSlice';
// import ButtonReturn from '../glopal/ButtonReturn';
// import ButtonAdd from './ButtonAdd';

const TableAllUsers = ({ dataDrivers=[] }) => {
    const location = useLocation();
    const dispatch = useDispatch()
    const statusBlackList = location.pathname.includes('black-list')

    const UserDataSelector = dataDrivers
    const listView = useSelector(state => state.shipping.listView)

    const [UserData, setUserData] = useState([])



    useEffect(() => {
        if (statusBlackList) {
            const BlackList = UserDataSelector.filter(statusItem => statusItem.status == 0)
            setUserData(BlackList)
            setSortValue('')
        } else {
            setUserData(UserDataSelector)
            setSortValue('')
        }
    }, [UserDataSelector, statusBlackList])


    useEffect(() => {
        dispatch(getShipping())
    }, [dispatch])



    const [resultData, setResultData] = useState([])
    const [sortValue, setSortValue] = useState('')


    const sortingItems = [
        { id: 1, name: 'id', title: '#' },
        { id: 2, name: 'en_name', title: 'الأسم' },
        { id: 3, name: 'mobile', title: 'التليفون' },
        { id: 4, name: 'email', title: 'الايميل' },
        { id: 5, name: 'status', title: 'الحالة' },
    ]

    const inputSearch = (e) => {

        if (e.target.value == '') {
            setResultData(UserData)
        } else {
            const searchString = e.target.value.toLowerCase();
            const filtered = UserData.filter((item) => {
                return item.en_name.toLowerCase().includes(searchString);
            });
            setResultData(filtered)
        }


    }

    const handleSort = (e) => {
        setResultData([...resultData].sort((a, b) => a[e] < b[e] ? 1 : -1))
        setSortValue(e)
    }

    useEffect(() => {
        setResultData(UserData)
    }, [UserData])

    const dataRender = (
        <>
            {
                resultData.length == 0 ? <div><h3 className='text-center mt-5'>لا يوجد سائقين</h3></div>
                    : <>
                        {listView ?
                            <table>

                                <thead>
                                    <tr>
                                        <th>الشعار</th>
                                        <th>#</th>
                                        <th>الأسم بالانجليزي</th>
                                        <th>التليفون</th>
                                        <th>الايميل</th>
                                        <th>الحالة</th>
                                        <th>حالة الاتصال</th>
                                        <th>الخيارات</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <>
                                        {resultData.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><Link className='my-2' to={`/drivers/${user.id}`}><img src={Logo3} alt="logo" /></Link></td>
                                                    <td>
                                                        <Link className='text-link' to={`/drivers/${user.id}`}>{user.id}#</Link>
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


                                                    <td ><span className={user.status === 1 ? "green" : "red"}>{user.status == 1 ? "نشط" : "غير نشط"} </span></td>
                                                    <td ><span className={user.isOnline == 1 ? "green" : "red"}>{user.isOnline == 1 ? "متصل" : "غير متصل"}  </span></td>

                                                    <td >
                                                        <BiDotsHorizontalRounded className='BiDotsHorizontalRounded' />
                                                        <div className='select-clint'>
                                                            <Link to={`/drivers/${user.id}`}> التفاصيل</Link>
                                                            <Link to={`/drivers/${user.id}`}>بيانات العميل</Link>
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
                                {resultData.map((user, index) => {
                                    return (
                                        <div className='col-lg-3 mt-3'>
                                            <div className="card">
                                                <Link to={`/drivers/${user.id}`} className='img-parent'>
                                                    <img src={Logo1} className="card-img-top" alt="..." />
                                                </Link>
                                                <div className="card-body text-center">
                                                    <h6 className="card-title mb-1">
                                                        <Link to={`/drivers/${user.id}`}>{user.en_name}</Link>
                                                    </h6>
                                                    <p className='mt-2'>
                                                        <a href={`tel:+${user.mobile}`}>{user.mobile}</a>
                                                    </p>
                                                    <div className='row actions-btns'>
                                                        <div className='col-3 p-0 actions-list'>
                                                            <span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="BiDotsHorizontalRounded" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                                                <div className='select-clint'>
                                                                    <Link to={`/drivers/${user.id}`}>التفاصيل</Link>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className='col-4 p-0 flex-center'>
                                                            <span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? "نشط" : "غير نشط"}</span>
                                                        </div>
                                                        <div className='col-5 p-0'>
                                                            <Link to={`/drivers/${user.id}`} className="btn btn-main">التفاصيل</Link>
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

            <div className='style-main-sort'>

                <div className='style-icons-sort'>
                    <AiOutlineBars className={`sort-icon ${listView ? 'active' : ''}`} onClick={() => dispatch(handleListView(true))} />
                    <AiOutlineAppstore className={`sort-icon ${!listView ? 'active' : ''}`} onClick={() => dispatch(handleListView(false))} />
                </div>

                <form className='form-search'>
                    <input type="search" placeholder='أبحث عن اسم السائق'
                        onChange={inputSearch} />
                    <AiOutlineSearch className='icon-search' />
                </form>

                <div className='sort-by'>

                    <p> ترتيب حسب : </p>
                    {sortingItems.map(item => {
                        return (
                            <div className='main-sort' key={item.id}>
                                <span className={item.name == sortValue ? 'active' : ''} onClick={() => handleSort(item.name)}>{item.title}</span>
                            </div>
                        )
                    })}
                </div>



            </div>

            <div className='gird-show'>
                {dataRender}
            </div>

        </div>
    )
}



export default TableAllUsers



































// import React from 'react'
// import styled from "styled-components";
// import OtherClint from './OtherUser';
// import { AiOutlineCopy } from 'react-icons/ai';
// import {CopyToClipboard} from 'react-copy-to-clipboard';

// const TabelClient = (props) => {
//     const {  name , idUser ,id, number , telephone , paymentDate ,
//           state , clintemail , websitelink  ,currencypaid  } = props
    
//   return (
      
// <StyleTabel>
//     <Tabel>
//         <Thead>
//             <TrHead>
//                 <th >User id</th>
//                 <th > id</th>
//                 <th>الأسم</th>
//                 <th>رقم اخر</th>
//                 <th>العنوان</th>
//                 <th>الحالة</th>
//             </TrHead>
//         </Thead>
//         <Tbody>
//             <TrBody >
//                 <CopyToClipboard text={idUser}>
//                 <td><p><AiOutlineCopy className='copy' /></p>{idUser}</td>
//                 </CopyToClipboard>
//                 <td>{id}</td>
//                 <td>{name}</td>         
//                 <td>{telephone === null ? "01245456" : telephone}</td>
//                 <td>{websitelink}</td>
//                 <td ><span className={state === 1 ? "green" : "red"}>{state === 1 ? "نشط" : "غير نشط" }</span></td>
//             </TrBody>
//         </Tbody>
//     </Tabel>
//     <OtherClint 
//     clintemail={clintemail}
//      websitelink={websitelink} 
//      currencypaid={currencypaid}
//      />
// </StyleTabel>
//   )
// }
// const StyleTabel = styled.div`
//     padding: 33px;
//     overflow-x: auto;
//      width:100% ;
//     @media (max-width:1180px) {
//         padding: 0 0px;
//     }
//      &::-webkit-scrollbar{
//         width: 0;   
//     }


// `
// const Tabel = styled.table`
// width: 100%;
// text-align :center ;
// border-spacing: 0px 20px;
// padding: 10px 0;

// `
// const Thead = styled.thead`
// background-color:var(--secound-color);
// color: white;
// `
// const TrHead = styled.tr`

// th{
//     padding: 10px 30px;
//     @media (max-width:720px) {
//      font-size: 13px;
//      padding: 10px 40px;
//     }
// }

// `
// const Tbody = styled.tbody`
// background-color: white;

// `
// const TrBody = styled.tr`
// position: relative;
// td:first-child{
//     display: flex;
//     cursor: pointer;
//     justify-content: center;
//     text-align: center;
//     align-items: center;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     @media (max-width:750px ) {
        
//     }
//     .copy{
       
//     }
//     :hover{
//         .copy{
//             color: var(--primary-color);
//         }
//     }
//     p{
//         margin-left: 4px;
//     }


// }
// td{
//     padding: 15px;
//     color: var(--font);
// }

// .red{
//     color: var(--danger-color);
//     font-weight: bold;
//     background-color: #ff000015;
//     padding: 10px;
//     border-radius:30px ;
        
//     }
// .green{
//     color: var(--succes-color);
//     font-weight: bold;
//     background-color: #00800015;
//     padding: 10px;
//     border-radius:30px ;
// }

// `
// export default TabelClient