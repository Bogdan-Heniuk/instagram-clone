import React from 'react';
import {FaUserCircle} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"
import '../css/post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className="post__head">
                <div className="head__avatar">
                    <FaUserCircle/>
                </div>
                <div className="head__text">
                    <div className="text__username">makarovv</div>
                    <div className="text__geo">Kiev, Ukraine</div>
                </div>
            </div>
            <div className="post__image"/>
            <div className="post__footer">
                <div className="footer__actions">
                    <div className='like-comment'>
                        <AiOutlineHeart/>
                        <FaRegComment/>
                    </div>
                    <div className='save'>
                        <BsBookmark/>
                    </div>
                </div>
                <div className="footer__likes">
                    Нравится <strong>33</strong>
                </div>
                <div className="footer__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maiores quisquam unde.
                    Alias beatae, eius eos eum, eveniet explicabo, itaque molestiae nesciunt possimus quibusdam quisquam reiciendis
                    sit soluta tempora velit.
                </div>
            </div>
        </div>
    );
};

export default Post;