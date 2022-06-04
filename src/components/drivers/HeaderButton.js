import React, { useState } from 'react'
import styled from "styled-components"
import { FiPause } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import swal from 'sweetalert';
import ButtonReturn from '../glopal/ButtonReturn';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShowStop } from '../../store/StateSlice';
import { ShowDelete } from '../../store/StateSlice';
import {deleteClient, changeStatusClient} from './../../store/ClintSlice2'






const HeaderButton = ({HandelShowCustomer, id, status }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/Restaurants";
//    <button onClick={() => dispatch(ShowStop(true)) }><FiPause className='icon-button' />أقاف مؤقت</button>
//    <button  onClick={() =>dispatch(ShowDelete(true))} ><AiOutlineDelete className='icon-button' />حذف العميل</button>


const statusVal = status == 1 ? true : false;

const [handelStatus, setHandelStatus] = useState(statusVal);

const handelStatusClient = () => {


    // const title = statusVal ? 'هل تريد حقا ايقاف هذا العميل' : 'هل تريد حقا اعاده هذا العميل'
    const text = handelStatus ? 'من ايقاف هذا العميل' : 'من اعادة تشغيل هذا العميل'

    swal({
            title: 'هل أنت واثق؟',
            text: text,
            icon: "warning",
            buttons: {
                cancel: "الغاء",
                catch: {
                    text: "موافق",
                    value: "catch",
                },
            },
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(changeStatusClient(id))
                setHandelStatus(!handelStatus)
                swal("تم تنفيذ الامر بنجاح", {
                    icon: "success",
                    button: 'موافق'
                });
            } else {
                swal("تم الغاء الامر", {
                    icon: "error",
                    button: 'موافق'
                });
            }
        });
        
}
const handelDeleteClient = () => {
        swal({
                title: 'هل أنت واثق؟',
                text: 'من حذف هذا العميل',
                icon: "warning",
                buttons: {
                    cancel: "الغاء",
                    catch: {
                        text: "موافق",
                        value: "catch",
                    },
                },
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteClient(id))
                    navigate(from, { replace: true });
                    swal("تم تنفيذ الامر بنجاح", {
                        icon: "success",
                        button: 'موافق'
                    });
                } else {
                    swal("تم الغاء الامر", {
                        icon: "error",
                        button: 'موافق'
                    });
                }
            });

}




  return (
    <MainHeaderClint>
        <MainButtonClint>
            <button onClick={handelStatusClient}><FiPause className='icon-button' />أقاف مؤقت</button>
            <button onClick={handelDeleteClient} ><AiOutlineDelete className='icon-button' />حذف العميل</button>
        </MainButtonClint>
        <ButtonReturn title="/Drivers" />
        
    </MainHeaderClint>
  )
}
const MainHeaderClint = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom:1px solid var(--font-opacity) ;

`
const MainButtonClint = styled.div`
display: flex;
button {
    all: unset;
    display: flex;
    align-items: center;
    color: white;
    margin: 8px 10px ;
    padding: 8px 25px;
    border-radius: 8px;
    cursor: pointer;
    :first-child{
        background-color: var(--primary-color);
    }
    :last-child{
        background-color: var(--danger-color);
    }
    .icon-button{
        margin: 0 5px;
        font-size: 24px;
    }

}
@media (max-width:550px) {
    flex-direction: column;
    button{
        margin: 8px 5px ;
        padding: 8px 15px;
    }

    }
`

export default HeaderButton