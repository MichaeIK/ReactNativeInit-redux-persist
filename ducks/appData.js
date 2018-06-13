export const SET_NEW_NUM = "SET_NEW_NUM";

const initialState = { num: 1 };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_NUM: {
      return {
        ...state,
        num: payload
      };
    }
    default:
      return state;
  }
};

export const setNewNumber = payload => {
  return {
    type: SET_NEW_NUM,
    payload
  };
};
