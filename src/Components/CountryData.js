import React  from 'react';
import {Spinner, Table} from 'reactstrap';
import './country.css';
import {uid} from 'react-uid';

function Render({isLoading,errMess,data}){
   if(isLoading){
       return(
           <div style={{textAlign:'center'}}><Spinner animation="grow"></Spinner></div>
       )
   }else if(errMess){
       return(
           <div>{errMess}</div>
       )
   }
   else{
       return(
           <main>
           <Table bordered className="css-table">
           <thead>
           <tr>
            <th>Country</th>
            <th>New Confirmed</th>
            <th>New Recovered</th>
            <th>New Death</th>
            <th>Total Confirmed</th>
            <th>Total Recovered</th>
            <th>Total Death</th>
            <th>Date</th>
           </tr>
           </thead>
           
           {data.Countries.map((det)=>{
               return(
                  <tbody key={uid(det)}>
                       <tr>
                        <td>{det.Country}</td>
                         <td>{det.NewConfirmed}</td>
                         <td>{det.NewRecovered}</td>
                         <td>{det.NewDeaths}</td>
                         <td>{det.TotalConfirmed}</td>
                         <td>{det.TotalRecovered}</td>
                         <td>{det.TotalDeaths}</td>
                         <td>{new Date(det.Date).toDateString()}</td>  
                       </tr>            
                  </tbody>
           
               )
           })}
           </Table>
           </main>
       )
   }
}

const RenderDetail=(props)=>{
    return(
        <Render isLoading={props.isLoading} errMess={props.errMess} data={props.data}/>
    )
}

export default RenderDetail;