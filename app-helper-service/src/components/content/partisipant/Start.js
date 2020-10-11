import React from 'react';
import {FormattedMessage} from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

function Start(props) {

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        props.userName(data.surveyID, data.userName);
        props.started();
    }

    return (
        <div className="content card">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormattedMessage id="app.participant.name" defaultMessage="Your full name">
                        {(message) => <input type="text"
                                             name="userName"
                                             className="form-control question mx-auto mb-1"
                                             placeholder={message}
                                             ref={register({required: true})}
                        />}
                    </FormattedMessage>
                    <FormattedMessage id="app.participant.surveyId" defaultMessage="Survey ID">
                        {(message) => <input type="text"
                                             name="surveyID"
                                             className="form-control question mx-auto mb-1"
                                             placeholder={message}
                                             ref={register({required: true})}
                        />}
                    </FormattedMessage>
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

Start.propTypes = {
    userName: PropTypes.func,
    started: PropTypes.func
};

export default Start;