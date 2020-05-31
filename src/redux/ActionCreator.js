import *  as ActionType from './ActionType';

export const fetchData=()=>dispatch=>{
    dispatch(dataLoading(true));
     return fetch('https://api.covid19api.com/summary')
         .then(response=>{
             if(response.ok){
                 return response;
             }else{
                 var error=new Error("Error"+response.status+": "+response.statusText)
                 error.response=response;
                 throw error;
             }
         },error=>{
             var errmess=new Error("Error",error.message)
             throw errmess;
         })
         .then(response=>response.json())
         .then(data=>dispatch(addData(data)))
         .catch(error=>dispatch(dataFailed(error)))
}

export const dataLoading=()=>({
    type:ActionType.Load_Data
})

export const addData=(data)=>({
    type:ActionType.Add_Data,
    payload:data
})

export const dataFailed=(errmess)=>({
     type:ActionType.Failed_Data,
     payload:errmess  
})