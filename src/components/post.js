import React from 'react';
import {FaUserCircle} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"
import {BsBookmarkFill} from "react-icons/bs"
import '../css/post.css'
import Avatar from "./avatar";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {dislikePost, likePostInFeed, savePostFromProfile} from "../redux/actions/posts";

const Post = ({postData}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const pushProfile = () => {
        history.push(`/profile/${postData.username}`)
    }

    return (
        <div className='post'>
            <div className="post__head" onClick={() => pushProfile()}>
                <div className="head__avatar">
                    {postData.avatar
                        ? <Avatar width='25px' height='25px' url={postData.avatar}/>
                        : <FaUserCircle/>
                    }
                </div>
                <div className="head__text">
                    <div className="text__username">{postData.username}</div>
                </div>
            </div>
            <div className="post__image" style={{
                backgroundImage: `url("http://localhost:8000/uploads/${postData.image}")`,
            }
            }/>

            <div className="post__footer">
                <div className="footer__actions">
                    <div className='like-comment'>
                        <div className="like-action" >
                            {postData.isLiked
                                ? <AiFillHeart color={'red'} onClick={() => dispatch(dislikePost(postData.post_id))}/>
                                :  <AiOutlineHeart onClick={() => dispatch(likePostInFeed(postData.post_id))}/>}
                        </div>
                        <div className="comment-action">
                            <FaRegComment/>
                        </div>
                    </div>
                    <div className='save-action'>
                        {postData.isSaved
                            ? <BsBookmarkFill />
                            : <BsBookmark />}
                    </div>
                </div>
                <div className="footer__likes">
                    Нравится: <strong>{postData.likes}</strong>
                </div>
                <div className="footer__description">
                    {postData.description}
                </div>
            </div>
        </div>
    );
};

export default Post;