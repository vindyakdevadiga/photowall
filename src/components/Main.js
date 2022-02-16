import React, { Component } from 'react';
// import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhotos from './AddPhotos';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Single from './Single';
//import { useParams } from 'react-router-dom';


 class Main extends Component {
   state={
     loading:true

   }
    
  componentDidMount(){
    this.props.startLoadingPost().then(()=>{
      this.setState({loading:false})
    })
    this.props.startLoadingComments()
  }
    //  constructor(){      
    //      super();       
    //  }

    render() {
     
       return (
       
          <Router>
            <h1>
              <Link  to='/'>PhotoWall</Link>
            </h1>
            
            <Routes>
              <Route exact path="/" element={
                                                <div>
                                              <PhotoWall {...this.props}  />
                                              </div>  
                                            } /> 
                           
              <Route exact path='/create' element={<AddPhotos {...this.props}/>} />
              <Route path='/single/:id' element={<Single loading={this.state.loading} {...this.props}/>}/>
              </Routes>
            </Router>
          );
    }
}


export default Main;
