import React, { useState, useRef } from 'react'
import styled from "styled-components"
import LoginManager from "./loginManager"
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAddBox } from 'react-icons/md';
import { BsArrowClockwise } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import { BsTextParagraph } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { getClients2 } from '../../store/ClintSlice2';
import { Link } from "react-router-dom";
import ButtonsAdd from './ButtonsAdd';
import { ShowNav } from '../../store/StateSlice';
import swal from 'sweetalert';

const TopBar = ({ title }) => {
    //show navBar 
    const dispatch = useDispatch()

    // const inputSearch = useRef('')

    // if (inputSearch.foucs) {
    //     // setShowSearch(false)
    //     console.log('ljkdfdklfjdfjkdfklj blue');
    // }

    // adds button
    const [buttons, setbuttons] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const HandelToggleBar = () => {
        dispatch(ShowNav())
    }

    const HandelButton = () => {
        setbuttons(!buttons)
    }
    const UserData = useSelector((state) => state.clients2.clients2)
    //filter search 
    const [filterSearch, setfilterSearch] = useState([])
    const [showSearch, setShowSearch] = useState(false);
    const [textResultSearch, setTextResultSearch] = useState('ادخل اسم العميل');
    const handelChange = (e) => {
        const valueInput = e.target.value
        setShowSearch(true)
        setInputValue(valueInput)
        if (valueInput == '') {
            setfilterSearch([])
            setTextResultSearch('لا يوجد نتائج بحث')
        } else {
            const searchString = valueInput.toLowerCase();
            const filteredFood = UserData.filter((food) => {
                return food.en_name.toLowerCase().includes(searchString);
            });
            setfilterSearch(filteredFood)
            if (filteredFood.length == 0) {
                setTextResultSearch('لا يوجد نتائج بحث')
            }
        }


        // const NewData = UserData.filter((item) => {
        //     return (
        //         item.en_name.includes(valueInput) 
        //     )
        // })
        // if (valueInput === "") {
        //     setfilterSearch([])
        // } else {
        //     setfilterSearch(NewData)
        // }
    }
    const handelLink = () => {
        setfilterSearch([])
    }

    const refrechRestaurants = () => {
        setLoading(true)
        dispatch(getClients2(1))
            .unwrap()
            .then(() => {
                swal("تم تنفيذ الامر بنجاح", {
                    icon: "success",
                    button: 'موافق',
                });
                setLoading(false)
            }).catch(() => {
                swal("عفوا لم يتم تنفيذ الامر", {
                    icon: "error",
                    button: 'موافق'
                });
                setLoading(false)
            })
    }

    const handelFocus = () => {
        setShowSearch(true)
        dispatch(getClients2(1))
    }
    const handelBlue = () => {
        setTimeout(() => {
            setShowSearch(false)
            setInputValue('')
        }, 500)
    }

    return (
        <StyleTopBar>
            <StyleRightTopBar>
                <div className='title-page'><h2>{title}</h2></div>
                <div className='search'>
                    <input type="search" placeholder='أبحث عن اسم العميل' onFocus={handelFocus} onBlur={handelBlue} value={inputValue} onChange={handelChange} />
                    <AiOutlineSearch className='icon-search' />
                    {/* <div className='filter-Search'> */}
                    {showSearch ?
                        <div className='filter-Search'>
                            {
                                filterSearch.length != 0 ? <>
                                    {
                                        filterSearch.map((item, index) => {
                                            return (
                                                <div className='click-Search' key={index}>
                                                    <Link to={`/restaurants/${item.id}`} onClick={handelLink}><p>{item.en_name}</p> </Link>
                                                </div>

                                            )
                                        })}

                                </>
                                    : <h6 className='text-center py-2'>
                                        {textResultSearch}
                                    </h6>
                            }
                        </div>
                        : null}
                    {/* </div> */}
                </div>

                <div className='icons-topbar'>
                    <button onClick={refrechRestaurants} disabled={loading ? true : false}>
                        {
                            !loading ? <BsArrowClockwise className='icon-topbar' /> : <i className="fa fa-spinner fa-spin" style={{ fontSize: 24, width: 40, display: 'inline-block' }} />
                        }



                    </button>
                    <MdAddBox className='icon-topbar' onClick={HandelButton} />
                    <ButtonsAdd buttons={buttons} setbuttons={setbuttons} />
                </div>

            </StyleRightTopBar>
            <StyleLeftTopBar>
                <LoginManager />
                <BsTextParagraph className='icon-topbar' onClick={HandelToggleBar} />
            </StyleLeftTopBar>

        </StyleTopBar>
    )
}
const StyleTopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:1114px) {
flex-direction: column;
justify-content: center;

}
`
const StyleRightTopBar = styled.div`
display: flex;
align-items: center;

.title-page h2{
    font-weight:bold ;
    font-size: 32px;
    padding-left: 25px;
    @media (max-width:460px) {  
        font-size: 19px;
    }
    @media (max-width:368px) {
        font-size: 16px;
    }
}
.search {
position: relative;
margin-left: 20px;

    input{
        all:unset ;
        background-color: var(--white-color);
        padding: 7px 50px 7px 15px;
        width: 750px;
        
        border-radius: 7px;
       
        &::placeholder{
            color: var(--font);
            @media (max-width:460px) {  
            width: 100px;
            font-size: 12px;
        }
        }
        @media (max-width:1610px) {
            width: 550px;
        }
        @media (max-width:1410px) {
            width: 350px;
        }
        @media (max-width:1220px) {
            width: 250px;
        }
        @media (max-width:1115px) {
            width: 150px;
        }
        @media (max-width:460px) {  
            width: 100px;
        }
        @media (max-width:368px) {
            width: 90px;
    }
    }
    .icon-search{
        position: absolute;
        right: 9px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 26px;
        color: var(--font);
        cursor: pointer;

    }
}
.icons-topbar{
    position: relative;
    display: flex;
    cursor: pointer;
    .icon-topbar{
        font-size: 30px;
        margin: 0 5px;
        @media (max-width:375px) {
            font-size: 24px;
            margin: 0 2px;
    }
    }

}
.filter-Search{
    position: absolute;
    background-color: white;
    width: 100%;
    z-index: 10;
    border-radius:0 0px 10px 10px;
    box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.46);
    -webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.40);
    -moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);
    max-height: 270px;
    overflow: auto;
    padding: 4px 0;
    .click-Search{
        padding: 2px 20px;
        transition: 0.2s;
        :hover{
                background-color: var(--background-color);
                
            }
        a{
            color: black;

        }
    }


}
`

const StyleLeftTopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.icon-topbar{
    z-index: 10;
    font-size: 35px;
    width: 40px;
    margin: 10px;
    cursor: pointer;
    display: none;
    @media (max-width: 1180px) {
        display:block
}
}
`
export default TopBar