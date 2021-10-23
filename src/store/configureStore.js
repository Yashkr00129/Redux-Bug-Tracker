import { configureStore } from "@reduxjs/toolkit";
import reducer from "./projects";

export default configureStore({ reducer });

