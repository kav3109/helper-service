import React from 'react';
import {FormattedMessage} from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

function StartResults(props) {

    const { register, handleSubmit } = useForm();
    let surveyId = localStorage.getItem('surveyId');

    function onSubmit(data) {
        props.started(data.surveyID);
    }

    return (
        <div className="content card start">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormattedMessage id="app.participant.surveyId" defaultMessage="Survey ID">
                        {(message) => <input type="text"
                                             name="surveyID"
                                             className="form-control question mx-auto mb-1"
                                             placeholder={message}
                                             defaultValue={surveyId? surveyId: undefined}
                                             ref={register({required: true})}
                        />}
                    </FormattedMessage>
                    {props.error?<p className="error">
                        <FormattedMessage
                            id = "app.participant.error"
                            defaultMessage="No such survey!"
                        />
                    </p>:null}
                    <FormattedMessage id="app.participant.start" defaultMessage="Start">
                        {(message) => <button type="submit"
                                              className="btn btn-primary mt-1"
                                              onClick={handleSubmit}>{message}</button>}
                    </FormattedMessage>
                </form>

            </div>

        </div>
    )
}

StartResults.propTypes = {
    started: PropTypes.func,
    error: PropTypes.bool
};

export default StartResults;