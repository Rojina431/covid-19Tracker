import React from 'react';
import {Card,CardBody,CardText,Row,CardFooter,Col,Container} from 'reactstrap';

function RenderData({isLoading,errMess,data}){
    if(isLoading){
        return(
            <h4>Loading</h4>
        )
    }else if(errMess){
        return(
            <h4>{errMess}</h4>
        )
    }else{
        return(
          <Row >
              <Card className='col-md-6 col-12 my-1 mx-5' color='secondary'>
                <CardBody>
                   <CardText>New Confirmed</CardText>
                   <CardText>{data.Global.NewConfirmed}</CardText>
                </CardBody>
                <CardFooter>Last Updated:{new Date(data.Date).toDateString()} </CardFooter>
              </Card>
              <Card className='col-md-6 col-12 my-1 mx-5' color='success'>
              <CardBody>
                 <CardText>New Recovered</CardText>
                 <CardText>{data.Global.NewRecovered}</CardText>
              </CardBody>
              <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
            </Card>
            <Card  className='col-md-6 col-12 my-1 mx-5' color='danger'>
            <CardBody>
              <CardText>New Deaths</CardText>
               <CardText>{data.Global.NewDeaths}</CardText>
            </CardBody>
            <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
          </Card>
          <Card  className='col-md-6 col-12 my-1 mx-5'  color='secondary'>
          <CardBody>
             <CardText>Total Confirmed</CardText>
             <CardText>{data.Global.TotalConfirmed}</CardText>
          </CardBody>
          <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
        </Card>
        <Card  className='col-md-6 col-12 mx-5 my-1' color='success'>
        <CardBody>
           <CardText>Total Recovered</CardText>
           <CardText>{data.Global.TotalRecovered}</CardText>
        </CardBody>
        <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
      </Card>
      <Card  className='col-md-6 col-12 mx-5 mt-1 mb-3' color='danger'>
      <CardBody>
         <CardText>Total Deaths</CardText>
         <CardText>{data.Global.TotalDeaths}</CardText>
      </CardBody>
      <CardFooter>Last Updated: {new Date(data.Date).toDateString()}  </CardFooter>
    </Card>
    </Row>
    
        )
    }
    
}

const Render=(props)=>{
    return(
      <div>
        <RenderData isLoading={props.isLoading} errMess={props.errMess} data={props.data}/>
      </div>  
    )
}

export default Render;