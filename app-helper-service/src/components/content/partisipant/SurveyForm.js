import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import db from '../../../firebase';
import Finish from './Finish'

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
                    return <RadioItem key={ind+inp.val} val={inp.val} name={props.name} register={props.register} />
                } else {
                    return <CheckboxItem key={ind+inp.val} val={inp.val} name={props.name} register={props.register} />
                }
            })}
        </>
    )
}

OptionList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
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
    const [userForm, setUserForm] = useState(getFormData());

    function getFormData() {
        let data;
        if(props.surveyData) {
            data = props.surveyData;
        } else {
            data = JSON.parse(localStorage.getItem('surveyData'));
        }
        return data;
    }

    function onSubmit(data) {
        //form validation
        for(let val in data) {
            if(data[val] === '' || data[val].length === 0) return;
        }
        let id = Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(1234, 4)));
        db.collection("answers").doc(userForm.questionID).set({
            [id]: {
                userName: userForm.userName,
                answers: data
                }
            }, {merge: true})
            .then(function() {
                console.log(data);
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        setUserForm(false);
        localStorage.clear('surveyData');
        localStorage.clear('started');
    }

    return (
        <div className="creater card">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="my-2 mx-1">{userForm.title}</h3>
                    {userForm?<QuestionList list={userForm.questions} register={register} />:null}
                    {userForm?<FormattedMessage id="app.participant.send" defaultMessage="SEND">
                        {(message) => <button type="submit" className="btn btn-primary mt-2">{message}</button>}
                    </FormattedMessage>:null}
                    {!userForm?<Finish />:null}
                </form>
            </div>
        </div>
    )
}

SurveyForm.propTypes = {
    surveyData: PropTypes.object
};

export default SurveyForm;