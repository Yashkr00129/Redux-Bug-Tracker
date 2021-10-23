import store from "./store/configureStore";
const { dispatch } = store;

dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    onSuccess: "bugsRecieved",
    onError: "apiRequestFailed",
  },
});
