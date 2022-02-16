import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class AddPhotos extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink=event.target.elements.Link.value;
        const description=event.target.elements.description.value;
        const post={
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink){
            this.props.startAddingPost(post)
          this.props.addPost(post);
          alert("Photo Added Succesfuly........")
           
        }


    }
    render() {
        return (
            <div>
                
                  <div className='form'>
                 <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Link' name="Link"/>
                    <input type='text' placeholder='Description' name="description"/>
                    <button className='button'>Post</button>
                    
                </form>
                <h2><Link to='/' >Go Back</Link></h2>
                </div>
            </div>
        )
    }
}

export default AddPhotos;
