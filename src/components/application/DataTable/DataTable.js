import React from "react";
import style from "./index.module.scss";
import Icon from "../../ui/Icon/Icon";
import { useSelector } from "react-redux";
import { getAppState } from "../../../store/application/application.reducer";

const DataTable = () => {
  const { data } = useSelector(getAppState);
  if (!data.person) return null;

  return (
    <div className={style.table}>
      <div className={style.row}>
        <div className={style.tableHead}>
          <Icon icon="dots" className={style.icon} />
          <span>Name:</span>
        </div>
        <div className={style.tableData}>
          <span>{data.person.name}</span>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.tableHead}>
          <Icon icon="dots" className={style.icon} />
          <span>Last name:</span>
        </div>
        <div className={style.tableData}>
          <span>{data.person.last_name}</span>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.tableHead}>
          <Icon icon="dots" className={style.icon} />
          <span>Range:</span>
        </div>
        <div className={style.tableData}>
          <span>
            {data.affordability.affordability_min.value} -{" "}
            {data.affordability.affordability_max.value}
          </span>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.tableHead}>
          <Icon icon="dots" className={style.icon} />
          <span>Exposure:</span>
        </div>
        <div className={style.tableData}>
          <span>{data.exposure}</span>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
