import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import './results.scss';

function QuestionsList(props) {
    return (
        <>
            {props.results.map((val, ind) => {
                return <QuestionItem key={val.quest}
                                     index={ind}
                                     question={val.quest}
                                     options={val.options}
                                     colors={props.colors}
                />
            })}
        </>
    )
}

QuestionsList.propTypes = {
    results: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string)
};

function QuestionItem(props) {
    return (
        <>
            <tr>
                <th scope="row">{props.index+1}</th>
                    <td>{props.question}</td>
                    <OptionsList options={props.options} colors={props.colors}/>
                    <CountList counts={props.options}/>
            </tr>
        </>
    )
}

QuestionsList.propTypes = {
    index: PropTypes.number,
    question: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    colors: PropTypes.arrayOf(PropTypes.string),
};

function OptionsList(props) {
    return (
        <td>
            {props.options.map((item, ind) => {
                return <OptionItem key={ind} value={item.val} color={props.colors[ind]}/>
            })}
        </td>
    )
}
OptionsList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    color: PropTypes.string
};

function OptionItem(props) {
    return (
        <>
            <span style={{backgroundColor: props.color}} className="colorOption"> </span>
            <span>{props.value}</span><br/>
        </>
    )
}
OptionItem.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string
};

function CountList(props) {
    return (
        <td>
            {props.counts.map((item, ind) => {
                return <CountItem key={ind} value={item.count} />
            })}
        </td>
    )
}
CountList.propTypes = {
    counts: PropTypes.arrayOf(PropTypes.object)
};

function CountItem(props) {
    return (
        <>
            <span>{props.value}</span><br/>
        </>
    )
}
CountItem.propTypes = {
    value: PropTypes.number
};

function TableResults(props) {

    return (
        <div className="tableWrapper">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                        <FormattedMessage id = "app.participant.results.table.questions" defaultMessage="Questions" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id = "app.participant.results.table.options" defaultMessage="Options" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id = "app.participant.results.table.counts" defaultMessage="Counts" />
                    </th>
                </tr>
                </thead>
                <tbody>
                <QuestionsList results={props.results} colors={props.colors}/>
                </tbody>
            </table>
        </div>
    )
}

TableResults.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    results: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};

export default TableResults;