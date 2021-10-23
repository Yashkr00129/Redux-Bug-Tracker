import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./Middleware/logger";

export default configureStore({
  reducer,
  middleware: [logger({ destination: "console" })],
});
 