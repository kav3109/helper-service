import React from 'react';
import PropTypes from 'prop-types';

function QuestionList(props) {
    return (
        <>
            <h3 className="my-2 mx-1">
                {props.title}
            </h3>
            {props.list.map((val, ind) => {
                return <QuestionItem key={ind+val.quest} index={ind} values={val} />
            })}
        </>
    )
}

QuestionList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
};

function QuestionItem(props) {
    return (
        <div className="card card-question mt-2 mx-auto text-left">
            <div className="card-body">
                <h5><span>{props.index+1}. </span>{props.values.quest}</h5>
                <OptionList options={props.values.options} type={props.values.type} name={props.values.quest}/>
            </div>
        </div>
    )
}

QuestionItem.propTypes = {
    index: PropTypes.number,
    values: PropTypes.object
};

function OptionList(props) {
    return (
        <>
            {props.options.map((inp, ind) => {
                if(props.type === 'radio') {
                    return <RadioItem key={ind+inp} val={inp} name={props.name} />
                } else {
                    return <CheckboxItem key={ind+inp} val={inp} name={props.name} />
                }
            })}
        </>
    )
}

OptionList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    name: PropTypes.string
};

function RadioItem(props) {
    return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={props.name} id={props.val.replace(/\s+/g, '')}
                       value={props.val} />
                    <label className="form-check-label" htmlFor={props.val.replace(/\s+/g, '')}>{props.val}</label>
            </div>
            <br/>
        </>
    )
}

RadioItem.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string
};

function CheckboxItem(props) {
    return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id={props.val.replace(/\s+/g, '')} value={props.val} />
                    <label className="form-check-label" htmlFor={props.val.replace(/\s+/g, '')}>{props.val}</label>
            </div>
            <br/>
        </>
    )
}

CheckboxItem.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string
};

function SurveyView(props) {

    return (
        <>
            <QuestionList list={props.arrQuests} title={props.surveyName}/>
        </>
    )
}

SurveyView.propTypes = {
    arrQuests: PropTypes.arrayOf(PropTypes.object),
};

export default SurveyView;