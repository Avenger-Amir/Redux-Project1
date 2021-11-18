import * as actions from "../actions/actionType";

let lastId=0;

export default function reducer(state=[],action){
  switch(action.type){
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id : lastId++ ,
          description : action.payload.description,
          resolved : false
        }
      ];
      break;
    case actions.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);
      break;
    case actions.BUG_RESOLVED:
      return state.map( function(bug){
        if(bug.id===action.payload.id){
          bug.resolved = true;
        }
        return bug;
      });
    default :
      return state;
  }
}