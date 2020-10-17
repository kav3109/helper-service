import React from 'react';
import StartResults from "./StartResults";
import PropTypes from 'prop-types';
import ChartResults from "./ChartResults";
import TableResults from "./TableResults";
import {COLORS} from "../../../../core/source/constants"

function FinalResults(props) {

    let results;
    const colors = setArrOfColors();

    function getMaxCountOfColors(data) {
        let countOfColors = 1;
        for(let key in data) {
            let i = Object.values(data[key].options);
            if(i.length > countOfColors) countOfColors = i.length;
        }
        return countOfColors;
    }

    function getRandomRGBColor() {
        return 'rgb(' + Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',0.75)'
    }

    function setArrOfColors() {
        let counter = getMaxCountOfColors(props.dataQuestions.questions);
        let arrColors = COLORS;
        if(counter > COLORS.length){
            for(let i = COLORS.length; i < counter; i++) {
                arrColors.push(getRandomRGBColor());
            }
            return arrColors;
        }else {
            return arrColors = COLORS.slice(0,counter);
        }
    }

    function countResults() {
        let dq = props.dataQuestions.questions;
        for(let key in dq) {
            let opt = dq[key].options;
            for(let key2 in opt) {
                opt[key2].count = getAnswers(dq[key].quest, opt[key2].val, opt[key2].count);
            }
        }
        return dq;
    }

    function getAnswers(question, option, counter) {
        let da = props.dataAnswers;
        for(let key in da) {
            if(typeof da[key] === 'object') {
                let ans = da[key].answers[question];
                if(typeof ans === 'object' && ans.indexOf(option) >= 0) counter +=1;
                if(typeof ans === 'string' && option === ans) counter +=1;
            }
        }
        return counter;
    }

    results = countResults();

    return (
        <div className="card w-75 m-auto">
            <div className="card-body">
                <TableResults colors={colors}
                              results={results}
                              title={props.dataQuestions.title}/>
                <ChartResults colors={colors}
                              results={results}
                              title={props.dataQuestions.title}/>
            </div>
        </div>
    )
}

StartResults.propTypes = {
    dataAnswers: PropTypes.arrayOf(PropTypes.object),
    dataQuestions: PropTypes.arrayOf(PropTypes.object)
};

export default FinalResults;