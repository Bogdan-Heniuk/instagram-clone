import React from 'react';
import '../../css/register.css'
import {GrFacebook} from 'react-icons/gr'
import useInputValue from "../../hooks/useInputValue";

const Login = () => {
    const name = useInputValue('')
    const email = useInputValue('')
    const username = useInputValue('')
    const password = useInputValue('')

    const submitHandler = async () => {
        const response = await fetch('http://localhost:8000/auth/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify({
                email: email.value(),
                password: password.value()
            })
        })

        const responseToJSON = await response.json()
        console.log(responseToJSON);
    }
    return (
        <div className='register'>
            <div className="container">
                <div className="register__inner">
                    <div className="register__form">
                        <div className="form__logo">
                            <img src="../../images/1024px-Instagram_logo.svg.png" width='210' height='70' alt=""/>
                        </div>
                        <div className="form__inputs">
                            <input {...email.bind} type="text" placeholder='Моб.телефон или эл.адрес'/>
                            <input  {...password.bind} type="password" placeholder='Пароль'/>
                        </div>
                        <div className="form__button register-btn">
                            <button onClick={submitHandler}>Войти</button>
                        </div>
                        <div className="form__or">
                            <span className='line'/>
                            <span className='or'>или</span>
                            <span className='line'/>
                        </div>
                        <div className="form__button">
                            <button><GrFacebook/>Войти через фейсбук</button>
                        </div>

                        <div className="form__login-link">
                            <span className='login-link__text'>
                               У вас нет аккаунта?
                            </span>
                            <a href="">Зарегистрироваться</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;