const authReducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "SIGN_IN":
            console.log(action.param);
        break; 
        //return action.payload;
        
        case "SIGN_OUT":
            window.location = '/sign-in'; 
            break;
        default:
            return 0;  
    }
};

export default authReducer;