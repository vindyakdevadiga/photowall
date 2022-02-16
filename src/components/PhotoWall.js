import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const PhotoWall = (props) => {
    return (
        <div>
            <Link className='addIcon' to="/create"></Link>
        <div className='photoGrid'>
            {props.posts
            .sort(function(x,y)
            {return y.id -x.id
            })
            .map((post,index)=>(
                    <Photos key={index} post={post}  {...props} index={index}/>
            ))}
        </div>
        </div>
    )
}

PhotoWall.propTypes ={
    posts:PropTypes.array.isRequired
 
}

export default PhotoWall
