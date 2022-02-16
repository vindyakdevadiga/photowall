import React from 'react'
import { useParams } from 'react-router-dom';
import Photos from './Photos';
import Comment from './Comment';
//import {Link} from 'react-router-dom';


 function Single(props)  {
         const {id}=useParams();
         const posts=props.posts;
         const post= posts.find((post)=>post.id===Number(id))
         //console.log(props.comments)
         const comments=props.comments[id] || []
         const index= posts.findIndex((post)=>post.id===Number(id))
        if(props.loading===true){
            return <div className='loader'>...loading</div>
        }
        else if(post){
        return (
            <div  className='single-photo'>
                   <Photos key={id} post={post} {...props} index={index} />
                   <Comment startAddingComment={props.startAddingComment} comments={comments} id={id}/>
                   
            </div>
        )}
        else{
            return <h1>...No post found</h1>
        }
    }


export default Single
