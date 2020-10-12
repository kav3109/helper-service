import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import {register} from "../../../serviceWorker";

function QuestionList(props) {
    console.log(props.list);
    return (
        <>
            <h3 className="my-2 mx-1">
                {props.title}
            </h3>
            {props.list.map((val, ind) => {
                return <QuestionItem key={ind+val.quest} index={ind} values={val} register={props.register}/>
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
                <OptionList options={props.values.options}
                            type={props.values.type}
                            name={props.values.quest}
                            register={props.register}
                />
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
                    return <RadioItem key={ind+inp} val={inp} name={props.name} register={props.register} />
                } else {
                    return <CheckboxItem key={ind+inp} val={inp} name={props.name} register={props.register} />
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
                <input className="form-check-input"
                       type="radio"
                       name={props.name}
                       id={props.val.replace(/\s+/g, '')}
                       value={props.val}
                       ref={props.register({ required: true })}/>
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
                <input className="form-check-input"
                       type="checkbox"
                       name={props.name}
                       id={props.val.replace(/\s+/g, '')}
                       value={props.val}
                       ref={props.register({ required: true })} />
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

function SurveyForm(props) {

    const { register, handleSubmit } = useForm();
    const [userForm, setUserForm] = useState(getFormData());
    let title = userForm.val.pop(),
        arrQuestions = userForm.val;
    
    function getFormData() {
        let values;
        if(props.questions) {
            values = props.questions;
            localStorage.setItem('form', JSON.stringify(props.questions));
        } else {
            values = JSON.parse(localStorage.getItem('form'));
        }
        return values;
    }
    
    function onSubmit(data) {
        console.log('answers');
    }

    return (
        <div className="creater card">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <QuestionList list={arrQuestions} title={title} register={register} />
                    <FormattedMessage id="app.participant.start" defaultMessage="Start">
                        {(message) => <button type="submit"
                                              className="btn btn-primary mt-2">{message}</button>}
                    </FormattedMessage>
                </form>
            </div>
        </div>
    )
}

SurveyForm.propTypes = {
    userData: PropTypes.string,
    questionID: PropTypes.string,
    questions: PropTypes.object
};

export default SurveyForm;