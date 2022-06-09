import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SortTabel from './SortTabel';
import {getDrivers} from './../../store/ClintSlice2'
import { Link } from "react-router-dom";
// import Logo3 from "../photo/slogan/slogan2.svg"

import Logo3 from "../../photo/slogan/user-avatar.svg"

import { getShipping } from '../../store/ShippingSlice';

const TabelShipping = ({searchSort , setSortSearch ,HandelShowCustomer }) => {
    //  const UserData = useSelector((state) => state.clint.DataUser) 
     const UserData = useSelector(state => state.shipping.shipping)
    // const UserData = useSelector(state => state.clients2.clientDrivers)
     
 /*   const UserData = [
         {
             id: 1,
             logo: Logo3,
             idUser: "#532Bn2 ",
             name: "سالم العتيبي1",
             dateSubscription: "5/6/2021",
             price: "$1300",
             duration: 7,
             paymentDate: "4/6/2022",
             state: "تاخر الدفع",
             clintemail: "info@easymedia",
             websitelink: "www.easymedia.agency",
             tradetype: "مقاولات",
             currencypaid: "المصري",
             compony: "مازيني",
             ReasonDelete: "فسخ العقد",
             DeleteDate: "4/6/2022",
         },
        ] */ 

    // axios.get('admins' ,headers: {})

    // const getClients = () => {
    //      try {
    //          const token = localStorage.getItem('token');
    //           axios.get('users', {
    //              headers: {
    //                  'Content-Type': 'application/json',
    //                  'Accept': 'application/json',
    //                  'Authorization': `Bearer ${token}`
    //              }
    //          }).then(response => {
    //             console.log('response:' , response.data.data);
    //         }).error(err => {
    //             console.log('error:' , err);
    //         })
    //         //  Axios.get('http://tracking.000itkw.com/api/users', {
    //         //      headers: {
    //         //         'Content-Type': 'application/json',
    //         //         'Accept': 'application/json',
    //         //         'Authorization': `Bearer ${token}`
    //         //      }
    //         //  })
    //         //  .then(response => {
    //         //      console.log('response:' , response.data.data);
    //         //  }).error(err => {
    //         //      console.log('error:' , err);
    //         //  })

    //      } catch (err) {
    //          console.log('err', err.message);
    //      }
    // }

    const dispatch = useDispatch();
    useEffect(() => {
    //    getDrivers()
    dispatch(getShipping())
    }, [dispatch])




    //sort tabel 
    const [sortedField, setSortedField] = useState([]);
    useEffect(() => {
        setSortedField(UserData)
    }, [UserData, setSortedField])
    // useEffect(() => {
    //     setSortedField(sortName)
    // }, [setSortedField ,UserData])

    const sortID = [...UserData].sort((a , b)=>{
        return a.id < b.id ? 1 : -1;
    })
    const sortData = [...UserData].sort((a , b)=>{
        return a.status > b.status ? 1 : -1;
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

     console.log('sortedField', sortedField);
    

  return (
  <MainTabel>
     
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
      
    <Tabel>
        <Thead>
            <TrHead>
                <th >الشعار</th>
                <th >#</th>
                <th> الأسم بالانجليزي</th>
                <th>رقم التليفون</th>
                <th>الايميل</th>
                <th>حاله الدفع</th>
                <th>الخيارات</th>
            </TrHead>
        </Thead>
        <Tbody>
        {sortedField.filter((item)=>{
            if (searchSort === "") {
                return item
            } else if (item.en_name.includes(searchSort)) {
                return item
            }
        }).map((user , index) =>{
            return (
                <TrBody key={index}>
                    <td><Link className='my-2' to={`/ShippingCompanies/clint/${user.id}`}><img src={Logo3} alt="logo" /></Link></td>
                    <td>
                        <Link className='text-link' to={`/ShippingCompanies/clint/${user.id}`}>{user.id}#</Link>
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


                    <td ><span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? "نشط" : "غير نشط" }</span></td>
              

                    <td >
                     <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                     <div className='select-clint'>
                     <Link to={`/ShippingCompanies/clint/${user.id}`}> التفاصيل</Link>
                     <Link to={`/ShippingCompanies/clint/${user.id}`}>بيانات العميل</Link>
                     </div>
                    </td>
                </TrBody>
            )
        })}
        </Tbody>
    </Tabel>

  </MainTabel> 
  )
}
const MainTabel = styled.div`
    overflow-x: auto;
     width:100% ;
     height: 84vh;
    padding:  50px;
    

    @media (max-width:1180px) {
        padding: 0 0px;
    }
     &::-webkit-scrollbar{
        width: 0;   
    }


`
const Tabel = styled.table`
    text-align: center;
    border: 0px;
    border-spacing: 0px 20px;
    align-items: center;
    width:100% ;
    margin: 0;
    padding: 0;
    @media (max-width:1180px) {
        padding: 0 10px;
    }
    @media (max-width:770px ) {
     margin-top: 10px;
     padding: 0 0px;
    }
  

`
const Thead = styled.thead`
background-color:var(--secound-color);
color: white;

`
const TrHead = styled.tr`

th{
    padding: 10px 30px;
    @media (max-width:720px) {
     font-size: 13px;
     padding: 10px 40px;
    }
}
`
const Tbody = styled.tbody`
    border-radius: 10px;
    
`
const TrBody= styled.tr`
padding: 10px 5px;
border-top: 10px solid #ebebebe6;

td {
    background-color: white;    
    
    color: var(--font);
    font-size: 17px;
    &:first-child{
        border-radius: 0px 10px 10px 0;
    }
    &:last-child{
        border-radius: 10px 0px 0px 10px;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .BiDotsHorizontalRounded{
        margin-top: 10px;
        font-size: 30px;
        cursor: pointer;

    }
    @media (max-width:720px) {
     font-size: 15px;
     
    }
}
td:last-child{
    position: relative;
    &:hover{
        .select-clint{
            transform: scale(1);
            transform-origin: 0 100% 100% 100% ;
        }  
    }
    .select-clint{
        box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.46);
        -webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.40);
        -moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);
        position: absolute;
        transform: scale(0);
        transform-origin: 20% 40%;
        left: 20px;
        top: 40px;
        z-index: 4;
        width: 100px;
        display: flex;
        flex-direction: column;
        background-color: white;
        transition: 0.4s;    
        a{
            font-size: 14px;
            font-weight: bold;
            color: var(--font);
            cursor: pointer;
            padding: 5px 0;
            &:nth-child(1){
                border-bottom: 1px solid black;
            }

        }
    }
}


.red{
    color: var(--danger-color);
    font-weight: bold;
    background-color: #ff000015;
    padding: 10px;
    border-radius:30px ;
        
    }
.green{
    color: var(--succes-color);
    font-weight: bold;
    background-color: #00800015;
    padding: 10px;
    border-radius:30px ;
}

`

export default TabelShipping