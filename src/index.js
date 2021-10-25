import store from "./store/configureStore";
import * as apiActions from "./store/api";
import { loadBugs } from "./store/bugs"


store.dispatch(loadBugs())