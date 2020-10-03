import React from 'react';
import {FormattedMessage} from 'react-intl';

function Participant() {

    return (
        <div className="content card">
            <div className="card-body">
                <button type="button" className="btn btn-primary w-50 m-1 left">
                    <FormattedMessage
                        id = "app.start.button2"
                        defaultMessage="Participant"
                    />
                </button>
            </div>
        </div>
    )
}
export default Participant;