import store from "./store/configureStore";
import { projectActions as projects } from "./store/projects";
import { bugActions as bugs } from "./store/bugs";


store.dispatch(bugs.bugAdded({description:"Bug 1"}))
store.dispatch(bugs.bugAdded({description:"Bug 2"}))
store.dispatch(bugs.bugAdded({description:"Bug 3"}))
store.dispatch(bugs.bugResolved({id:1}))
store.dispatch(projects.projectAdded({ name: "Project 1" }));
console.log(store.getState());
