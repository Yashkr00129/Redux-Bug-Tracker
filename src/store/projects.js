import {createSlice } from "@reduxjs/toolkit";

let id = 0;
const slice=createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
})
export default slice.reducer
export const {projectAdded}=slice.actions

