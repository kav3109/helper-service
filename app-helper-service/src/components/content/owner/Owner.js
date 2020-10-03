import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Link} from 'react-router-dom';

function Owner() {

    return (
        <div className="content card">
            <div className="card-body">
                <Link to="/createSurvey" className="btn btn-primary w-75 m-1 right">
                    <FormattedMessage
                        id = "app.owner.button1"
                        defaultMessage="Survey"
                    />
                </Link>
                <Link to="/results" className="btn btn-primary w-75 m-1 left">
                    <FormattedMessage
                        id = "app.owner.button3"
                        defaultMessage="Results"
                    />
                </Link>
            </div>
        </div>
    )
}
export default Owner;