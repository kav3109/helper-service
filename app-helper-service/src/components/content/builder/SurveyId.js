import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function SurveyView(props) {

    return (
        <div className="template mx-auto my-2 text-center">
            <h4>
                <FormattedMessage
                    id = "app.creator.id.title"
                    defaultMessage="Your survey ID"
                />
            </h4>
            <p>
                <FormattedMessage
                    id = "app.creator.id.description"
                    defaultMessage="Save it to send to participants and results view"
                />
            </p>
            <h3 className="surveyId">{props.id}</h3>
        </div>
    )
}

SurveyView.propTypes = {
    id: PropTypes.string
};

export default SurveyView;