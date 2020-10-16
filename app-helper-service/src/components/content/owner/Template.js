import React, {useState, useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import {SurveyContext} from './CreateSurvey';
import PropTypes from 'prop-types';

const plus = <FontAwesomeIcon icon={faPlus}/>;
const trash = <FontAwesomeIcon icon={faTrash}/>;
const TemplateContext = React.createContext();

function AllInputList(props) {
    return(
        <>
            {props.allInputs.map((inp) => {
                if(inp.id <= 1) {
                    return <StandartInput key={inp.id} index={inp.id} register={props.register} />
                } else {
                    return <CustomInput key={inp.id} index={inp.id} register={props.register} />
                }
            })}
        </>
    )
}

StandartInput.propTypes = {
    allInputs: PropTypes.arrayOf(PropTypes.object),
    register: PropTypes.func
};

function StandartInput(props) {

    return (
        <>
            <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                {(message) => <input type="text"
                                     name={'option'+props.index}
                                     className="form-control question mx-auto mb-1"
                                     placeholder={message}
                                     ref={props.register({required: true})}
                />}
            </FormattedMessage>
        </>
    )
}

StandartInput.propTypes = {
    index: PropTypes.number.isRequired,
    register: PropTypes.func
};

function CustomInput(props) {

    const {removeCustomInput} = useContext(TemplateContext);

    return(
        <>
            <div className="input-group mb-1">
                <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                    {(message) => <input type="text" className="form-control"
                                         name={'option'+props.index}
                                         placeholder={message}
                                         ref={props.register({required: true})}
                    />}
                </FormattedMessage>
                <div className="input-group-append">
                    <span className="input-group-text"
                          onClick={removeCustomInput.bind(null, props.index)}>{trash}</span>
                </div>
            </div>
        </>
    )
}

CustomInput.propTypes = {
    index: PropTypes.number.isRequired,
    register: PropTypes.func
};

function Template() {

    const { register, handleSubmit } = useForm();
    const [allInputs, setAllInputs] = useState([{id:0},{id:1}]);
    const {addQuestion} = useContext(SurveyContext);

    function clearForm() {
        let inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(el => el.value='');
    }

    function addCustomInput() {
        setAllInputs(allInputs.concat([{
            id: allInputs.length,
            val: ''
        }]));
    }

    function  removeCustomInput(id) {
        setAllInputs(allInputs.filter(val => val.id !== id));
    }
    
    function onSubmit(data) {
        let obj = {
            type: '',
            quest: '',
            options: []
        };
        let count = 0;
        for(let key in data) {
            if(count === 0) {
                obj.type = data[key];
            } else if(count === 1) {
                obj.quest = data[key];
            } else {
                obj.options.push({
                    val: data[key],
                    count: 0
                });
            }
            count++;
        }
        addQuestion(obj);
        clearForm();
    }

    return (
        <TemplateContext.Provider value={{ removeCustomInput}}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>
                    <FormattedMessage
                        id = "app.creator.type"
                        defaultMessage="Select question type"
                    />
                </h5>
                <select name="typeQuestion"
                        className="form-control type mx-auto mb-1"
                        id="type"
                        ref={register}
                >
                    <FormattedMessage id="app.creator.survey.radio" defaultMessage="Radio">
                        {(message) => <option value="radio">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage id="app.creator.survey.checkbox" defaultMessage="Checkbox">
                        {(message) => <option value="checkbox">{message}</option>}
                    </FormattedMessage>
                </select>
                <div className="template m-auto">
                    <div id='templateOptions'>
                        <FormattedMessage id="app.creator.question" defaultMessage="Your question">
                            {(message) => <input type="text"
                                                 name="question"
                                                 className="form-control question mx-auto mb-1"
                                                 placeholder={message}
                                                 ref={register({required: true})}
                            />}
                        </FormattedMessage>
                    </div>
                    <AllInputList allInputs={allInputs} register={register}/>
                    <div className="plus mt-1 text-center" onClick={addCustomInput}>{plus}</div>
                </div>
                <FormattedMessage id="app.creator.add" defaultMessage="Add">
                    {(message) => <button type="submit" className="btn btn-primary mt-1 add">
                        {message}</button>}
                </FormattedMessage>
            </form>
        </TemplateContext.Provider>
    )
}

export default Template;