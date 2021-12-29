import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { Map } from "immutable";
import coursesNormalizer from "../schema/courses";

export const initialState = {};

const courseReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data.map(
        (course) => ({ ...course, isSelected: false })
      )));

    case SELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], true);

    case UNSELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], false);


    default:
      break;
  }
  return state;
}

export default courseReducer;