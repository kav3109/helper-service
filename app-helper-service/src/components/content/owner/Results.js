import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
import { useForm } from 'react-hook-form';

function CreateSurvey() {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(false);
    const idSurvey = localStorage.getItem('surveyId');

    function onSubmit(data) {
        console.log('done');
    }

    return (
        <div className="content card w-50">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormattedMessage id="app.participant.surveyId" defaultMessage="Survey ID">
                        {(message) => <input type="text"
                                             name="surveyID"
                                             className="form-control question mx-auto mb-1"
                                             placeholder={message}
                                             value={idSurvey? idSurvey: undefined}
                                             ref={register({required: true})}
                        />}
                    </FormattedMessage>
                    {error?<p className="error">
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
export default CreateSurvey;