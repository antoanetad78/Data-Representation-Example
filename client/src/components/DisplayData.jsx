import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const DisplayData = ({ variable }) => {
  const labels = variable && variable.map(el => el.x);
  // console.log(labels);
  const datasets = variable && variable.map(el => el.y);
  // console.log(datasets);

  //   console.log(variable);

  const data = {
    labels,
    datasets: [
      {
        label: "Samples",
        data: datasets,
        fill: false,
        borderColor: "blue"
      }
    ]
  };

  return (
    <div>
      <p>Display data here</p>
      {data && <Line data={data} />}
    </div>
  );
};
const mapStateToProps = state => ({
  variable: state.variable
});
export default connect(mapStateToProps)(DisplayData);
