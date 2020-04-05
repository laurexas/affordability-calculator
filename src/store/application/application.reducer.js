import * as types from "../types";

const initialState = {
  input: "",
  error: {},
  valid: false,
  loading: false,
  data: {
    person: null,
    exposure: null,
    affordability: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ON_INPUT_CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
        error: {},
        valid: action.valid,
      };
    }
    case types.APPLICATION_FETCH_LOADING: {
      return { ...state, loading: true };
    }
    case types.APPLICATION_FETCH_SUCCESS: {
      const { exposure, affordability, person } = action;
      //find sum of exposure values and multiply by affordability min
      const sum = exposure.values.reduce((a, b) => a + b, 0);
      const value = affordability.affordability_min.value * sum;

      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          affordability,
          person,
          exposure: value,
        },
        input: "",
      };
    }
    default:
      return state;
  }
};

export const getAppState = (state) => state.application;
