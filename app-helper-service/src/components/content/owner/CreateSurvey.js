import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Creater.scss';
import AddCustomBuilder from '../../Builder'

const plus = <FontAwesomeIcon icon={faPlus}/>;

function CreateSurvey() {

    let [type, setType] = useState('radio');
    let [inputState, setInputState] = useState({
        count: 0,
    });

    const handleType = (e) => {
        setType = e.target.value;
    };
    const handleInput = () => {
        setInputState(({ count }) => ({
            count: count + 1,
        }));
    };

    return (
        <div className="creater card">
            <div className="card-body">
                <h5>
                    <FormattedMessage
                        id = "app.creator.type"
                        defaultMessage="Select question type"
                    />
                </h5>
                <select className="form-control type mx-auto mb-1" id="type" onChange={handleType}>
                    <FormattedMessage id="app.creator.survey.radio" defaultMessage="Radiobutton">
                        {(message) => <option value="radio">{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage id="app.creator.survey.checkbox" defaultMessage="Checkbox">
                        {(message) => <option value="checkbox">{message}</option>}
                    </FormattedMessage>
                </select>
                <div className="template m-auto">
                    <div id='templateOptions'>
                        <FormattedMessage id="app.creator.question" defaultMessage="Your question">
                            {(message) => <input type="text" className="form-control question mx-auto mb-1" placeholder={message} />}
                        </FormattedMessage>
                        <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                            {(message) => <input type="text" className="form-control question mx-auto mb-1" placeholder={message} />}
                        </FormattedMessage>
                        <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                            {(message) => <input type="text" className="form-control question mx-auto mb-1" placeholder={message} />}
                        </FormattedMessage>
                        {[...Array(inputState.count)].map((val, ind) => <AddCustomBuilder key={ind}/>)}
                    </div>
                    <div className="plus mt-1 text-center" onClick={handleInput}>{plus}</div>


                    {/*<div className="form-check">*/}
                        {/*<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"*/}
                               {/*value="option1" />*/}
                        {/*<label className="form-check-label" htmlFor="exampleRadios1">*/}
                            {/*Default radio*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    {/*<div className="form-check">*/}
                        {/*<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"*/}
                               {/*value="option2" />*/}
                        {/*<label className="form-check-label" htmlFor="exampleRadios2">*/}
                            {/*Default radio*/}
                        {/*</label>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
export default CreateSurvey;