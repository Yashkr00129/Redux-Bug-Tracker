import store from "./store/configureStore";
import * as apiActions from "./store/api";
import { bugActions } from "./store/bugs";

store.dispatch(
  apiActions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugs/bugsRecieved",
  })
);
