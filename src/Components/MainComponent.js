import React, {Component} from 'react';
import {fetchData} from '../redux/ActionCreator';
import {connect} from 'react-redux';
import Render from './GlobalData';
import RenderDetail from './CountryData';

const mapStateToProps=(state)=>{
   return{
    data:state.data
   }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    fetchData:()=>dispatch(fetchData())
}
}

class Main extends Component{
     
    componentDidMount(){
      this.props.fetchData();
    }

    render(){
      return(
        <React.Fragment>
         <div className="">
           <h1>Covid-19 Tracker</h1>
           <Render data={this.props.data.data} isLoading={this.props.data.isLoading} errMess={this.props.data.errMess} />
           <RenderDetail data={this.props.data.data} isLoading={this.props.data.isLoading} errMess={this.props.data.errMess} />
           </div>
         </React.Fragment>
      )
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);