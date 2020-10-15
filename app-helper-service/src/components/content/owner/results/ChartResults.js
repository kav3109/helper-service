import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

function ChartResults(props) {

    const state = {
        data: {
            labels:[
                "1",
                "2",
                "3",
                "4",
                "5"],
            datasets: [
                {
                    label: "Video",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [4,5,1,10,32,2,12]
                },
                {
                    label: "Music",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data: [14,15,21,0,12,4,2]
                }
            ]
        }
    };

    const setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,600,500);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133,122,144, 0.5)");
        return gradient;
    };

    const getChartData = canvas => {
        const data = state.data;
        if(data.datasets) {
            let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            })
        }
        return data;
    };

    return (
        <div style={{position: "relative", width: 600, height: 350, margin: "auto"}}>
            <h3>Chart example</h3>
            <Line
                options={{
                    responsive: true
                }}
                // data={state.data}
                data={getChartData}
            />
        </div>
    )

}

export default ChartResults;