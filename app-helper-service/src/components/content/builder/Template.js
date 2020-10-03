import React, {useState, useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const plus = <FontAwesomeIcon icon={faPlus}/>;
const trash = <FontAwesomeIcon icon={faTrash}/>;
const TemplateContext = React.createContext();

function AllInputList(props) {
    return(
        <>
            {props.allInputs.map((inp) => {
                if(inp.id <= 1) {
                    return <StandartInput key={inp.id} index={inp.id} />
                } else {
                    return <CustomInput key={inp.id} index={inp.id} />
                }
            })}
        </>
    )
}

function StandartInput(props) {

    const {setQuestionOption} = useContext(TemplateContext);
    const [val, setVal] = useState('');

    function handleInputValue(e) {
        setVal(e.target.value);
    }

    return (
        <>
            <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                {(message) => <input type="text" className="form-control question mx-auto mb-1"
                                     placeholder={message}
                                     onChange={handleInputValue}
                                     onBlur={setQuestionOption.bind(null, {id: props.index, val: val})}
                />}
            </FormattedMessage>
        </>
    )
}


function CustomInput(props) {

    const {removeCustomInput, setQuestionOption} = useContext(TemplateContext);
    const [val, setVal] = useState('');

    function handleInputValue(e) {
        setVal(e.target.value);
    }

    return(
        <>
            <div className="input-group mb-1">
                <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                    {(message) => <input type="text" className="form-control"
                                         placeholder={message}
                                         onChange={handleInputValue}
                                         onBlur={setQuestionOption.bind(null, {id: props.index, val: val})}
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

function Template() {

    const [allInputs, setAllInputs] = useState([{id:0, val:''},{id:1, val:''}]);
    const [question, setQuestion] = useState([{
        id: '',
        type: '',
        question: '',
        options: []
    }]);

    function handleId(id) {
        setQuestion({
            id: id,
            type: question.type,
            question: question.question,
            options: question.options
        });
    }
    function handleType(e) {
        setQuestion({
            id: question.id,
            type: e.target.value,
            question: question.question,
            options: question.options
        });
    }
    function handleQuestion(e) {
        setQuestion({
            id: question.id,
            type: question.type,
            question: e.target.value,
            options: question.options
        });
    }
    function handleOptions(e) {
        setQuestion({
            id: question.id,
            type: question.type,
            question: e.target.value,
            options: question.options
        });
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

    function test() {
        console.log(allInputs);
    }

    function setQuestionOption(obj) {
        allInputs.map((item) => {
            if(item.id === obj.id) item.val = obj.val;
        })
    }

    return (
        <TemplateContext.Provider value={{ removeCustomInput, setQuestionOption }}>
            <div className="creater card">
                <div className="card-body">
                    <h5>
                        <FormattedMessage
                            id = "app.creator.type"
                            defaultMessage="Select question type"
                        />
                    </h5>
                    <select className="form-control type mx-auto mb-1" id="type" onChange={handleType}>
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
                                {(message) => <input type="text" className="form-control question mx-auto mb-1"
                                                     placeholder={message}
                                                     onChange={handleQuestion}/>}
                            </FormattedMessage>
                        </div>
                        <AllInputList allInputs={allInputs}/>
                        <div className="plus mt-1 text-center" onClick={addCustomInput}>{plus}</div>
                    </div>
                    <FormattedMessage id="app.creator.add" defaultMessage="Add">
                        {(message) => <button type="button" className="btn btn-primary mt-1 w-50" onClick={test}>{message}</button>}
                    </FormattedMessage>
                </div>
            </div>
        </TemplateContext.Provider>
    )
}
export default Template;