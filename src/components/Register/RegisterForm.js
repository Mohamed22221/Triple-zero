import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
const REGISTER_URL = 'admins/register';

const RegisterFrom = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";

    
    const nameRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('12345678');
    const [email, setEmail] = useState('superadmin@info.me');
    const [password, setPassword] = useState('12345678');
    const [password_confirmation, setPassword_confirmation] = useState('12345678');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', password_confirmation);


        try {
            const response = await axios.post(REGISTER_URL,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                },
            }
            )
          
            // console.log('response', response);
            navigate(from, { replace: true });
            setName('');
            setEmail('');
            setPassword('');
            setPassword_confirmation('');
        } catch (err) {
            if (!err?.response) {
                // console.log('err?.response:', err);
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <>
            <p ref={errRef} className={errMsg ? "errmsg mt-2" : "offscreen mt-3"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <div className='parent-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.139" height="19.552" viewBox="0 0 25.139 19.552">
                        <path id="envelope" d="M19.9,1H5.237C2.346,1,0,2.991,0,5.444V16.109c0,2.453,2.346,4.441,5.237,4.444H19.9c2.891,0,5.234-1.991,5.237-4.444V5.444C25.135,2.991,22.792,1,19.9,1ZM5.237,2.777H19.9a3.182,3.182,0,0,1,2.912,1.677l-8.021,6.807a3.561,3.561,0,0,1-4.445,0L2.325,4.455A3.182,3.182,0,0,1,5.237,2.777Zm14.664,16H5.237a2.934,2.934,0,0,1-3.142-2.666V6.777l6.771,5.741a5.928,5.928,0,0,0,7.408,0l6.771-5.741v9.332A2.934,2.934,0,0,1,19.9,18.775Z" transform="translate(0 -1)" fill="#6e6e6e" />
                    </svg>

                    <input
                        type="text"
                        id="name"
                        ref={nameRef}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        placeholder='ادخل الاسم'
                    />
                    
                </div>

                <div className='parent-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.139" height="19.552" viewBox="0 0 25.139 19.552">
                        <path id="envelope" d="M19.9,1H5.237C2.346,1,0,2.991,0,5.444V16.109c0,2.453,2.346,4.441,5.237,4.444H19.9c2.891,0,5.234-1.991,5.237-4.444V5.444C25.135,2.991,22.792,1,19.9,1ZM5.237,2.777H19.9a3.182,3.182,0,0,1,2.912,1.677l-8.021,6.807a3.561,3.561,0,0,1-4.445,0L2.325,4.455A3.182,3.182,0,0,1,5.237,2.777Zm14.664,16H5.237a2.934,2.934,0,0,1-3.142-2.666V6.777l6.771,5.741a5.928,5.928,0,0,0,7.408,0l6.771-5.741v9.332A2.934,2.934,0,0,1,19.9,18.775Z" transform="translate(0 -1)" fill="#6e6e6e" />
                    </svg>

                    <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder='ادخل بريدك الالكتروني'
                    />
                    
                </div>

                <div className='parent-input'>
                    <svg id="lock" xmlns="http://www.w3.org/2000/svg" width="22.346" height="24.828" viewBox="0 0 22.346 24.828">
                        <path id="Path_69" data-name="Path 69" d="M20.994,8.715V7.242c0-4-3.5-7.242-7.821-7.242S5.352,3.242,5.352,7.242V8.715A5.176,5.176,0,0,0,2,13.449v6.207a5.4,5.4,0,0,0,5.586,5.173H18.759a5.4,5.4,0,0,0,5.586-5.173V13.449A5.176,5.176,0,0,0,20.994,8.715ZM7.586,7.242a5.391,5.391,0,0,1,5.586-5.173,5.391,5.391,0,0,1,5.586,5.173V8.276H7.586ZM22.111,19.656a3.235,3.235,0,0,1-3.352,3.1H7.586a3.235,3.235,0,0,1-3.352-3.1V13.449a3.235,3.235,0,0,1,3.352-3.1H18.759a3.235,3.235,0,0,1,3.352,3.1Z" transform="translate(-2)" fill="#6e6e6e" />
                        <path id="Path_70" data-name="Path 70" d="M12.241,14A1.241,1.241,0,0,0,11,15.241v2.483a1.241,1.241,0,0,0,2.483,0V15.241A1.241,1.241,0,0,0,12.241,14Z" transform="translate(-1.069 -0.096)" fill="#6e6e6e" />
                    </svg>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        placeholder='ادخل كلمة السر'
                    />
                </div>

                <div className='parent-input'>
                    <svg id="lock" xmlns="http://www.w3.org/2000/svg" width="22.346" height="24.828" viewBox="0 0 22.346 24.828">
                        <path id="Path_69" data-name="Path 69" d="M20.994,8.715V7.242c0-4-3.5-7.242-7.821-7.242S5.352,3.242,5.352,7.242V8.715A5.176,5.176,0,0,0,2,13.449v6.207a5.4,5.4,0,0,0,5.586,5.173H18.759a5.4,5.4,0,0,0,5.586-5.173V13.449A5.176,5.176,0,0,0,20.994,8.715ZM7.586,7.242a5.391,5.391,0,0,1,5.586-5.173,5.391,5.391,0,0,1,5.586,5.173V8.276H7.586ZM22.111,19.656a3.235,3.235,0,0,1-3.352,3.1H7.586a3.235,3.235,0,0,1-3.352-3.1V13.449a3.235,3.235,0,0,1,3.352-3.1H18.759a3.235,3.235,0,0,1,3.352,3.1Z" transform="translate(-2)" fill="#6e6e6e" />
                        <path id="Path_70" data-name="Path 70" d="M12.241,14A1.241,1.241,0,0,0,11,15.241v2.483a1.241,1.241,0,0,0,2.483,0V15.241A1.241,1.241,0,0,0,12.241,14Z" transform="translate(-1.069 -0.096)" fill="#6e6e6e" />
                    </svg>
                    <input
                        type="password"
                        id="password_confirmation"
                        onChange={(e) => setPassword_confirmation(e.target.value)}
                        value={password_confirmation}
                        required
                        placeholder=' تاكيد كلة السر'
                    />
                </div>
                 <span className="forget">
                    <Link to="#">نسيت كلمة السر؟ اضغط هنا</Link>
                </span>
                <button className='btn btn-dark btn-lg w-100'>انشاء </button>
            </form>
            <p>
                
                <span className="line">
                    <Link to="/login">تسجيل دخول</Link>
                </span>
            </p>
        </>

    )
}

export default RegisterFrom
