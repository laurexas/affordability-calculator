import React from "react";
import style from "./index.module.scss";
import TextInput from "../../ui/TextInput/TextInput";
import Button from "../../ui/Button/Button";
import {
  onInputChange,
  onSubmit,
} from "../../../store/application/application.actions";
import { useSelector, useDispatch } from "react-redux";
import { getAppState } from "../../../store/application/application.reducer";

const Searchbar = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAppState);

  return (
    <div className={style.searchbar}>
      <TextInput
        className={style.input}
        variant="outlined"
        name="input"
        label="Search"
        value={state.input}
        type="text"
        onChange={(e) => dispatch(onInputChange(e))}
        error={state.error.input}
      />
      <Button
        loading={state.loading}
        size="md"
        className={style.btn}
        variant="outlined"
        onClick={() => dispatch(onSubmit())}
        disabled={state.valid}
      >
        Submit
      </Button>
    </div>
  );
};

export default Searchbar;
