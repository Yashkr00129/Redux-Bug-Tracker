import { createSlice } from "@reduxjs/toolkit";

let lastId = 1;
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        bugAssigned: [],
      });
    },
  },
});
export default userSlice.reducer;
export const userActions = userSlice.actions;
