import configureStore from "./store/configureStore";
import * as actions from "./store/projects";

const store = configureStore();

store.dispatch(actions.projectAdded({ name: "Project 1" }));
console.log(store.getState());
