import React, { useState } from "react";
import { getVariable } from "../actions/variables";
import { connect } from "react-redux";
import { VARIABLE_NAMES_LIST } from "../constants";

const SelectVar = ({ getVariable }) => {
  const [varName, setVarName] = useState(" ");

  return (
    <div className="bb">
      <h2 className="h2">Choose a variable to plot from the list</h2>
      <form
        className="m"
        onSubmit={e => {
          e.preventDefault();
          getVariable(varName);
        }}
      >
        <select
          defaultValue={{ label: "Select a variable", value: " " }}
          onChange={e => setVarName(e.target.value)}
        >
          {VARIABLE_NAMES_LIST.map((element, index) => {
            return (
              <option key={index} value={element}>
                {element}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Get" className="m" />
      </form>
    </div>
  );
};

export default connect(
  null,
  { getVariable }
)(SelectVar);
