import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";

export const initialState = {};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({ ...course, isSelected: false }));

    case SELECT_COURSE:
      return state.map((course) => {
        if (course.id === action.index) course.isSelected = true;
        return course;
      });

    case UNSELECT_COURSE:
      return state.map((course) => {
        if (course.id === action.index) course.isSelected = false;
        return course;
      });
    default:
      break;
  }
  return state;
}

export default courseReducer;