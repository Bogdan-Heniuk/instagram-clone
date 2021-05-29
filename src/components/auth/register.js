import React, {useState} from 'react';
import '../../css/register.css'
import {GrFacebook} from 'react-icons/gr'
import useInputValue from "../../hooks/useInputValue";
import {Link, useHistory} from "react-router-dom";

const Register = () => {
    const name = useInputValue('')
    const email = useInputValue('')
    const username = useInputValue('')
    const password = useInputValue('')
    const [registerError, setRegisterError] = useState('')
    const history = useHistory()

    const [errorMessage, setErrorMessage] = useState({
        name: null,
        email: null,
        username: null,
        password: null,
    })

    const validateInputs = () => {
        let nameError = null
        let emailError = null
        let usernameError = null
        let passwordError = null

        if (name.value().length < 5 || name.value().length > 12)
            nameError = 'Длина имени должна быть от 5 до 12 символов'
        if (!email.value().includes('@'))
            emailError = 'Неверный формат почты'
        if (username.value().length < 5 || username.value().length > 12)
            usernameError = 'Длина никнэйма должна быть от 5 до 12 символов'
        if (password.value().length < 5 || password.value().length > 12)
            passwordError = 'Длина пароля должна быть от 5 до 12 символов'

        setErrorMessage({
            name: nameError,
            email: emailError,
            username: usernameError,
            password: passwordError,
        })

        return !(nameError || emailError || usernameError || passwordError);
    }

    const submitHandler = async () => {
        const validated = validateInputs()
        if (!validated) return
        const response = await fetch('http://localhost:8000/auth/registration', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify({
                name: name.value(),
                email: email.value(),
                username: username.value(),
                password: password.value()
            })
        })

        const responseToJSON = await response.json()

        if (!response.ok) return setRegisterError(responseToJSON.message)

        name.clear()
        email.clear()
        username.clear()
        password.clear()

        history.push('/login')
    }

    return (
        <div className='register'>
            <div className="container">
                <div className="register__inner">
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
                            <input {...email.bind} type="text" placeholder='Эл.адрес'/>
                            <small className='error'>{errorMessage.email}</small>
                            <input {...name.bind} type="text" placeholder='Имя и фамилия'/>
                            <small className='error'>{errorMessage.name}</small>
                            <input {...username.bind} type="text" placeholder='Имя пользователя'/>
                            <small className='error'>{errorMessage.username}</small>
                            <input  {...password.bind} type="password" placeholder='Пароль'/>
                            <small className='error'>{errorMessage.password}</small>
                        </div>
                        <div className="form__button register-btn">
                            <button onClick={submitHandler}>Регистрация</button>
                        </div>
                        <div className="error">
                            {registerError}
                        </div>
                        <div className="form__politic">
                            Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в
                            отношении файлов cookie.
                        </div>
                        <div className="form__login-link">
                            <span className='login-link__text'>
                                Есть аккаунт?
                            </span>
                            <Link to="/login">Вход</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;