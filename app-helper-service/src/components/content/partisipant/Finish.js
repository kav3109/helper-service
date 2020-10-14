import React from 'react';
import {FormattedMessage} from 'react-intl';
import sem from '../../../core/source/ansem.jpeg';

function Finish() {

    return (
        <div className="content card">
            <div className="card-body">
                <h1 className="card-text">
                    <FormattedMessage id="app.participant.finish.sent" defaultMessage="Form was sent" />
                </h1>
                <img src={sem} alt="Ancle Sem" />
                <h2 className="did-it">
                    <FormattedMessage id="app.participant.finish.phrase" defaultMessage="You did it!" />
                </h2>
            </div>
        </div>
    )
}

export default Finish;