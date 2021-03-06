import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./Middleware/logger";
import toastify from "./Middleware/toastify";
import api from "./Middleware/api";

export default configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware(),
    logger({ destination: "console" }),
    toastify,
    api,
  ],
});
