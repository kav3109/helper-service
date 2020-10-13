import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import db from '../../../firebase';

function QuestionList(props) {
    return (
        <>
            {props.list.map((val, ind) => {
                return <QuestionItem key={ind+val.quest} index={ind} values={val} register={props.register}/>
            })}
        </>
    )
}

QuestionList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
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
                       ref={props.register}/>
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
                       ref={props.register} />
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
    const [userForm, setUserForm] = useState(getFormData().questions);
    const [title, setTitle] = useState(getFormData().title);

    function getFormData() {
        let questions, title;
        if(props.questions) {
            questions = props.questions;
            localStorage.setItem('form', JSON.stringify(props.questions));
        } else {
            questions = JSON.parse(localStorage.getItem('form'));
        }
        title = questions.val.pop();
        return {
            title: title,
            questions: questions.val
        };
    }
    
    function onSubmit(data) {
        //form validation
        for(let val in data) {
            if(data[val] === '' || data[val].length === 0) return;
        }
        console.log(data);
        //****************************************************************************************8
        db.collection("answers").doc(props.surveyID).set({
            userName: props.userName,
            answers: data
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        //****************************************************************************************8
        setTitle('Form was sent!');
        setUserForm(false);
        // localStorage.clear('form');

    }

    return (
        <div className="creater card">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="my-2 mx-1">{title}</h3>
                    {userForm?<QuestionList list={userForm} register={register} />:null}
                    {userForm?<FormattedMessage id="app.participant.send" defaultMessage="SEND">
                        {(message) => <button type="submit" className="btn btn-primary mt-2">{message}</button>}
                    </FormattedMessage>:null}
                </form>
            </div>
        </div>
    )
}

SurveyForm.propTypes = {
    userName: PropTypes.string,
    surveyID: PropTypes.string,
    questions: PropTypes.array
};

export default SurveyForm;