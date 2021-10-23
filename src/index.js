import store from "./store/configureStore";
import { actions } from "./store/projects";

store.dispatch(actions.projectAdded({ name: "Project 1" }));
console.log(store.getState());
