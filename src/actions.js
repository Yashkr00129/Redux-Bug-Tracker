import * as actions from "./actionTypes";

export const bugAdded = (des) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: `${des}`,
    },
  };
};

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
