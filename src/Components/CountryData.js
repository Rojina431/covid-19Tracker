import React  from 'react';
import {Spinner, Table} from 'reactstrap';
import './country.css';
import {uid} from 'react-uid';
import {useState} from 'react';

function Render({isLoading,errMess,data}){

    const [search,setSearch]=useState([]);

    function SearchCountry(){
        let countryName=data.Countries
        return countryName.filter((data)=>data.Country.toLowerCase().indexOf(search)>-1)
    }
   const handleChange=(e)=>{
       setSearch(e.target.value)
   }

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
            <div className="mx-3 mb-2">   
             <input type="text" onChange={handleChange} placeholder="Search by country name"/>
           </div>
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
           
           {SearchCountry().map((det)=>{
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