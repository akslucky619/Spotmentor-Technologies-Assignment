import data from "../classroom_data.json";

const initialState = {
  data: data,
  displayClass: "",
  isActive: false
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CLASS":
      return { ...state, displayClass: action.data };
    case "TOGGLE_ACTIVE":
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
};

export default classReducer;
