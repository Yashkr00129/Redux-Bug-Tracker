import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});
store.dispatch(bugAdded("Fuck"));
store.dispatch(bugResolved(1));
console.log(store.getState());
console.log(store);
