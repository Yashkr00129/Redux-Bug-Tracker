import store from "./store/configureStore";
import { loadBugs, assignBugToUser } from "./store/bugs";
const { dispatch } = store;

dispatch(loadBugs());
setTimeout(()=>{dispatch(assignBugToUser(1,4))},2000)
