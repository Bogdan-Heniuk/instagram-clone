import React from 'react';
import {FaUserCircle} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"
import '../css/post.css'
import Avatar from "./avatar";

const Post = ({postData}) => {
    return (
        <div className='post'>
            <div className="post__head">
                <div className="head__avatar">
                    {postData.avatar
                        ? <Avatar width='25px' height='25px' url={postData.avatar}/>
                        : <FaUserCircle/>
                    }
                </div>
                <div className="head__text">
                    <div className="text__username">{postData.username}</div>
                    {/*<div className="text__geo">Kiev, Ukraine</div>*/}
                </div>
            </div>
            <div className="post__image" style={{
                backgroundImage: `url("http://localhost:8000/uploads/${postData.image}")`,
            }
            }/>
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
                    Нравится <strong>{postData.likes}</strong>
                </div>
                <div className="footer__description">
                    {postData.description}
                </div>
            </div>
        </div>
    );
};

export default Post;