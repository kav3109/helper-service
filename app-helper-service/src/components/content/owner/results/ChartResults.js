import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

function ChartResults(props) {

    function setLabels() {
        let labels = [];
        for(let i = 1; i <= props.results.length; i++) {
            labels.push('#'+i.toString())
        }
        return labels;
    }

    function setChartData() {
        let arr = [];
        props.colors.forEach((item, ind) => {
            arr.push({
                backgroundColor: item,
                data: setCounts(ind)
            })
        });
        return arr;
    }

    function setCounts(ind) {
        let arr = [];
        let count;
        for(let i = 0; i < props.results.length; i++) {
            count = (ind >= Object.keys(props.results[i].options).length)? 0 : props.results[i].options[ind].count;
            arr.push(count);
        }
        return arr;
    }

    const state = {
        data: {
            labels: setLabels(),
            datasets: setChartData()
        },
    };

    const setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,600,500);
        gradient.addColorStop(0, color);
        // gradient.addColorStop(0.95, "rgba(94,94,94, 0.2)");
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
                    legend: { display: false },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function(value) {if (value % 1 === 0) {return value;}}
                            }
                        }]
                    }
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