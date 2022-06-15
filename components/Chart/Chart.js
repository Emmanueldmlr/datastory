import React from "react";
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import { LineChart } from "@carbon/charts-react";

const Chart = ({data, measure}) => {
    const options =  {
        "title": "Line (discrete)",
        "axes": {
            "bottom": {
                "title": measure,
                "mapsTo": "year",
                "scaleType": "labels"
            },
            "left": {
                "mapsTo": "value",
                "title": "Value",
                "scaleType": "linear"
            }
        },
        "height": "600px"
    }
    return (
    <LineChart
        data={data}
        options={options}  
   />
  );
}

export default Chart