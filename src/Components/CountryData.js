import React  from 'react';
import {Table} from 'reactstrap';


function Render({isLoading,errMess,data}){
   if(isLoading){
       return(
           <h4>Loading</h4>
       )
   }else if(errMess){
       return(
           <div>{errMess}</div>
       )
   }
   else{
       return(
           <Table bordered>
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
           
           {data.Countries.map((det)=>{
               return(
                  <tbody>
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

       )
   }
}

const RenderDetail=(props)=>{
    return(
        <Render isLoading={props.isLoading} errMess={props.errMess} data={props.data}/>
    )
}

export default RenderDetail;