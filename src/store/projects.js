import {createSlice } from "@reduxjs/toolkit";

let id = 0;
const projectSlice=createSlice({
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
export default projectSlice.reducer
export const projectActions=projectSlice.actions

