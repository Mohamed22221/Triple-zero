import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SortTabel from './SortTabel';
import { Link } from "react-router-dom";
// import Logo3 from "../photo/slogan/slogan2.svg"
import Logo3 from "../../photo/slogan/slogan2.svg"
import Axios from 'axios';
import axios from '../../api/axios';

const TabelAllUsers = ({searchSort , setSortSearch ,HandelShowCustomer }) => {
    // const UserData = useSelector((state) => state.clint.DataUser) 
    const UserData = [
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
    ] 

    // axios.get('admins' ,headers: {})

    const getClients = () => {
         try {
            //  await axios.get('admins', {
            //      header: {
            //          'Content-Type': 'application/json',
            //          'Accept': 'application/json',
            //          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjUwNTEyOTEzLCJleHAiOjE2NTA1MTY1MTMsIm5iZiI6MTY1MDUxMjkxMywianRpIjoiNmpJUkFGWjQ4OEQzeG4weSIsInN1YiI6IjYiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.3shQsl8YiAOU00JDgdWJ9lwLm9Fj9n74tZKtStr-lko'
            //      }
            //  })
            const token = localStorage.getItem('token');
             Axios.get('http://tracking.000itkw.com/api/users', {
                 header: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                    // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjUwNTEyOTEzLCJleHAiOjE2NTA1MTY1MTMsIm5iZiI6MTY1MDUxMjkxMywianRpIjoiNmpJUkFGWjQ4OEQzeG4weSIsInN1YiI6IjYiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.3shQsl8YiAOU00JDgdWJ9lwLm9Fj9n74tZKtStr-lko'
                 }
             })
             .then(response => {
                 console.log('response:' , JSON.stringify(response));
             }).error(err => {
                 console.log('error:' , err);
             })

         } catch (err) {
             console.log('err', err.message);
         }
    }

    useEffect(() => {
       getClients()
    },[])



    //sort tabel 
    const [sortedField, setSortedField] = useState([]);
    useEffect(() => {
        setSortedField(sortName)
    }, [setSortedField ])
    // useEffect(() => {
    //     setSortedField(sortName)
    // }, [setSortedField ,UserData])

    const sortData = [...UserData].sort((a , b)=>{
        return a.state > b.state ? 1 : -1;
    })
    const sortName = [...UserData].sort((a , b)=>{
        return a.name < b.name ? 1 : -1;
    })
    const sortDuration = [...UserData].sort((a , b)=>{
        return a.duration > b.duration ? 1 : -1;
    })
    const sortpaymentDate = [...UserData].sort((a , b)=>{
        const dateA = new Date(a.paymentDate), dateB = new Date(b.paymentDate)
        return dateB - dateA
    })
    

  return (
  <MainTabel>
      <SortTabel 
       setSortSearch={setSortSearch} 
       searchSort={searchSort} 
       HandelShowCustomer={HandelShowCustomer}
       UserData={UserData} 
       setSortedField={setSortedField}
       sortData={sortData} 
       sortName={sortName} 
       sortDuration={sortDuration}
       sortpaymentDate={sortpaymentDate}  />
    <Tabel>
        <Thead>
            <TrHead>
                <th >الشعار</th>
                <th >ID</th>
                <th>الأسم</th>
                <th>تاريخ الاشتراك</th>
                <th>السعر</th>
                <th>المدة</th>
                <th>تاريخ الدفع</th>
                <th>الحاله</th>
                <th>الخيارات</th>
            </TrHead>
        </Thead>
        <Tbody>
        {sortedField.filter((item)=>{
            if (searchSort === "") {
                return item
            } else if (item.name.includes(searchSort)) {
                return item
            }
        }).map((user , index) =>{
            return (
                <TrBody key={index}>
                    <td><Link className='my-2' to={`/Customers/clint/${user.name}`}><img src={user.logo} alt="logo" /></Link></td>
                    <td>
                        <span>{user.idUser}</span>
                    </td>
                    <td>
                        <span>{user.name}</span>
                    </td>
                    <td>
                        <span>{user.dateSubscription}</span>
                    </td>
                    <td>
                        <span>{user.price}</span>
                    </td>
                    <td>
                        <span>{user.duration} اشهر</span>
                    </td>
                    <td>
                        <span>{user.paymentDate}</span>
                    </td>
                    <td ><span className={user.state === "تم الدفع" ? "green" : "red"}>{user.state}</span></td>
                    <td >
                     <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                     <div className='select-clint'>
                     <Link to={`/Customers/clint/${user.name}`}> التفاصيل</Link>
                     <Link to={`/Customers/clint/${user.name}`}>بيانات العميل</Link>
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


export default TabelAllUsers