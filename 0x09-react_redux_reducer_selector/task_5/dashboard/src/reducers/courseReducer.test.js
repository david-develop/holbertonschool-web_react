import courseReducer, { initialState } from './courseReducer';
import { Map, fromJS } from "immutable";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import coursesNormalizer from "../schema/courses";

describe('suite for courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    const state = courseReducer(undefined, {});

    expect(state).toEqual(Map(initialState));
  });

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const exampleAction = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ]
    };

    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const state = courseReducer(undefined, exampleAction);

    expect(state.toJS()).toEqual(coursesNormalizer(expectedState));
  });

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initialState)),
      action
    );

    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const exampleAction = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const exampleState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const expectedState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(exampleState)),
      exampleAction
    );

    expect(state.toJS()).toEqual(coursesNormalizer(expectedState));
  });
});
