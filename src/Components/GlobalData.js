import React from 'react';
import {Card,CardBody,CardText,Row,CardFooter} from 'reactstrap';
import './global.css'

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
          <Row className='card-main'>
              <Card className='card-css' color='secondary'>
                <CardBody>
                   <CardText>New Confirmed</CardText>
                   <CardText>{data.Global.NewConfirmed}</CardText>
                </CardBody>
                <CardFooter>Last Updated:{new Date(data.Date).toDateString()} </CardFooter>
              </Card>
              <Card className='card-css' color='success'>
              <CardBody>
                 <CardText>New Recovered</CardText>
                 <CardText>{data.Global.NewRecovered}</CardText>
              </CardBody>
              <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
            </Card>
            <Card  className='card-css' color='danger'>
            <CardBody>
              <CardText>New Deaths</CardText>
               <CardText>{data.Global.NewDeaths}</CardText>
            </CardBody>
            <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
          </Card>
          <Card  className='card-css'  color='secondary'>
          <CardBody>
             <CardText>Total Confirmed</CardText>
             <CardText>{data.Global.TotalConfirmed}</CardText>
          </CardBody>
          <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
        </Card>
        <Card  className='card-css' color='success'>
        <CardBody>
           <CardText>Total Recovered</CardText>
           <CardText>{data.Global.TotalRecovered}</CardText>
        </CardBody>
        <CardFooter>Last Updated: {new Date(data.Date).toDateString()} </CardFooter>
      </Card>
      <Card  className='card-css' color='danger'>
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