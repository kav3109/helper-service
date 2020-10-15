import React, {useState} from 'react';
import StartResults from "./StartResults";
import PropTypes from 'prop-types';
import ChartResults from "./ChartResults";
import TableResults from "./TableResults";

function FinalResults(props) {

    const [results, setResults] = useState();
    const colors = setArrOfColors();
    const questions = getQuestions();
    const options = getOptions();
    console.log('dataAnswers',props.dataAnswers);//TODO delete
    console.log('dataQuestions',props.dataQuestions);//TODO delete

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
            Math.floor(Math.random() * 256) + ',' + '0.75)'
    }

    function setArrOfColors() {
        let counter = getMaxCountOfColors(props.dataQuestions.questions);
        let arrColors = [];
        for(let i = 0; i < counter; i++) {
            arrColors.push(getRandomRGBColor());
        }
        return arrColors;
    }

    function getQuestions() {
        let arr = Object.values(props.dataQuestions.questions),
            arrQuestion = [];
        arr.forEach((val) => {
            arrQuestion.push(val.quest);
        });
        return arrQuestion;
    }

    function getOptions() {
        let arr = Object.values(props.dataQuestions.questions),
            arrOptions = [];
        arr.forEach((val) => {
            arrOptions.push(Object.values(val.options));
        });
        return arrOptions;
    }

    return (
        <div className="card w-75 m-auto">
            <div className="card-body">
                <TableResults colors={colors}
                              questions={questions}
                              options={options}
                              title={props.dataQuestions.title}/>
                <ChartResults colors={colors} />
            </div>
        </div>
    )
}

StartResults.propTypes = {
    dataAnswers: PropTypes.arrayOf(PropTypes.object),
    dataQuestions: PropTypes.arrayOf(PropTypes.object)
};

export default FinalResults;