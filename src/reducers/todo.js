import { bindActionCreators } from "redux";

const initialstate={
    arr:[], 
}

const todo=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TODO":
        {
            const newarr=state.arr.concat([action.text]);
            return{
                ...state,
                arr:newarr,
            }
        }
        default:
        return state
    }
}

export default todo;
