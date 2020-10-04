import React from 'react';

function QuestionList(props) {
    return (
        <>
            <p>quest test222</p>
            {props.list.map((val, ind) => {
                return <QuestionItem key={val.quest} index={ind} values={val} />
            })}
        </>
    )
}

function QuestionItem(props) {
    return (
        <div className="card card-question mt-1 mx-auto">
            <div className="card-body">
                <h5>test333</h5>
            </div>
        </div>
    )
}

function OptionList(props) {

}

function OptionItem(props) {

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