import axios from "axios";
import * as apiActions from "../api";

// const action = {
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     method: "get",
//     data: {},
//     onSuccess: "bugsRecieved",
//     onError: "bugsRequestFailed",
//   },
// };

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiActions.apiCallBegan.type) return next(action);

    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://localhost:3001/api",
        url,
        method,
        data,
      });
      dispatch(apiActions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // General
      dispatch(apiActions.apiCallFailed(error));
      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }
  };

export default api;
