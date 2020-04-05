import React from "react";
import style from "./index.module.scss";
import Heading from "../../components/application/Heading/Heading";
import Searchbar from "../../components/application/SearchBar/SearchBar";
import DataTable from "../../components/application/DataTable/DataTable";

const Application = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Heading className={style.title}>Affordability calculator</Heading>
      </div>
      <div className={style.break}>:: ::</div>
      <Searchbar />
      <DataTable />
    </div>
  );
};

export default Application;
