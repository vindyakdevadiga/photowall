import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate} from 'react-router-dom';

const Photos = (props) => {
    const post=props.post
    const navigate=useNavigate()
  //  const {id,description,imageLink}=post;
    return (
       
            <figure className='figure'>
                <Link to={`/single/${post.id}`}><img className='photo' src={post.imageLink} alt={post.description}/></Link>
                
                <figcaption><p> {post.description}</p></figcaption>
                <div className='button-container'>
                <button  className='button' onClick={()=>{
                    props.startRemovingPost(props.index,post.id)
                   props.removePost(props.index);
                   navigate('/')
                }}>Remove</button>
                <Link  className='button-container button ' to={`/single/${post.id}`}>

                    
                    <div className='comment-count'>
                        <div className='speech-bubble'></div>
                        {props.comments[post.id] ? props.comments[post.id].length  : 0 }
                    </div>
                  
                </Link>
                </div>
            </figure>
           
    
    )
}

Photos.propTypes ={
    post:PropTypes.array.isRequired
    
}

export default Photos
