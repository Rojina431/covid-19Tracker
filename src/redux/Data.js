import * as ActionType from './ActionType';

export const Data=(state={
    isLoading:true,
    errMess:null,
    data:[]
},action)=>{
    switch(action.type){
        case ActionType.Load_Data:
            return {...state,  
                isLoading:true,
                errMess:null,
                data:[]}
    
        case ActionType.Add_Data:
            var data=action.payload
            console.log("data"+data)
            return {...state,  
                isLoading:false,
                errMess:null,
                data:data}

        case ActionType.Failed_Data:
            return {...state,  
                isLoading:false,
                errMess:action.payload,
                data:[]}
       default:
           return state;
}
}
