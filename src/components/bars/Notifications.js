import React ,{ useState } from 'react'
import Nntifications from "../../photo/icons/notifications.svg"
import styled from "styled-components"
import personlogin1 from "../../photo/person/personlogin1.jpg"

const Notifications = () => {
    const [notifications , setNotifications] = useState(false)
    const HandelNotifications = () => {
        setNotifications(!notifications)
    }
  return (
    <StyleNotifications notifications={notifications}>
        <img src={Nntifications} onClick={HandelNotifications} />
        <div className='content-notification'>
            <div className='title'>
            <h4>Notification</h4>
            </div>
            <div className='my-notification'>
            <div className='img-notification'>
                <img src={personlogin1} />
                <div className='img-what'>
                <h5>محمد حمدي</h5>
                <p>تمت إضافة تذكرة جديدة</p>
                </div>
            </div>
            <div className='time-notification'>
            <span>7 دقائق</span>
            </div>
            </div>
            <div className='my-notification'>
            <div className='img-notification'>
                <img src={personlogin1} />
                <div className='img-what'>
                <h5>كمال حمدي</h5>
                <p>تمت إضافة تذكرة جديدة</p>
                </div>
            </div>
            <div className='time-notification'>
            <span>20 دقيقه</span>
            </div>
            </div>
            <div className='my-notification'>
            <div className='img-notification'>
                <img src={personlogin1} />
                <div className='img-what'>
                <h5>علي سيد</h5>
                <p>تمت إضافة تذكرة جديدة</p>
                </div>
            </div>
            <div className='time-notification'>
            <span>4 دقائق</span>
            </div>
            </div>
        </div>
    </StyleNotifications>
  )
}
const StyleNotifications= styled.div`
position: relative;
img {
    cursor: pointer;
    margin-top: 5px;
    margin-left: 7px;

}
.content-notification{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    width: 270px;
    top: 55px;
    left: -5px;
    transition: 0.4s linear;
    opacity: ${props => props.notifications ? "1" : "0"};
    z-index: 2;
    .title{
        width: 100%;
        text-align: center;
        padding: 10px;
        background-color: var(--primary-color);
        color: white;

    }
    .my-notification{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        
        .img-notification{
            display: flex;
            align-items: center;
            padding: 7px;
            img{
                width: 50px;
                height: 50px;
                border-radius:50% ;
                border:2px solid var(--primary-color) ;
            }
            .img-what{
                h5{
                    font-weight: bold;
                }
                p{
                    font-size: 13px;
                    color: var(--font);
                }
            }
        }
        .time-notification{
            span{
                font-size: 12px;
                padding: 10px;
                opacity: 0.6;
            }
        }
    }
}
`
export default Notifications