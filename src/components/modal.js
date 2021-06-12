import React, {useState} from 'react';
import '../css/modal.css'
import {useDispatch} from "react-redux";
import {createPost} from "../redux/actions/posts";
import useInputValue from "../hooks/useInputValue";
const Modal = ({setModal}) => {
    const dispatch = useDispatch()
    const description = useInputValue('')
    const [image, setImage] = useState('')

    const handleClick = () => {
        dispatch(createPost(description.value(), image))
        setModal(false)
    }
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setModal(false)}>&times;</span>
                <h3>Создание публикации</h3>
                <p>Описание</p>
                <textarea {...description.bind} rows='5' cols = '50' style={{resize : 'none'}}/>
                <p>Изображение</p>
                <input onChange={(e) => setImage(e.target.files[0])} type="file"/>
                <button onClick={handleClick}>создать</button>
            </div>

        </div>
    );
};

export default Modal;