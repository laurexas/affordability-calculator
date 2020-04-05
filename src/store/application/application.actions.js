import * as types from "../types";
import { isValid } from "../../utils/validateInput";
import * as service from "../../services/services";

export const onInputChange = (e) => {
  const { name, value } = e.target;

  const valid = isValid(value);

  return {
    type: types.ON_INPUT_CHANGE,
    name,
    value,
    valid,
  };
};

export const onSubmit = () => async (dispatch, getState) => {
  dispatch({ type: types.APPLICATION_FETCH_LOADING });
  const value = getState().application.input;
  try {
    const person = await service.fetchPerson(value);
    const affordability = await service.fetchAffordability(
      person.affordability_id
    );
    const exposure = await service.fetchExposure(
      affordability.affordability_min.exposure_id
    );
    dispatch({
      type: types.APPLICATION_FETCH_SUCCESS,
      affordability,
      person,
      exposure,
    });
  } catch (e) {
    console.log(e);
  }
};
