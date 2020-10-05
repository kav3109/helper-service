import React from 'react';

function QuestionList(props) {
    return (
        <>
            <p>quest test222</p>
            {props.list.map((val, ind) => {
                return <QuestionItem key={ind+val.quest} index={ind} values={val} />
            })}
        </>
    )
}

function QuestionItem(props) {
    return (
        <div className="card card-question mt-1 mx-auto">
            <div className="card-body">
                <h5><span>{props.index+1}. </span>{props.values.quest}</h5>
                <OptionList options={props.values.options} type={props.values.type} name={props.values.quest}/>
            </div>
        </div>
    )
}

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

function RadioItem(props) {
    return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={props.name} id={props.val}
                       value={props.val} />
                    <label className="form-check-label" htmlFor={props.val}>{props.val}</label>
            </div>
        </>
    )
}

function CheckboxItem(props) {
    return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id={props.val} value={props.val} />
                    <label className="form-check-label" htmlFor={props.val}>{props.val}</label>
            </div>
        </>
    )
}

export default function SurveyView(props) {

    return (
        <>
            {props.arrQuests.length > 0?
                <div className="questWrapper">
                    <QuestionList list={props.arrQuests}/>
                </div> : <p>no quests test</p>}
        </>
    )
}