import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

function ChartResults(props) {

    console.log(props.colors);
    console.log(props.results);

    function setLabels() {
        let labels = [];
        for(let i = 1; i <= props.results.length; i++) {
            labels.push('#'+i.toString())
        }
        return labels;
    }

    // function setData() {
    //     let data = [];
    //     props.results.forEach((val, id) => {
    //         data.push({
    //             backgroundColor:
    //         })
    //     })
    // }

    const state = {
        data: {
            labels: setLabels(),
            datasets: [
                {
                    backgroundColor: "rgba(255,255,0, 0.75)",
                    data: [2,0,1],
                },
                {
                    backgroundColor: "rgba(0,255,255, 0.75)",
                    data: [1,1,2],
                },
                {
                    backgroundColor: "rgba(255,0,0, 0.75)",
                    data: [0,2,2],
                },
            ]
        },
    };

    const setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,600,500);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133,122,144, 0.2)");
        return gradient;
    };

    const getChartData = canvas => {
        const data = state.data;
        if(data.datasets) {
            let colors = props.colors;
            data.datasets.forEach((set, i) => {
                set.backgroundColor = setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            })
        }
        return data;
    };

    return (
        <div className="chartLine">
            <h3 className="text-center">{props.title}</h3>
            <Bar
                options={{
                    responsive: true,
                    legend: { display: false }
                }}
                data={getChartData}
            />
        </div>
    )

}

ChartResults.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    results: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};

export default ChartResults;