import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    clearPostData, commentPostInProfile,
    dislikePostInProfile,
    likePostInProfile
} from "../redux/actions/posts";
import '../css/viewPost.css'
import {FaRegComment, FaUserCircle} from "react-icons/fa";
import Avatar from "./avatar";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import useInputValue from "../hooks/useInputValue";

const ViewPost = ({setViewPostModal}) => {
    const dispatch = useDispatch()
    const postData = useSelector(state => state.postData)
    const input = useInputValue('')

    const handleCloseClick = () => {
        dispatch(clearPostData())
        setViewPostModal(false)
    }


    return (
        <div id="myModal" className="post-modal">
            <div className="post-modal-content">
                <span className="close" onClick={handleCloseClick}>&times;</span>
                <div className="modal-content-inner">

                    <div className="image" style={{
                        backgroundImage: `url("http://localhost:8000/uploads/${postData.image}")`,
                    }}>
                    </div>

                    <div className="info">
                        <div className="post-user">
                            {postData.avatar
                                ? <Avatar width='30px' height='30px' url={postData.avatar}/>
                                : <FaUserCircle className='post-user__avatar'/>
                            }
                            <div className="post-user__username">
                                {postData.username}
                            </div>
                        </div>
                        <div className="comments">
                            {postData.comments?.map(comment => {
                                return (
                                    <div className="comment">
                                        <div className="comment-user">
                                            <div className="comment-user__avatar">
                                                {comment.avatar
                                                    ? <Avatar width='30px' height='30px' url={comment.avatar}/>
                                                    : <FaUserCircle className='comment-user__avatar'/>
                                                }
                                            </div>
                                            <span className="comment-user__username">
                                        {comment.username}
                                    </span>
                                            <span className="comment-text">
                                    {comment.text}
                                </span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="post__footer prof">
                            <div className="footer__actions ">
                                <div className='like-comment'>
                                    <div className="like-action">
                                        {postData.isLiked
                                            ? <AiFillHeart color={'red'}
                                                           onClick={() => dispatch(dislikePostInProfile(postData.post_id))}/>
                                            : <AiOutlineHeart
                                                onClick={() => dispatch(likePostInProfile(postData.post_id))}/>}
                                    </div>
                                    <div className="comment-action">
                                        <FaRegComment/>
                                    </div>
                                </div>
                                <div className='save-action'>
                                    {postData.isSave
                                        ? <BsBookmarkFill/>
                                        : <BsBookmark/>
                                    }

                                </div>
                            </div>
                            <div className="footer__likes">
                                Нравится: {postData.likes}
                            </div>
                        </div>
                        <div className="comment-input">
                            <input {...input.bind} type="text" placeholder='Добавьте комментарий...'/>
                            <a onClick={(e) => {
                                e.preventDefault()
                                if(!input.value()) return
                                dispatch(commentPostInProfile(postData.post_id, input.value()))
                                input.clear()
                            }} className='submit-comment' href="" style={input.value() ? {color : "#0191e7"} : {color : '#8daecb'}}>Опубликовать</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;