import store from "./store";
import * as bugType from "./actions/actionCreator";
import * as actions from "./actions/actionType";



const unsubscribe = store.subscribe( () => {
  console.log("Store Changed!",store.getState());
})

console.log("amir");
console.log(bugType.bugAdded("Amir"));
store.dispatch(bugType.bugAdded("Amir"));
store.dispatch({
            type : actions.BUG_ADDED,
            payload : {
              description : "Bug1"
            }

});

store.dispatch({
  type : actions.BUG_ADDED,
  payload : {
    description : "Bug2"
  }

});


store.dispatch({
  type : actions.BUG_RESOLVED,
  payload : {
    id : 1
  }

});
//store.dispatch(bugType.bugAdded("Amir"));
console.log(store.getState());