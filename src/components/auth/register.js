import React from 'react';
import '../../css/register.css'
import {GrFacebook} from 'react-icons/gr'
import useInputValue from "../../hooks/useInputValue";
const Register = () => {
    const name = useInputValue('')
    const email = useInputValue('')
    const username = useInputValue('')
    const password = useInputValue('')

    const submitHandler = async () => {
        const response = await fetch('http://localhost:8000/auth/registration', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },

            body : JSON.stringify({
                name : name.value(),
                email : email.value(),
                username : username.value(),
                password : password.value()
            })
        })

        const responseToJSON = await response.json()
    }
    return (
        <div className='register'>
            <div className="container">
                <div className="register__inner">
                    <div className="register__image">
                        <img src="../../images/gramgram-removebg-preview.png" alt=""/>
                    </div>
                    <div className="register__form">
                        <div className="form__logo">
                            <img src="../../images/1024px-Instagram_logo.svg.png" width='210' height='70' alt=""/>
                        </div>
                        <div className="form__paragraph">
                            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                        </div>
                        <div className="form__button">
                            <button><GrFacebook/>Войти через фейсбук</button>
                        </div>
                        <div className="form__or">
                            <span className='line'/>
                            <span className='or'>или</span>
                            <span className='line'/>
                        </div>
                        <div className="form__inputs">
                            <input {...email.bind} type="text" placeholder='Моб.телефон или эл.адрес'/>
                            <input {...name.bind} type="text" placeholder='Имя и фамилия'/>
                            <input {...username.bind} type="text" placeholder='Имя пользователя'/>
                            <input  {...password.bind} type="password" placeholder='Пароль'/>
                        </div>
                        <div className="form__button register-btn">
                            <button onClick={submitHandler}>Регистрация</button>
                        </div>
                        <div className="form__politic">
                            Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie.
                        </div>
                        <div className="form__login-link">
                            <span className='login-link__text'>
                                Есть аккаунт?
                            </span>
                            <a href="">Вход</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;