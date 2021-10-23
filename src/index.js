import store from "./store/configureStore";
import { projectActions as projects } from "./store/projects";
import {
  bugActions as bugs,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { userActions as users } from "./store/users";

store.dispatch(users.userAdded({ name: "user 1" }));
// store.dispatch(users.userAdded({ name: "user 2" }));
// store.dispatch(users.userAdded({ name: "user 3" }));

// store.dispatch(bugs.bugAdded({ description: "Bug 1" }));
// store.dispatch(bugs.bugAdded({ description: "Bug 2" }));
// store.dispatch(bugs.bugAdded({ description: "Bug 3" }));
// store.dispatch(bugs.bugResolved({ id: 1 }));

// store.dispatch(projects.projectAdded({ name: "Project 1" }));

const bugsAssigned = getBugsByUser(1)(store.getState());
console.log(bugsAssigned);

const unresolved = getUnresolvedBugs(store.getState());
console.log(store.getState());
